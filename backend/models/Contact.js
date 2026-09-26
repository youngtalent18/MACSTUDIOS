import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 120 },
  email: { type: String, required: true, trim: true, lowercase: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  phone: { type: String, trim: true, maxlength: 40 },
  subject: { type: String, required: true, trim: true, maxlength: 200 },
  message: { type: String, required: true, trim: true, maxlength: 5000 },
  status: { type: String, enum: ["new", "read", "replied", "archived"], default: "new" },
}, { timestamps: true });
schema.index({ status: 1, createdAt: -1 });
export default mongoose.models.Contact || mongoose.model("Contact", schema);
