const express = require("express")

const ContactMessage = require("../models/ContactMessage")

const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const name = String(req.body.name || "").trim()
        const phone = String(req.body.phone || "").trim()
        const email = String(req.body.email || "").trim()
        const subject = String(req.body.subject || "Customer Message").trim()
        const message = String(req.body.message || "").trim()

        if (!name || !phone || !message) {
            return res.status(400).json({error: "Name, phone, and message are required"})
        }

        const savedMessage = await ContactMessage.create({
            name,
            phone,
            email,
            subject,
            message,
            source: req.body.source || "website"
        })

        res.status(201).json({
            success: true,
            message: "Message sent. Chickenoy will contact you soon.",
            id: savedMessage._id
        })
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = router
