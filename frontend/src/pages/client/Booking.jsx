import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";

const SERVICES = [
  "Photography",
  "Videography",
  "Content Creation",
  "Skit Making",
  "Commercials",
  "Design & Printing",
  "Social Media Management",
  "YouTube Content / Channel Management",
];

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // API submission will be added later
    setSubmitted(true);
  };

  return (
    <main className="overflow-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[65vh] overflow-hidden">
        <img
          src="/MACSTUDIOS AD1.jpg.jpeg"
          alt="MACSTUDIOS production"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

        <div className="absolute left-0 top-0 h-full w-[3px] bg-orange-500" />

        <div className="relative flex min-h-[65vh] items-end">
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
                  Start A Project
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
                create
                <br />
                <span className="text-orange-500">together.</span>
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
                Tell us about your project, idea, or event. Our team will
                review your request and get back to you.
              </motion.p>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden rotate-90 text-[10px] font-bold uppercase tracking-[0.35em] text-white/40 md:block">
          Booking / Enquiry
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section className="bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4"
            >
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
                Let's Talk
              </p>

              <h2 className="text-4xl font-black uppercase leading-[0.9] md:text-6xl">
                Tell us
                <br />
                about your
                <br />
                <span className="text-white/30">project.</span>
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-7 text-white/45">
                Whether you need photography, video production, content
                creation, design, or social media support, give us a few
                details and we'll take it from there.
              </p>

              {/* CONTACT INFO */}
              <div className="mt-12 space-y-6 border-t border-white/10 pt-8">
                <div className="flex items-start gap-4">
                  <Phone
                    size={18}
                    strokeWidth={1.5}
                    className="mt-1 text-orange-500"
                  />

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                      Phone
                    </p>

                    <a
                      href="tel:0203629223"
                      className="mt-2 block text-sm text-white/70 transition hover:text-orange-500"
                    >
                      020 362 9223
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail
                    size={18}
                    strokeWidth={1.5}
                    className="mt-1 text-orange-500"
                  />

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                      Email
                    </p>

                    <a
                      href="mailto:info@macstudios.com"
                      className="mt-2 block text-sm text-white/70 transition hover:text-orange-500"
                    >
                      info@macstudios.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin
                    size={18}
                    strokeWidth={1.5}
                    className="mt-1 text-orange-500"
                  />

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                      Location
                    </p>

                    <p className="mt-2 text-sm text-white/70">
                      Ghana
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              {submitted ? (
                <div className="flex min-h-[600px] flex-col items-center justify-center border border-white/10 bg-[#090909] p-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-black">
                    <CheckCircle2 size={30} />
                  </div>

                  <h2 className="mt-7 text-3xl font-black uppercase md:text-5xl">
                    Request received.
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
                    Thank you for reaching out to MACSTUDIOS. We've received
                    your project enquiry and will get back to you soon.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] transition hover:border-orange-500 hover:bg-orange-500 hover:text-black"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="border border-white/10 bg-[#090909] p-6 md:p-10 lg:p-12"
                >
                  <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-6">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
                        Project Enquiry
                      </p>

                      <h3 className="mt-3 text-2xl font-black uppercase md:text-3xl">
                        Start your request
                      </h3>
                    </div>

                    <CalendarDays
                      size={28}
                      strokeWidth={1}
                      className="hidden text-orange-500 sm:block"
                    />
                  </div>

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

                    {/* PHONE */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40"
                      >
                        Phone Number *
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Your phone number"
                        className="w-full border border-white/10 bg-black px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-orange-500"
                      />
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        className="w-full border border-white/10 bg-black px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-orange-500"
                      />
                    </div>

                    {/* SERVICE */}
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40"
                      >
                        Service *
                      </label>

                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className="w-full appearance-none border border-white/10 bg-black px-4 py-4 text-sm text-white outline-none transition focus:border-orange-500"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>

                        {SERVICES.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* DATE */}
                    <div>
                      <label
                        htmlFor="date"
                        className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40"
                      >
                        Preferred Date
                      </label>

                      <input
                        id="date"
                        name="date"
                        type="date"
                        className="w-full border border-white/10 bg-black px-4 py-4 text-sm text-white outline-none transition focus:border-orange-500"
                      />
                    </div>

                    {/* BUDGET */}
                    <div>
                      <label
                        htmlFor="budget"
                        className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40"
                      >
                        Estimated Budget
                      </label>

                      <select
                        id="budget"
                        name="budget"
                        defaultValue=""
                        className="w-full appearance-none border border-white/10 bg-black px-4 py-4 text-sm text-white outline-none transition focus:border-orange-500"
                      >
                        <option value="" disabled>
                          Select budget range
                        </option>
                        <option value="Under GHS 1,000">
                          Under GHS 1,000
                        </option>
                        <option value="GHS 1,000 - GHS 3,000">
                          GHS 1,000 - GHS 3,000
                        </option>
                        <option value="GHS 3,000 - GHS 5,000">
                          GHS 3,000 - GHS 5,000
                        </option>
                        <option value="GHS 5,000+">
                          GHS 5,000+
                        </option>
                        <option value="Not sure">
                          Not sure yet
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className="mt-6">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40"
                    >
                      Tell Us About The Project *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      placeholder="Tell us about your project, event, idea, location, timeline, or anything else we should know..."
                      className="w-full resize-none border border-white/10 bg-black px-4 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-white/20 focus:border-orange-500"
                    />
                  </div>

                  {/* SUBMIT */}
                  <div className="mt-8 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
                    <p className="max-w-sm text-[11px] leading-5 text-white/30">
                      By submitting this form, you're sending a project enquiry
                      to MACSTUDIOS. We'll contact you using the details
                      provided.
                    </p>

                    <button
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-4 bg-orange-500 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white sm:w-auto"
                    >
                      Submit Request

                      <ArrowRight
                        size={16}
                        className="transition group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* BOTTOM STATEMENT */}
      <section className="relative overflow-hidden bg-orange-500 text-black">
        <div className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 text-[13rem] font-black leading-none tracking-[-0.08em] text-black/5 md:text-[20rem]">
          MAC
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/60">
            MACSTUDIOS
          </p>

          <h2 className="mt-6 max-w-5xl text-5xl font-black uppercase leading-[0.85] tracking-[-0.05em] sm:text-6xl md:text-8xl">
            Your idea.
            <br />
            Our creativity.
            <br />
            <span className="text-white">One story.</span>
          </h2>
        </div>
      </section>
    </main>
  );
};

export default Booking;