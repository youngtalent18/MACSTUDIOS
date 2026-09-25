import mac1 from "/BRAND O'CLOCK.jpg.jpeg";
import {motion} from "framer-motion"

const Hero = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-black">
      {/* Blurred Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={mac1}
          alt="MACSTUDIOS"
          className="h-full w-full scale-100 object-fit object-[center_38%] blur-[4px]"
          loading="lazy"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Left-to-right gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/10 to-black/70" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-10">
        <div className="max-w-4xl text-white">

          {/* Brand */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-orange-500" />

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              MACSTUDIOS
            </p>
          </div>

          {/* Heading */}
          <motion.h1 initial={{opacity: 0, x: -25}} whileInView={{opacity: 1, x: 0}} viewport={{ once: false, amount: 0.3}} transition={{duration: 1.5, ease: "easeInOut"}} className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
            We Create.          
          </motion.h1>
          <motion.h1 initial={{opacity: 0, x: 25}} whileInView={{opacity: 1, x: 0}} viewport={{ once: false, amount: 0.3}} transition={{duration: 1.1, ease: "easeInOut"}} className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl" ><span className="text-orange-500">You</span> Experience.</motion.h1>

          {/* Divider */}
          <div className="my-7 h-px w-14 bg-white/40" />

          {/* Description */}
          <p className="max-w-xl text-base leading-7 text-white/75 md:text-lg">
            Photography, videography, content creation and creative
            production built to make your brand stand out.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <button className="group flex items-center gap-6 rounded-md bg-orange-500 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600">
              Book a Shoot

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <button className="group flex items-center gap-6 rounded-md border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/10">
              View Our Work

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div animate={{y: [0, 9, 0]}} transition={{duration: 1.5, repeat: Infinity, ease: "easeInOut"}} className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center">
        <span className="mb-4 text-[10px] font-medium uppercase tracking-[0.4em] text-white/60">
          Scroll to explore
        </span>

        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 p-1">
          <div className="h-2 w-1 rounded-full bg-white/70 animate-bounce" />
        </div>

        <div className="mt-3 h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;