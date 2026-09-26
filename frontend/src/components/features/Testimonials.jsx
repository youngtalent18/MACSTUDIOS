import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../../lib/axios.js";

const TESTIMONIALS = [
  {
    name: "Kwame",
    service: "Design & Printing",
    rating: 5,
    message:
      "MACSTUDIOS did an amazing job with our designs and printing. The final result was clean, professional and exactly what we needed.",
  },
  {
    name: "Kwame",
    service: "Videography",
    rating: 5,
    message:
      "The team was professional from start to finish. The video quality was excellent and they really understood the vision we had.",
  },
  {
    name: "Kwame",
    service: "Content Creation",
    rating: 5,
    message:
      "Working with MACSTUDIOS was a great experience. They brought our ideas to life and delivered content that actually felt like our brand.",
  },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(TESTIMONIALS);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewNotice, setReviewNotice] = useState("");
  const [reviewError, setReviewError] = useState("");
  useEffect(() => {
    api.get("/reviews").then(({ data }) => setTestimonials(data.data || [])).catch((error) => console.error("Reviews API unavailable:", error));
  }, []);
  const submitReview = async (event) => {
    event.preventDefault(); const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form)); payload.rating = Number(payload.rating);
    setReviewNotice(""); setReviewError("");
    try { await api.post("/reviews", payload); form.reset(); setShowReviewForm(false); setReviewNotice("Thanks for sharing your experience. Your review is awaiting approval."); }
    catch (error) { setReviewError(error.response?.data?.message || "Unable to submit your review. Please try again."); }
  };
  return (
    <section className="bg-black px-6 py-20 text-white md:px-12 md:py-24 lg:px-15">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 70,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mb-12 md:mb-16"
      >
        <div>

          <div className="mb-3 flex items-center gap-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-orange-500">
              Clients Feedback
            </p>

            <span className="h-px w-10 bg-orange-500" />
          </div>

          <h2 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-4xl md:text-5xl lg:text-6xl">
            What our clients{" "}
            <span className="text-white/40">
              say about us.
            </span>
          </h2>

        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="grid gap-4 md:grid-cols-3"
      >

        {testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial._id || index}
            variants={{
              hidden: {
                opacity: 0,
                y: 60,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="group relative flex min-h-77.5 flex-col justify-between overflow-hidden border border-white/10 bg-white/3 p-6 md:p-7"
          >
            <div className="absolute left-0 top-0 h-px w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
            <div className="flex items-start justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
                <Quote
                  size={19}
                  strokeWidth={1.5}
                />
              </div>

              <span className="text-[10px] font-medium tracking-[0.2em] text-white/20">
                0{index + 1}
              </span>

            </div>
            <div className="mt-8 flex-1">

              <p className="text-base leading-7 text-white/70 md:text-[15px]">
                "{testimonial.message}"
              </p>

            </div>
            <div className="mt-8 border-t border-white/10 pt-5">

              <div className="flex items-end justify-between gap-4">

                <div>

                  <h3 className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-orange-500">
                    {testimonial.service}
                  </p>

                </div>


                {/* Stars */}

                <div className="flex gap-0.5">

                  {Array.from({
                    length: testimonial.rating,
                  }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={13}
                      fill="currentColor"
                      className="text-orange-500"
                    />
                  ))}

                </div>

              </div>

            </div>

          </motion.article>
        ))}

        {testimonials.length === 0 && <p className="border border-white/10 p-8 text-sm text-white/40 md:col-span-3">Client reviews will appear here after they have been approved.</p>}

      </motion.div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="h-px w-8 bg-orange-500" />
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">Worked with us? Share your experience.</p>
        <button onClick={() => setShowReviewForm(!showReviewForm)} className="ml-auto border border-white/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[.15em] text-white/60 transition hover:border-orange-500 hover:text-orange-400">{showReviewForm ? "Close" : "Write a review"}</button>
      </div>
      {reviewNotice && <p role="status" className="mt-5 border border-emerald-500/20 bg-emerald-500/5 p-4 text-xs text-emerald-300">{reviewNotice}</p>}
      {showReviewForm && <form onSubmit={submitReview} className="mt-5 grid gap-4 border border-white/10 bg-white/[.02] p-5 sm:grid-cols-2">
        <input name="name" required maxLength={120} placeholder="Your name" className="border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-orange-500" />
        <input name="service" maxLength={120} placeholder="Service (optional)" className="border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-orange-500" />
        <select name="rating" required defaultValue="5" className="border border-white/10 bg-black px-4 py-3 text-sm text-white/70 outline-none focus:border-orange-500"><option value="5">5 stars</option><option value="4">4 stars</option><option value="3">3 stars</option><option value="2">2 stars</option><option value="1">1 star</option></select>
        <textarea name="message" required maxLength={3000} rows={3} placeholder="Tell us about your experience" className="border border-white/10 bg-black px-4 py-3 text-sm outline-none focus:border-orange-500 sm:col-span-2" />
        {reviewError && <p role="alert" className="text-xs text-red-400 sm:col-span-2">{reviewError}</p>}
        <button className="w-fit bg-orange-500 px-5 py-3 text-[10px] font-bold uppercase tracking-[.15em] text-black hover:bg-white">Submit for review</button>
      </form>}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-10 flex items-center gap-3"
      >
        <span className="h-px w-8 bg-orange-500" />

        <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
          More client stories coming soon
        </p>

      </motion.div>

    </section>
  );
};

export default Testimonials;
