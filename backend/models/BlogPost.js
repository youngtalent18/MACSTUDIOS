import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 200 },
  slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
  excerpt: { type: String, trim: true, maxlength: 500 },
  content: { type: String, required: true }, category: { type: String, trim: true },
  image: { type: String, trim: true }, author: { type: String, trim: true },
  published: { type: Boolean, default: false }, featured: { type: Boolean, default: false },
  publishedAt: { type: Date },
}, { timestamps: true });
schema.index({ published: 1, featured: 1, publishedAt: -1 });
export default mongoose.models.BlogPost || mongoose.model("BlogPost", schema);
