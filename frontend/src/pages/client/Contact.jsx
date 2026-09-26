import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState } from "react";
import api from "../../lib/axios.js";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    setSubmitError("");
    try {
      await api.post("/contact", Object.fromEntries(new FormData(form)));
      setSubmitted(true);
      form.reset();
    } catch (error) {
      setSubmitError(error.response?.data?.message || "We couldn't send your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="overflow-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <img
          src="/MACSTUDIOS AD1.jpg.jpeg"
          alt="MACSTUDIOS creative production"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/20" />

        <div className="absolute left-0 top-0 h-full w-[3px] bg-orange-500" />

        <div className="relative flex min-h-[70vh] items-end">
          <div className="mx-auto w-full max-w-7xl mt-10 px-6 pb-16 md:px-10 lg:px-12 lg:pb-24">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="max-w-6xl"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7 },
                  },
                }}
                className="mb-7 flex items-center gap-3"
              >
                <span className="h-px w-12 bg-orange-500" />

                <span className="text-xs font-bold uppercase tracking-[0.35em] text-orange-500">
                  Get In Touch
                </span>
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className="text-6xl font-black uppercase leading-[0.82] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[9rem]"
              >
                Let's
                <br />
                <span className="text-orange-500">talk.</span>
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7 },
                  },
                }}
                className="mt-10 max-w-xl text-base leading-7 text-white/65 md:text-lg"
              >
                Have a question, an idea, or a project in mind? Reach out to
                MACSTUDIOS and let's start the conversation.
              </motion.p>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden rotate-90 text-[10px] font-bold uppercase tracking-[0.35em] text-white/40 md:block">
          Contact / Connect
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* PHONE */}
            <motion.a
              href="tel:0203629223"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group border border-white/10 bg-[#090909] p-7 transition hover:border-orange-500"
            >
              <Phone
                size={22}
                strokeWidth={1.5}
                className="text-orange-500 transition group-hover:scale-110"
              />

              <p className="mt-12 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                Call Us
              </p>

              <p className="mt-3 text-lg font-bold">
                020 362 9223
              </p>

              <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 transition group-hover:text-orange-500">
                Call Now
                <ArrowRight size={13} />
              </div>
            </motion.a>

            {/* WHATSAPP */}
            <motion.a
              href="https://wa.me/233203629223"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="group border border-white/10 bg-[#090909] p-7 transition hover:border-orange-500"
            >
              <MessageCircle
                size={22}
                strokeWidth={1.5}
                className="text-orange-500 transition group-hover:scale-110"
              />

              <p className="mt-12 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                WhatsApp
              </p>

              <p className="mt-3 text-lg font-bold">
                Chat With Us
              </p>

              <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 transition group-hover:text-orange-500">
                Start Chat
                <ArrowRight size={13} />
              </div>
            </motion.a>

            {/* EMAIL */}
            <motion.a
              href="mailto:info@macstudios.com"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group border border-white/10 bg-[#090909] p-7 transition hover:border-orange-500"
            >
              <Mail
                size={22}
                strokeWidth={1.5}
                className="text-orange-500 transition group-hover:scale-110"
              />

              <p className="mt-12 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                Email
              </p>

              <p className="mt-3 break-all text-lg font-bold">
                info@macstudios.com
              </p>

              <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 transition group-hover:text-orange-500">
                Send Email
                <ArrowRight size={13} />
              </div>
            </motion.a>

            {/* LOCATION */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="border border-white/10 bg-[#090909] p-7"
            >
              <MapPin
                size={22}
                strokeWidth={1.5}
                className="text-orange-500"
              />

              <p className="mt-12 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
                Location
              </p>

              <p className="mt-3 text-lg font-bold">
                Ghana
              </p>

              <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                <Clock3 size={13} />
                By Appointment
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
                Send A Message
              </p>

              <h2 className="text-4xl font-black uppercase leading-[0.9] md:text-6xl">
                Have an
                <br />
                idea?
                <br />
                <span className="text-white/25">Let's hear it.</span>
              </h2>

              <p className="mt-8 max-w-md text-sm leading-7 text-white/40">
                Whether you're planning a shoot, launching a campaign,
                building your brand, or simply want to know more about what we
                do, send us a message.
              </p>

              <div className="mt-12 border-l border-orange-500 pl-6">
                <p className="text-sm font-bold uppercase tracking-[0.15em]">
                  We create.
                </p>

                <p className="mt-2 text-sm text-white/35">
                  We collaborate.
                </p>

                <p className="mt-2 text-sm text-white/35">
                  We tell stories.
                </p>
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              {submitted ? (
                <div className="flex min-h-[500px] flex-col items-center justify-center border border-white/10 bg-[#090909] p-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-black">
                    <MessageCircle size={28} />
                  </div>

                  <h3 className="mt-7 text-3xl font-black uppercase md:text-5xl">
                    Message sent.
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-white/40">
                    Thanks for reaching out to MACSTUDIOS. We'll get back to
                    you as soon as possible.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] transition hover:border-orange-500 hover:bg-orange-500 hover:text-black"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="border border-white/10 bg-[#090909] p-6 md:p-10 lg:p-12"
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    {/* NAME */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40"
                      >
                        Full Name *
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full border border-white/10 bg-black px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-orange-500"
                      />
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40"
                      >
                        Email *
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full border border-white/10 bg-black px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-orange-500"
                      />
                    </div>

                    {/* PHONE */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Your phone number"
                        className="w-full border border-white/10 bg-black px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-orange-500"
                      />
                    </div>

                    {/* SUBJECT */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40"
                      >
                        Subject *
                      </label>

                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        placeholder="How can we help?"
                        className="w-full border border-white/10 bg-black px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className="mt-6">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40"
                    >
                      Message *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={8}
                      placeholder="Tell us what you're working on..."
                      className="w-full resize-none border border-white/10 bg-black px-4 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-white/20 focus:border-orange-500"
                    />
                  </div>

                  {/* SUBMIT */}
                  <div className="mt-8 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
                    <p className="max-w-sm text-[11px] leading-5 text-white/25">
                      We'll use the information you provide to respond to your
                      enquiry.
                    </p>

                    <div className="flex flex-col items-stretch gap-3">
                    {submitError && <p role="alert" className="max-w-xs text-xs text-red-400">{submitError}</p>}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group inline-flex w-full items-center justify-center gap-4 bg-orange-500 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white sm:w-auto"
                    >
                      {submitting ? "Sending..." : "Send Message"}

                      <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />
                    </button>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative min-h-[55vh] overflow-hidden">
        <img
          src="/MACSTUDIOS AD1.jpg.jpeg"
          alt="MACSTUDIOS"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-black/50" />

        <div className="relative flex min-h-[55vh] items-end">
          <div className="mx-auto w-full max-w-7xl mt-10 px-6 pb-16 md:px-10 lg:px-12 lg:pb-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl"
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
                MACSTUDIOS
              </p>

              <h2 className="mt-6 text-5xl font-black uppercase leading-[0.85] tracking-[-0.04em] sm:text-6xl md:text-8xl">
                Let's make
                <br />
                something
                <br />
                <span className="text-orange-500">worth seeing.</span>
              </h2>

              <a
                href="https://wa.me/233203629223"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-center gap-4 border border-white/30 bg-black/30 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm transition hover:border-orange-500 hover:bg-orange-500 hover:text-black"
              >
                Chat On WhatsApp

                <ArrowRight
                  size={16}
                  className="text-orange-500 transition group-hover:translate-x-1 group-hover:text-black"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
