import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import { FaYoutube as Youtube } from "react-icons/fa";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";

import videographyImage from "../../assets/videography.jpeg";
import softwareDevVideo from "../../assets/SoftwareDev.mp4";
import photographyVideo from "../..//assets/Photography.mp4";


const PROJECTS = [
  {
    title: "Creative Contents",
    category: "Content Creation",
    type: "youtube",
    videoId: "vNkRQs5QMAE",
  },

  {
    title: "Creative Stories",
    category: "Behind The Scenes",
    type: "youtube",
    videoId: "iU-A0dqv_8s",
  },

  {
    title: "Visual Production",
    category: "Videography",
    type: "image",
    src: videographyImage,
  },

  {
    title: "Website Design",
    category: "Software Development",
    type: "video",
    src: softwareDevVideo,
  },

  {
    title: "Visual Stories",
    category: "Photography",
    type: "video",
    src: photographyVideo,
  },
];

// ============================================================
// COMPONENT
// ============================================================

const Featured = () => {
  const carouselRef = useRef(null);

  // ============================================================
  // MOBILE CAROUSEL
  // ============================================================

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;

    const card = carouselRef.current.querySelector("article");

    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width;
    const gap = 16;

    carouselRef.current.scrollBy({
      left:
        direction === "next"
          ? cardWidth + gap
          : -(cardWidth + gap),
      behavior: "smooth",
    });
  };

  const renderMedia = (project, mobile = false) => {

    if (project.type === "youtube") {
      const embedUrl = `https://www.youtube.com/embed/${project.videoId}`;

      return (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={embedUrl}
          title={project.title}
          frameBorder="0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      );
    }

    if (project.type === "video") {
      return (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={project.src}
          controls
          playsInline
          preload="metadata"
        />
      );
    }


    if (project.type === "image") {
      return (
        <img
          src={project.src}
          alt={project.title}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${
            mobile
              ? ""
              : "group-hover:scale-[1.03]"
          }`}
        />
      );
    }

    return null;
  };

  return (
    <section className="bg-black px-6 py-20 text-white md:px-10 md:py-24 lg:px-15">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="mb-12 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between"
      >
        <div>

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-orange-500" />

            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-orange-500">
              Our Work
            </span>
          </div>

          <h2 className="max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Stories we've{" "}
            <span className="text-white/40">
              brought to life.
            </span>
          </h2>

        </div>

        <Link
          to="/portfolio"
          className="group flex w-fit items-center gap-2 border-b border-white/25 pb-2 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:border-orange-500 hover:text-orange-500"
        >
          View all work

          <ArrowUpRight
            size={18}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </Link>

      </motion.div>

      <div className="md:hidden">

        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 scrollbar-none"
        >

          {PROJECTS.map((project, index) => {

            const youtubeUrl =
              project.type === "youtube"
                ? `https://www.youtube.com/watch?v=${project.videoId}`
                : "";

            return (
              <article
                key={index}
                className="group w-[85vw] max-w-97.5 shrink-0 snap-center"
              >

                <div className="relative aspect-4/5 overflow-hidden border border-white/10 bg-zinc-950">

                  {renderMedia(project, true)}

                  {/* Gradient */}

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

                  {/* Number */}

                  <div className="pointer-events-none absolute left-5 top-5 z-10 text-xs font-medium tracking-[0.2em] text-white/50">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  {project.type === "youtube" && (
                    <a
                      href={youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/youtube absolute bottom-5 right-5 z-20 flex items-center gap-2 bg-white px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-orange-500"
                    >
                      <Youtube
                        size={14}
                        className="transition-transform duration-300 group-hover/youtube:scale-110"
                      />

                      Watch on YouTube
                    </a>
                  )}

                  <div className="pointer-events-none absolute bottom-5 left-5 z-10">
                    <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-orange-500">
                      {project.category}
                    </p>
                  </div>

                </div>

                <div className="mt-4">

                  <h3 className="text-2xl font-semibold leading-none tracking-[-0.03em] text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-white/40">
                    Visual storytelling created with purpose,
                    personality and attention to detail.
                  </p>

                  {/* YouTube link */}

                  {project.type === "youtube" && (
                    <a
                      href={youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 flex w-fit items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-orange-500"
                    >
                      Watch on YouTube

                      <ArrowUpRight size={14} />
                    </a>
                  )}

                </div>

              </article>
            );
          })}

        </div>

        <div className="mt-5 flex items-center justify-between">

          {/* Dots */}

          <div className="flex items-center gap-1.5">

            {PROJECTS.map((_, index) => (
              <span
                key={index}
                className={`h-1 transition-all duration-300 ${
                  index === 0
                    ? "w-7 bg-orange-500"
                    : "w-2 bg-white/20"
                }`}
              />
            ))}

          </div>

          {/* Arrows */}

          <div className="flex gap-2">

            <button
              type="button"
              onClick={() => scrollCarousel("prev")}
              className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/60 transition-colors hover:border-orange-500 hover:text-orange-500"
              aria-label="Previous project"
            >
              <ArrowLeft size={16} />
            </button>

            <button
              type="button"
              onClick={() => scrollCarousel("next")}
              className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/60 transition-colors hover:border-orange-500 hover:text-orange-500"
              aria-label="Next project"
            >
              <ArrowRight size={16} />
            </button>

          </div>

        </div>

      </div>

      <div className="hidden space-y-20 md:block md:space-y-28 lg:space-y-36">

        {PROJECTS.map((project, index) => {

          const reversed = index % 2 !== 0;

          const youtubeUrl =
            project.type === "youtube"
              ? `https://www.youtube.com/watch?v=${project.videoId}`
              : "";

          return (
            <motion.article
              key={index}
              initial={{
                opacity: 0,
                x: reversed ? 70 : -70,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group grid items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-16 ${
                reversed
                  ? "md:[&>*:first-child]:order-2"
                  : ""
              }`}
            >

              <div className="md:col-span-8">

                <div className="relative aspect-video overflow-hidden border border-white/10 bg-zinc-950">

                  {renderMedia(project)}

                  {/* Orange hover overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-orange-500/0 transition-all duration-700 group-hover:bg-orange-500/10" />

                  {/* Number */}

                  <div className="pointer-events-none absolute left-5 top-5 z-10 text-xs font-medium tracking-[0.2em] text-white/40">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {project.type === "youtube" && (
                    <a
                      href={youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/youtube absolute bottom-5 right-5 z-20 flex items-center gap-2 bg-white px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-orange-500"
                    >
                      <Youtube
                        size={15}
                        className="transition-transform duration-300 group-hover/youtube:scale-110"
                      />

                      Watch on YouTube
                    </a>
                  )}

                </div>

              </div>

              <div
                className={`md:col-span-4 ${
                  reversed
                    ? "md:pl-4 lg:pl-8"
                    : "md:pr-4 lg:pr-8"
                }`}
              >

                <div>

                  {/* Category */}

                  <div className="mb-5 flex items-center gap-3">

                    <span className="h-px w-8 bg-orange-500 transition-all duration-500 group-hover:w-14" />

                    <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-orange-500">
                      {project.category}
                    </span>

                  </div>

                  {/* Title */}

                  <h3 className="text-3xl font-semibold leading-[0.95] tracking-[-0.04em] text-white transition-colors duration-500 group-hover:text-orange-500 md:text-4xl lg:text-5xl">
                    {project.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-5 max-w-sm text-sm leading-6 text-white/40">
                    Visual storytelling created with purpose,
                    personality and attention to detail.
                  </p>

                  {project.type === "youtube" && (
                    <a
                      href={youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/youtube mt-7 flex w-fit items-center gap-2 border-b border-white/20 pb-2 text-xs font-medium uppercase tracking-[0.18em] text-white/70 transition-all duration-300 hover:border-orange-500 hover:text-orange-500"
                    >
                      <Youtube
                        size={15}
                        className="transition-transform duration-300 group-hover/youtube:scale-110"
                      />

                      Watch on YouTube

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover/youtube:-translate-y-1 group-hover/youtube:translate-x-1"
                      />
                    </a>
                  )}

                </div>

              </div>

            </motion.article>
          );
        })}

      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
        className="mt-20 border-t border-white/10 pt-8 md:mt-28"
      >

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

          <div>

            <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              Have a project in mind?
            </p>

            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
              Let's create something memorable.
            </h3>

          </div>

          <Link
            to="/booking"
            className="group flex w-fit items-center gap-3 bg-orange-500 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-white"
          >
            Start a project

            <ArrowUpRight
              size={17}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>

        </div>

      </motion.div>

    </section>
  );
};

export default Featured;