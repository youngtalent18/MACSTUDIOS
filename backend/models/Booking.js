import mongoose from "mongoose";

const schema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true, maxlength: 120 },
  phone: { type: String, required: true, trim: true, maxlength: 40 },
  email: { type: String, required: true, trim: true, lowercase: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  service: { type: String, required: true, trim: true, maxlength: 120 },
  preferredDate: { type: Date }, budget: { type: String, trim: true, maxlength: 100 },
  message: { type: String, required: true, trim: true, maxlength: 5000 },
  status: { type: String, enum: ["pending", "contacted", "confirmed", "completed", "cancelled"], default: "pending" },
}, { timestamps: true });
schema.index({ status: 1, createdAt: -1 });
export default mongoose.models.Booking || mongoose.model("Booking", schema);
