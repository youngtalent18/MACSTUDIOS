import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Camera,
  Drama,
  PenTool,
  Smartphone,
  Sparkles,
  Tv,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    number: "01",
    title: "Photography",
    description:
      "Professional photography that captures people, products, events, brands, and moments with purpose.",
    icon: Camera,
    image: "/service-photography.jpg",
    size: "lg:col-span-7 lg:row-span-2",
  },
  {
    number: "02",
    title: "Videography",
    description:
      "Cinematic video production designed to turn ideas, events, and stories into powerful visual experiences.",
    icon: Video,
    image: "/service-videography.jpg",
    size: "lg:col-span-5",
  },
  {
    number: "03",
    title: "Content Creation",
    description:
      "Creative content built for brands, businesses, creators, and digital platforms.",
    icon: Sparkles,
    image: "/service-content.jpg",
    size: "lg:col-span-3",
  },
  {
    number: "04",
    title: "Skit Making",
    description:
      "Concept development, production, and visual storytelling for entertaining and engaging skits.",
    icon: Drama,
    image: "/service-skits.jpg",
    size: "lg:col-span-2",
  },
  {
    number: "05",
    title: "Commercials",
    description:
      "Promotional videos and visual campaigns created to communicate your brand and connect with your audience.",
    icon: Tv,
    image: "/service-commercials.jpg",
    size: "lg:col-span-4",
  },
  {
    number: "06",
    title: "Design & Printing",
    description:
      "Creative graphic design and professional print solutions for brands, businesses, and events.",
    icon: PenTool,
    image: "/service-design.jpg",
    size: "lg:col-span-4",
  },
  {
    number: "07",
    title: "Social Media Management",
    description:
      "Strategic content and social media management that keeps your brand active, consistent, and connected.",
    icon: Smartphone,
    image: "/service-social.jpg",
    size: "lg:col-span-4",
  },
  {
    number: "08",
    title: "YouTube Content & Channel Management",
    description:
      "End-to-end YouTube support, from content production and editing to channel growth and management.",
    icon: Video,
    image: "/service-youtube.jpg",
    size: "lg:col-span-12",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Services = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[75vh] overflow-hidden">
        <img
          src="/MACSTUDIOS AD1.jpg.jpeg"
          alt="MACSTUDIOS creative production"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/20" />

        <div className="absolute left-0 top-0 h-full w-[3px] bg-orange-500" />

        <div className="relative flex min-h-[75vh] items-end">
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
                variants={fadeUp}
                className="mb-7 flex items-center gap-3"
              >
                <span className="h-px w-12 bg-orange-500" />

                <span className="text-xs font-bold uppercase tracking-[0.35em] text-orange-500">
                  What We Do
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-6xl font-black uppercase leading-[0.82] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[9rem]"
              >
                Ideas.
                <br />
                <span className="text-orange-500">Made</span>
                <br />
                Visual.
              </motion.h1>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
              >
                <p className="max-w-xl text-base leading-7 text-white/65 md:text-lg">
                  From photography and film to content, design, and digital
                  media — we create visual experiences built to tell stories
                  and move people.
                </p>

                <a
                  href="#services"
                  className="group flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]"
                >
                  <span className="border-b border-orange-500 pb-2">
                    Explore Services
                  </span>

                  <ArrowDownRight
                    size={18}
                    className="text-orange-500 transition group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden rotate-90 text-[10px] font-bold uppercase tracking-[0.35em] text-white/40 md:block">
          Services / Capabilities
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-8"
            >
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
                Our Capabilities
              </p>

              <h2 className="text-4xl font-black uppercase leading-[0.88] tracking-tight md:text-6xl lg:text-7xl">
                Everything you need
                <br />
                <span className="text-white/25">to tell your story.</span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-md text-sm leading-7 text-white/40 lg:col-span-4 lg:justify-self-end"
            >
              MACSTUDIOS brings creative production, visual storytelling, and
              digital media together under one roof.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SERVICES BENTO */}
      <section id="services" className="bg-black">
        <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12 lg:pb-32">
          <div className="grid auto-rows-[220px] gap-3 lg:grid-cols-12">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  transition={{
                    delay: index * 0.04,
                  }}
                  className={`group relative overflow-hidden ${service.size}`}
                >
                  {/* IMAGE */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  />

                  {/* OVERLAYS */}
                  <div className="absolute inset-0 bg-black/55 transition duration-500 group-hover:bg-black/40" />

                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute inset-0 bg-orange-500/0 transition duration-500 group-hover:bg-orange-500/10" />

                  {/* NUMBER */}
                  <div className="absolute left-6 top-6 flex items-center gap-3">
                    <span className="font-mono text-xs text-orange-500">
                      {service.number}
                    </span>

                    <span className="h-px w-8 bg-orange-500/60" />
                  </div>

                  {/* ICON */}
                  <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center border border-white/20 bg-black/30 backdrop-blur-md transition duration-500 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-black">
                    <Icon size={19} strokeWidth={1.5} />
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                    <h3 className="text-2xl font-black uppercase leading-none md:text-3xl">
                      {service.title}
                    </h3>

                    <div className="mt-4 max-w-lg overflow-hidden">
                      <div className="mb-4 h-px w-10 bg-orange-500 transition-all duration-500 group-hover:w-20" />

                      <p className="text-sm leading-6 text-white/55 transition duration-500 group-hover:text-white/75">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 transition group-hover:text-orange-500">
                      Explore Service
                      <ArrowRight
                        size={13}
                        className="transition group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-16"
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
              Our Approach
            </p>

            <h2 className="text-4xl font-black uppercase leading-[0.9] md:text-6xl">
              From idea
              <br />
              <span className="text-white/25">to impact.</span>
            </h2>
          </motion.div>

          <div className="grid border-l border-white/10 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Discover",
                text: "We understand your idea, audience, goals, and vision.",
              },
              {
                number: "02",
                title: "Create",
                text: "Our creative team develops the concept and visual direction.",
              },
              {
                number: "03",
                title: "Produce",
                text: "We bring the concept to life through production and execution.",
              },
              {
                number: "04",
                title: "Deliver",
                text: "You receive polished creative work ready to make an impact.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="border-r border-white/10 border-t p-7 md:min-h-[280px] md:border-t-0"
              >
                <span className="font-mono text-xs text-orange-500">
                  {step.number}
                </span>

                <h3 className="mt-16 text-2xl font-black uppercase">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/40">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ORANGE STATEMENT */}
      <section className="relative overflow-hidden bg-orange-500 text-black">
        <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 text-[14rem] font-black leading-none tracking-[-0.08em] text-black/5 md:text-[20rem]">
          MAC
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/60">
              More Than A Service
            </p>

            <h2 className="mt-7 max-w-6xl text-5xl font-black uppercase leading-[0.85] tracking-[-0.05em] sm:text-6xl md:text-8xl">
              We don't just
              <br />
              create content.
              <br />
              We create
              <br />
              <span className="text-white">connection.</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative min-h-[65vh] overflow-hidden">
        <img
          src="/MACSTUDIOS AD1.jpg.jpeg"
          alt="MACSTUDIOS"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-black/50" />

        <div className="relative flex min-h-[65vh] items-end">
          <div className="mx-auto w-full max-w-7xl mt-10 px-6 pb-16 md:px-10 lg:px-12 lg:pb-24">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="max-w-5xl"
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
                Ready To Create?
              </p>

              <h2 className="mt-6 text-5xl font-black uppercase leading-[0.85] tracking-[-0.04em] sm:text-6xl md:text-8xl">
                Your story
                <br />
                deserves to
                <br />
                be <span className="text-orange-500">seen.</span>
              </h2>

              <Link
                to="/booking"
                className="group mt-10 inline-flex items-center gap-4 border border-white/30 bg-black/30 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm transition hover:border-orange-500 hover:bg-orange-500 hover:text-black"
              >
                Start A Project

                <ArrowRight
                  size={16}
                  className="text-orange-500 transition group-hover:translate-x-1 group-hover:text-black"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;