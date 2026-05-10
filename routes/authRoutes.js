const express = require("express");
const router = express.Router();

const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        // Validate required fields
        if (!name || !email || !password) {
            return res.status(400).json({ error: "Name, email, and password are required" });
        }

        // Normalize input
        const normalizedEmail = email.trim().toLowerCase();
        const normalizedName = name.trim();

        // Check if user already exists
        const existingUser = await User.findOne({ email: normalizedEmail });
        if (existingUser) {
            return res.status(409).json({ error: "Email already registered. Please login instead." });
        }

        // Hash password efficiently
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user object
        const newUser = new User({
            name: normalizedName,
            email: normalizedEmail,
            password: hashedPassword,
            phone: (phone && phone.trim()) || ""
        });

        // Save to MongoDB
        const savedUser = await newUser.save();
        const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET || 'default-secret');

        // Return response immediately with user info
        return res.status(201).json({ 
            message: "Registration successful!",
            success: true,
            token: token,
            id: savedUser._id,
            name: savedUser.name,
            email: savedUser.email,
            phone: savedUser.phone || ""
        });

    } catch (error) {
        console.error("Registration error:", error);
        
        // Handle specific MongoDB errors
        if (error.code === 11000) {
            return res.status(409).json({ error: "Email already exists" });
        }
        
        return res.status(500).json({ error: "Registration failed. Please try again." });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        // Normalize email
        const normalizedEmail = email.trim().toLowerCase();

        // Find user by email
        const user = await User.findOne({ email: normalizedEmail });

        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Update login activity
        await User.findByIdAndUpdate(user._id, {
            $inc: { loginCount: 1 },
            $set: { lastLogin: new Date() }
        });

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'default-secret');

        // Return user data at top level for easier access
        return res.status(200).json({ 
            success: true,
            message: "Login successful",
            token: token,
            id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone || ""
        });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({ error: "Login failed. Please try again." });
    }
});

module.exports = router;
