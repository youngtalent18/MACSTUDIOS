import {
  ArrowUpRight,
  Camera,
  PenTool,
  Sparkles,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Service images
import photography from "../../assets/macFive.jpeg";
import videography from "../../assets/videography.jpeg";
import content from "../../assets/macOne.jpeg";
import design from "../../assets/macSix.jpeg";

const SERVICES = [
  {
    number: "01",
    name: "Content Creation",
    description: "Creative content built to keep your audience engaged.",
    icon: Camera,
    image: photography,
    layout: "lg:col-span-6 lg:row-span-2 min-h-[430px]",
  },
  {
    number: "02",
    name: "Videography",
    description: "Cinematic visuals that bring your ideas to life.",
    icon: Video,
    image: videography,
    layout: "lg:col-span-6 min-h-[205px]",
  },
  {
    number: "03",
    name: "Photography",
    description: "Capture moments that tell your story.",
    icon: Sparkles,
    image: content,
    layout: "lg:col-span-4 min-h-[205px]",
  },
  {
    number: "06",
    name: "Design & Printing",
    description: "Bold visual identities and print materials for your brand.",
    icon: PenTool,
    image: design,
    layout: "lg:col-span-2 min-h-[220px]",
  },
];

const Snapshot = () => {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-24">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-175 -translate-x-1/2 rounded-full bg-orange-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-orange-500" />

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-orange-500">
                What We Do
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
              Built to make your
              <br />
              <span className="text-white/40">brand impossible to ignore.</span>
            </h2>
          </div>

          <Link
            to=""
            className="group flex w-fit items-center gap-3 border-b border-white/25 pb-2 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-orange-500 hover:text-orange-500"
          >
            Explore all

            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:grid-cols-12">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`${service.layout} ${
                  index === 0
                    ? "md:col-span-2"
                    : index === 1
                      ? "md:col-span-2"
                      : "md:col-span-1"
                }`}
              >
                <Link
                  to={`/${service.name
                    .toLowerCase()
                    .replace(/ & /g, "-")
                    .replace(/\s+/g, "-")}`}
                  className="group relative flex h-full min-h-full flex-col justify-between overflow-hidden border border-white/10 bg-black p-6 transition-all duration-700 md:p-7"
                >
                  {/* Background Image */}
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />

                  {/* Dark Cinematic Overlay */}
                  <div className="absolute inset-0 bg-black/55 transition-all duration-700 group-hover:bg-orange-500/90" />

                  {/* Bottom Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/35 to-black/20 transition-opacity duration-700 group-hover:opacity-0" />

                  {/* Hover Texture */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                    <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    {/* Top */}
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] font-medium tracking-[0.2em] text-white/55 transition-colors duration-500 group-hover:text-black/60">
                        {service.number}
                      </span>

                      <div className="flex h-9 w-9 items-center justify-center border border-white/25 bg-black/20 backdrop-blur-sm transition-all duration-500 group-hover:border-black/30 group-hover:bg-white/10">
                        <Icon
                          size={17}
                          strokeWidth={1.4}
                          className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Bottom */}
                    <div>
                      <div className="mb-3 flex items-end justify-between gap-3">
                        <h3
                          className={`font-semibold leading-[0.95] tracking-[-0.035em] text-white transition-colors duration-500 group-hover:text-black ${
                            service.number === "01"
                              ? "text-3xl md:text-4xl"
                              : service.number === "02"
                                ? "text-2xl md:text-3xl"
                                : "text-xl md:text-2xl"
                          }`}
                        >
                          {service.name}
                        </h3>

                        <ArrowUpRight
                          size={20}
                          strokeWidth={1.5}
                          className="shrink-0 text-white/60 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
                        />
                      </div>

                      <p className="max-w-md text-xs leading-5 text-white/60 transition-colors duration-500 group-hover:text-black/70">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Hover Line */}
                  <div className="absolute bottom-0 left-0 z-20 h-[3px] w-0 bg-white transition-all duration-700 group-hover:w-full" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center"
        >
          <p className="max-w-xl text-sm leading-6 text-white/40">
            From the first idea to the final frame, we create visuals and
            digital experiences that help brands stand out.
          </p>

          <Link
            to="/contact"
            className="group flex shrink-0 items-center gap-3 bg-orange-500 px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-white"
          >
            Start a project

            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Snapshot;