import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {FaLinkedin as Linkedin, FaInstagram as Instagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import macFive from "../../assets/macFive.jpeg"
import steve from "../../assets/steve.jpg"

const TEAM = [
  {
    name: "Team Member Name",
    role: "Creative Director",
    image: macFive,
    description:
      "Leads the creative direction and ensures every MACSTUDIOS project carries a strong visual identity.",
  },
  {
    name: "Team Member Name",
    role: "Photographer",
    image: macFive,
    description:
      "Captures authentic moments and creates photography that communicates emotion and story.",
  },
  {
    name: "Team Member Name",
    role: "Videographer",
    image: macFive,
    description:
      "Transforms ideas into cinematic visual stories through filming and production.",
  },
  {
    name: "Team Member Name",
    role: "Graphic Designer",
    image: macFive,
    description:
      "Creates visual identities, campaign designs, and graphics that bring ideas to life.",
  },
  {
    name: "Team Member Name",
    role: "Video Editor",
    image: macFive,
    description:
      "Shapes raw footage into polished stories through editing, sound, pacing, and visual treatment.",
  },
  {
    name: "Stephen Anti (Codecraze)",
    role: "Software Developer",
    image: steve,
    description:
      "Builds and maintains digital platforms, ensuring seamless user experiences and functionality.",
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

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Gallery = () => {
  return (
    <main className="overflow-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[70vh] mt-15 overflow-hidden">
        <img
          src="/MAC STUDIOS.png"
          alt="MACSTUDIOS team"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/20" />

        <div className="absolute left-0 top-0 h-full w-0.75 bg-orange-500" />

        <div className="relative flex min-h-[70vh] items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-10 lg:px-12 lg:pb-24">
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
              className="max-w-5xl"
            >
              <motion.div
                variants={fadeUp}
                className="mb-7 flex items-center gap-3"
              >
                <span className="h-px w-12 bg-orange-500" />

                <span className="text-xs font-bold uppercase tracking-[0.35em] text-orange-500">
                  The People Behind MACSTUDIOS
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-6xl font-black uppercase leading-[0.82] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[9rem]"
              >
                Meet
                <br />
                the <span className="text-orange-500">team.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-xl text-base leading-7 text-white/65 md:text-lg"
              >
                The creatives, storytellers, and digital minds behind the
                work we create at MACSTUDIOS.
              </motion.p>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden rotate-90 text-[10px] font-bold uppercase tracking-[0.35em] text-white/40 md:block">
          Our Creative Team
        </div>
      </section>

      {/* TEAM INTRO */}
      <section className="bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-7"
            >
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
                One Team. Many Perspectives.
              </p>

              <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tight md:text-6xl">
                Creativity is
                <br />
                <span className="text-white/30">a team sport.</span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-lg text-sm leading-7 text-white/45 lg:col-span-5 lg:justify-self-end"
            >
              From the first idea to the final frame, our team brings
              different skills, perspectives, and creative energy together to
              create meaningful media experiences.
            </motion.p>
          </div>
        </div>
      </section>

      {/* TEAM GALLERY */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12 lg:pb-32">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-12">
            {TEAM.map((member, index) => {
              const featured = index === 0 || index === 3;

              return (
                <motion.article
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  className={`group relative overflow-hidden bg-[#090909] ${
                    featured
                      ? "lg:col-span-6"
                      : "lg:col-span-3"
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      featured
                        ? "aspect-4/5"
                        : "aspect-3/4"
                    }`}
                  >
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-90" />

                    <div className="absolute inset-0 bg-orange-500/0 transition duration-500 group-hover:bg-orange-500/10" />

                    {/* NUMBER */}
                    <div className="absolute left-5 top-5">
                      <span className="font-mono text-xs text-orange-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* SOCIAL ICONS */}
                    <div className="absolute right-5 top-5 flex translate-y-2 gap-2 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center border border-white/20 bg-black/50 backdrop-blur-md transition hover:border-orange-500 hover:bg-orange-500 hover:text-black"
                        aria-label={`${member.name} Instagram`}
                      >
                        <Instagram size={15} />
                      </button>

                      <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center border border-white/20 bg-black/50 backdrop-blur-md transition hover:border-orange-500 hover:bg-orange-500 hover:text-black"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin size={15} />
                      </button>
                    </div>

                    {/* CONTENT */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-orange-500">
                        {member.role}
                      </p>

                      <h3
                        className={`font-black uppercase leading-none ${
                          featured
                            ? "text-3xl md:text-4xl"
                            : "text-2xl"
                        }`}
                      >
                        {member.name}
                      </h3>

                      <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                        <div className="mb-4 h-px w-10 bg-orange-500" />

                        <p className="max-w-md text-sm leading-6 text-white/60">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BEHIND THE TEAM */}
      <section className="relative overflow-hidden bg-orange-500 text-black">
        <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 text-[15rem] font-black leading-none tracking-[-0.08em] text-black/5 md:text-[22rem]">
          MAC
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid items-end gap-10 lg:grid-cols-12"
          >
            <div className="lg:col-span-8">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/60">
                Behind The Work
              </p>

              <h2 className="mt-6 text-5xl font-black uppercase leading-[0.85] tracking-tighter sm:text-6xl md:text-8xl">
                Different
                <br />
                skills.
                <br />
                One <span className="text-white">vision.</span>
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="text-sm leading-7 text-black/65">
                Our strength comes from bringing photographers, videographers,
                designers, editors, and digital creators together to build
                something greater than any one person could create alone.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <img
          src="/MACSTUDIOS AD1.jpg.jpeg"
          alt="MACSTUDIOS creative team"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-black/50" />

        <div className="relative flex min-h-[60vh] items-end">
          <div className="mx-auto w-full max-w-7xl mt-15 px-6 pb-16 md:px-10 lg:px-12 lg:pb-24">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="max-w-5xl"
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
                Work With MACSTUDIOS
              </p>

              <h2 className="mt-6 text-5xl font-black uppercase leading-[0.85] tracking-[-0.04em] sm:text-6xl md:text-8xl">
                Let's create
                <br />
                something
                <br />
                <span className="text-orange-500">meaningful.</span>
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

export default Gallery;