const mongoose = require("mongoose")

const ContactMessageSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true, default: "" },
    subject: { type: String, trim: true, default: "Customer Message" },
    message: { type: String, required: true, trim: true },
    source: { type: String, default: "website" },
    isRead: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
})

ContactMessageSchema.index({ isRead: 1, createdAt: -1 })

module.exports = mongoose.model("ContactMessage", ContactMessageSchema)
