import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Lightbulb,
  Target,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import videographyImage from "../../assets/videography.jpeg";
import macFive from "../../assets/macFive.jpeg";
import about1 from "../../assets/about1.jpeg";

const studioImage = "/MACSTUDIOS AD1.jpg.jpeg";
const studioVideo = "/about2.mp4";

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
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Objectives() {
  return (
    <main className="overflow-hidden bg-black text-white">
      <section className="relative min-h-screen overflow-hidden">

        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0"
        >
          <img
            src={videographyImage}
            alt="MACSTUDIOS production environment"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Image treatment */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-transparent" />

        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/20" />

        {/* Orange vertical line */}
        <div className="absolute left-0 top-0 h-full w-0.75 bg-orange-500" />

        <div className="relative flex min-h-screen items-end">

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
              className="max-w-6xl"
            >

              <motion.div
                variants={fadeUp}
                className="mb-7 flex items-center gap-3"
              >
                <span className="h-px w-12 bg-orange-500" />

                <span className="text-xs font-bold uppercase tracking-[0.35em] text-orange-500">
                  About MACSTUDIOS
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-6xl font-black uppercase leading-[0.82] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[9rem]"
              >
                Why
                <br />
                <span className="text-orange-500">we</span>
                <br />
                create.
              </motion.h1>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
              >

                <p className="max-w-xl text-base leading-7 text-white/70 md:text-lg">
                  Photography. Videography. Content creation.
                  <br />
                  One purpose — to create stories that inspire,
                  connect, and transform.
                </p>

                <Link
                  to="/booking"
                  className="group flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]"
                >
                  <span className="border-b border-orange-500 pb-2">
                    Work With Us
                  </span>

                  <ArrowDownRight
                    size={18}
                    className="text-orange-500 transition group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                </Link>

              </motion.div>

            </motion.div>
          </div>
        </div>

        {/* Vertical label */}
        <div className="absolute bottom-8 right-8 hidden rotate-90 text-[10px] font-bold uppercase tracking-[0.35em] text-white/40 md:block">
          Mission / Vision
        </div>
      </section>
      <section className="bg-[#050505]">

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-32">

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">

            {/* IMAGE */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.2,
              }}
              className="relative lg:col-span-7"
            >

              <div className="relative overflow-hidden">

                <motion.img
                  loading="lazy"
                  whileHover={{ scale: 1.04, }}
                  transition={{ duration: 0.8, }}
                  src={macFive}
                  alt="MACSTUDIOS live production and creative environment"
                  className="aspect-4/3 w-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                {/* Image number */}
                <div className="absolute left-6 top-6 flex items-center gap-3">

                  <span className="font-mono text-xs text-orange-500">
                    01
                  </span>

                  <span className="h-px w-10 bg-orange-500" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                    Mission
                  </span>

                </div>

                {/* Production label */}
                <div className="absolute bottom-6 left-6">

                  <div className="border border-white/20 bg-black/50 px-4 py-3 backdrop-blur-md">

                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-orange-500">
                      MACSTUDIOS
                    </p>

                    <p className="mt-1 text-xs text-white/70">
                      Creating moments that matter.
                    </p>

                  </div>

                </div>

              </div>

              {/* Orange offset */}
              <div className="absolute -bottom-3 -right-3 z-0 h-24 w-24 border-b-2 border-r-2 border-orange-500" />

            </motion.div>


            {/* TEXT */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.2,
              }}
              className="relative z-10 lg:col-span-5"
            >

              <div className="mb-7 flex items-center gap-3">

                <Target
                  size={18}
                  strokeWidth={1.5}
                  className="text-orange-500"
                />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
                  Our Mission
                </span>

              </div>

              <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
                Stories
                <br />
                that
                <br />
                <span className="text-orange-500">
                  move.
                </span>
              </h2>

              <p className="mt-8 text-base leading-8 text-white/60">
                MACSTUDIOS exists to capture stories through photography,
                videography, and content creation that inspire, connect,
                and transform.
              </p>

              <p className="mt-6 text-base leading-8 text-white/40">
                We are committed to learning every day, pushing our creative
                boundaries, and delivering authentic media experiences that
                reflect both professionalism and passion.
              </p>

              <div className="mt-9 h-px w-20 bg-orange-500" />

            </motion.div>

          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-orange-500 text-black">

        <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 text-[14rem] font-black leading-none tracking-[-0.08em] text-black/5 md:text-[20rem]">
          MAC
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.3,
            }}
          >

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/60">
              Our Purpose
            </p>

            <h2 className="mt-7 max-w-6xl text-5xl font-black uppercase leading-[0.85] tracking-[-0.05em] sm:text-6xl md:text-8xl">
              Inspire.
              <br />
              Connect.
              <br />
              Transform.
            </h2>

          </motion.div>

        </div>
      </section>
      <section className="bg-black">

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-32">

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">

            {/* TEXT FIRST */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.2,
              }}
              className="order-2 lg:order-1 lg:col-span-5"
            >

              <div className="mb-7 flex items-center gap-3">

                <Lightbulb
                  size={18}
                  strokeWidth={1.5}
                  className="text-orange-500"
                />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
                  Our Vision
                </span>

              </div>

              <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
                Build
                <br />
                something
                <br />
                <span className="text-orange-500">
                  bigger.
                </span>
              </h2>

              <p className="mt-8 text-base leading-8 text-white/60">
                To grow into a leading media house recognized for creativity,
                innovation, and integrity and empowering young creators to
                shape narratives that impact communities and the world.
              </p>

              <p className="mt-6 text-base leading-8 text-white/40">
                Our vision is to be a hub where learning meets artistry,
                and where every project becomes a step toward transformation.
              </p>

              <div className="mt-9 h-px w-20 bg-orange-500" />

            </motion.div>


            {/* VIDEO */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.2,
              }}
              className="relative order-1 lg:order-2 lg:col-span-7"
            >

              <div className="relative overflow-hidden">

                <video
                  src={studioVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  controls
                  className="aspect-4/3 w-full object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                <div className="pointer-events-none absolute left-6 top-6 flex items-center gap-3">

                  <span className="font-mono text-xs text-orange-500">
                    02
                  </span>

                  <span className="h-px w-10 bg-orange-500" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                    Vision
                  </span>

                </div>

              </div>

              <div className="absolute -bottom-3 -left-3 z-0 h-24 w-24 border-b-2 border-l-2 border-orange-500" />

            </motion.div>

          </div>
        </div>
      </section>
      <section className="border-t border-white/10 bg-[#050505]">

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-32">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.2,
            }}
            className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"
          >

            <div>

              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
                Our Objectives
              </p>

              <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tight md:text-6xl">
                How we
                <br />
                <span className="text-white/30">
                  move forward.
                </span>
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-7 text-white/40">
              The principles that guide how MACSTUDIOS learns, creates,
              develops, and grows.
            </p>

          </motion.div>


          <div className="grid gap-3 lg:grid-cols-12">

            {/* OBJECTIVE 01 */}
            <motion.article
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.15,
              }}
              className="group relative min-h-[330px] overflow-hidden bg-orange-500 p-7 text-black lg:col-span-7"
            >

              <span className="font-mono text-xs">
                01
              </span>

              <Sparkles
                size={28}
                strokeWidth={1.5}
                className="absolute right-7 top-7"
              />

              <div className="absolute bottom-7 left-7 max-w-lg">

                <h3 className="text-3xl font-black uppercase leading-none">
                  Keep Learning.
                </h3>

                <p className="mt-5 max-w-md text-sm leading-6 text-black/65">
                  We are committed to learning every day and continuously
                  developing our creative capabilities.
                </p>

              </div>

            </motion.article>


            {/* OBJECTIVE 02 */}
            <motion.article
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.15,
              }}
              className="group relative min-h-[330px] overflow-hidden border border-white/10 bg-[#0a0a0a] p-7 lg:col-span-5"
            >

              <span className="font-mono text-xs text-orange-500">
                02
              </span>

              <div className="absolute bottom-7 left-7 right-7">

                <h3 className="text-2xl font-bold uppercase">
                  Push Boundaries.
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/40">
                  We push our creative boundaries and explore new ideas,
                  approaches, and possibilities.
                </p>

              </div>

            </motion.article>


            {/* OBJECTIVE 03 */}
            <motion.article
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.15,
              }}
              className="group relative min-h-[280px] overflow-hidden border border-white/10 bg-[#0a0a0a] p-7 lg:col-span-5"
            >

              <span className="font-mono text-xs text-orange-500">
                03
              </span>

              <div className="absolute bottom-7 left-7 right-7">

                <h3 className="text-2xl font-bold uppercase">
                  Create Impact.
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/40">
                  We create media that inspires, connects, and contributes
                  to stories that matter.
                </p>

              </div>

            </motion.article>
            {/* OBJECTIVE 04 WITH YOUR IMAGE */}
            <motion.article
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.15,
              }}
              className="group relative min-h-[280px] overflow-hidden lg:col-span-7"
            >

              <img
                src={about1}
                loading="lazy"
                alt="MACSTUDIOS production team and creators"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/55 transition group-hover:bg-black/40" />

              <div className="relative flex h-full min-h-[280px] flex-col justify-between p-7">

                <span className="font-mono text-xs text-orange-500">
                  04
                </span>

                <div>

                  <h3 className="text-2xl font-bold uppercase">
                    Empower Creators.
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
                    We want to be a hub where young creators can learn,
                    grow, and shape narratives that impact communities
                    and the world.
                  </p>

                </div>

              </div>

            </motion.article>

          </div>

        </div>
      </section>
      <section className="relative min-h-[70vh] overflow-hidden">

        <img
          src={studioImage}
          loading="lazy"
          alt="MACSTUDIOS"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-black/40" />

        <div className="relative flex min-h-[70vh] items-end">

          <div className="mx-auto w-full max-w-7xl px-6 pb-16 md:px-10 lg:px-12 lg:pb-24">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: false,
                amount: 0.25,
              }}
              className="max-w-5xl"
            >

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
                The Journey Ahead
              </p>

              <h2 className="mt-6 text-5xl font-black uppercase leading-[0.85] tracking-[-0.04em] sm:text-6xl md:text-8xl">
                Every project
                <br />
                is a step
                <br />
                toward
                <br />
                <span className="text-orange-500">
                  transformation.
                </span>
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
}