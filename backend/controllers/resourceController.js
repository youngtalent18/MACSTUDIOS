import mongoose from "mongoose";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const reply = (res, status, body) => res.status(status).json({ success: status < 400, ...body });
const pick = (source, fields) => Object.fromEntries(fields.filter((key) => source[key] !== undefined).map((key) => [key, source[key]]));

export const resourceController = ({ Model, fields, publicFields = fields, publicFilter = {}, order = { createdAt: -1 }, publicCreate = false, statusField }) => ({
  create: async (req, res) => {
    try {
      const data = pick(req.body || {}, publicCreate ? publicFields : fields);
      if (data.email && !emailPattern.test(data.email)) return reply(res, 400, { message: "Validation failed", errors: { email: "Please provide a valid email address" } });
      if (Model.modelName === "Review") { data.approved = false; data.featured = false; }
      const doc = await Model.create(data);
      return reply(res, 201, { message: "Submitted successfully", data: doc });
    } catch (error) { return handleError(res, error); }
  },
  list: async (req, res) => {
    try {
      const filter = req.admin ? {} : { ...publicFilter };
      if (req.admin && statusField && req.query.status) filter[statusField] = req.query.status;
      if (req.query.featured === "true" && !req.admin) filter.featured = true;
      const page = Math.max(1, Number.parseInt(req.query.page, 10) || 1);
      const limit = Math.min(100, Math.max(1, Number.parseInt(req.query.limit, 10) || 20));
      const [data, total] = await Promise.all([Model.find(filter).sort(order).skip((page - 1) * limit).limit(limit), Model.countDocuments(filter)]);
      return reply(res, 200, { data, pagination: { page, limit, total, pages: Math.ceil(total / limit) } });
    } catch (error) { return handleError(res, error); }
  },
  get: async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) return reply(res, 400, { message: "Invalid id" });
    try {
      const data = await Model.findById(req.params.id);
      if (!data) return reply(res, 404, { message: "Record not found" });
      return reply(res, 200, { data });
    } catch (error) { return handleError(res, error); }
  },
  getBySlug: async (req, res) => {
    try {
      const data = await Model.findOne({ slug: req.params.slug, ...publicFilter });
      if (!data) return reply(res, 404, { message: "Record not found" });
      return reply(res, 200, { data });
    } catch (error) { return handleError(res, error); }
  },
  update: async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) return reply(res, 400, { message: "Invalid id" });
    try {
      const data = await Model.findByIdAndUpdate(req.params.id, { $set: pick(req.body || {}, fields) }, { new: true, runValidators: true });
      if (!data) return reply(res, 404, { message: "Record not found" });
      return reply(res, 200, { message: "Updated successfully", data });
    } catch (error) { return handleError(res, error); }
  },
  remove: async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) return reply(res, 400, { message: "Invalid id" });
    try {
      const data = await Model.findByIdAndDelete(req.params.id);
      if (!data) return reply(res, 404, { message: "Record not found" });
      return reply(res, 200, { message: "Deleted successfully", data: { id: data.id } });
    } catch (error) { return handleError(res, error); }
  },
});

export function handleError(res, error) {
  if (error.name === "ValidationError") {
    const errors = Object.fromEntries(Object.entries(error.errors).map(([key, value]) => [key, value.message]));
    return reply(res, 400, { message: "Validation failed", errors });
  }
  if (error.code === 11000) return reply(res, 409, { message: "A record with that value already exists", errors: { [Object.keys(error.keyPattern || {})[0] || "field"]: "This value is already in use" } });
  if (error.name === "CastError") return reply(res, 400, { message: "Validation failed", errors: { [error.path || "field"]: "Please provide a valid value" } });
  console.error("API error:", error);
  return reply(res, 500, { message: "Internal server error" });
}
