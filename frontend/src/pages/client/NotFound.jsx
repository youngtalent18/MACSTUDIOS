import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* BACKGROUND */}
      <motion.img
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        src="/MACSTUDIOS AD1.jpg.jpeg"
        alt="MACSTUDIOS"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

      {/* ORANGE EDGE */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-orange-500" />

      {/* CONTENT */}
      <div className="relative flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="max-w-5xl"
          >
            {/* LABEL */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7 },
                },
              }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[0.35em] text-orange-500">
                MACSTUDIOS
              </span>
            </motion.div>

            {/* 404 */}
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
              className="text-[8rem] font-black leading-[0.75] tracking-[-0.08em] sm:text-[10rem] md:text-[13rem] lg:text-[16rem]"
            >
              4<span className="text-orange-500">0</span>4
            </motion.h1>

            {/* MESSAGE */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7 },
                },
              }}
              className="mt-10"
            >
              <h2 className="text-3xl font-black uppercase leading-none md:text-5xl">
                Looks like this
                <br />
                <span className="text-white/30">frame is missing.</span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/50 md:text-base">
                The page you're looking for doesn't exist or may have been
                moved. Let's get you back to the MACSTUDIOS experience.
              </p>
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7 },
                },
              }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                to="/"
                className="group inline-flex w-fit items-center gap-4 bg-orange-500 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white"
              >
                <ArrowLeft size={16} />

                Back Home
              </Link>

              <Link
                to="/contact"
                className="group inline-flex w-fit items-center gap-4 border border-white/20 bg-black/30 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm transition hover:border-orange-500 hover:bg-orange-500 hover:text-black"
              >
                Contact Us

                <ArrowRight
                  size={16}
                  className="text-orange-500 transition group-hover:translate-x-1 group-hover:text-black"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CORNER TEXT */}
      <div className="absolute bottom-8 right-8 hidden text-right md:block">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">
          Lost Frame
        </p>

        <p className="mt-2 font-mono text-xs text-orange-500">
          ERROR / 404
        </p>
      </div>
    </main>
  );
};

export default NotFound;