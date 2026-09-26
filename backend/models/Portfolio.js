import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 200 },
  slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
  category: { type: String, trim: true }, description: { type: String, trim: true },
  type: { type: String, enum: ["image", "video", "youtube"], default: "image" },
  image: { type: String, trim: true }, video: { type: String, trim: true },
  youtubeVideoId: { type: String, trim: true }, youtubeUrl: { type: String, trim: true },
  featured: { type: Boolean, default: false }, published: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
}, { timestamps: true });
schema.index({ published: 1, featured: 1, order: 1 });
export default mongoose.models.Portfolio || mongoose.model("Portfolio", schema);
