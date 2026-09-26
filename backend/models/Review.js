import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 120 },
  service: { type: String, trim: true, maxlength: 120 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  message: { type: String, required: true, trim: true, maxlength: 3000 },
  image: { type: String, trim: true },
  approved: { type: Boolean, default: false }, featured: { type: Boolean, default: false },
}, { timestamps: true });
schema.index({ approved: 1, featured: 1, createdAt: -1 });
export default mongoose.models.Review || mongoose.model("Review", schema);
