import Booking from "../models/Booking.js";
import Contact from "../models/Contact.js";
import Review from "../models/Review.js";
import BlogPost from "../models/BlogPost.js";
import Portfolio from "../models/Portfolio.js";
import { handleError } from "./resourceController.js";

export const getAdminStats = async (_req, res) => {
  try {
    const [bookingTotal, bookingPending, bookingConfirmed, contactTotal, contactNew, reviewTotal, reviewPending, reviewApproved, blogTotal, blogPublished, portfolioTotal, portfolioPublished] = await Promise.all([
      Booking.countDocuments(), Booking.countDocuments({ status: "pending" }), Booking.countDocuments({ status: "confirmed" }),
      Contact.countDocuments(), Contact.countDocuments({ status: "new" }), Review.countDocuments(), Review.countDocuments({ approved: false }), Review.countDocuments({ approved: true }),
      BlogPost.countDocuments(), BlogPost.countDocuments({ published: true }), Portfolio.countDocuments(), Portfolio.countDocuments({ published: true }),
    ]);
    return res.json({ success: true, data: {
      bookings: { total: bookingTotal, pending: bookingPending, confirmed: bookingConfirmed },
      contact: { total: contactTotal, new: contactNew },
      reviews: { total: reviewTotal, pending: reviewPending, approved: reviewApproved },
      blog: { total: blogTotal, published: blogPublished, drafts: blogTotal - blogPublished },
      portfolio: { total: portfolioTotal, published: portfolioPublished },
    } });
  } catch (error) { return handleError(res, error); }
};
