import { motion } from "framer-motion";
import { ArrowUpRight, Play, X } from "lucide-react";
import { useState } from "react";
import { FaYoutube } from "react-icons/fa";

const PROJECTS = [
  {
    id: 1,
    title: "Creative Contents",
    category: "Content Creation",
    type: "youtube",
    videoId: "vNkRQs5QMAE",
    description:
      "Creative visual content produced to entertain, connect, and tell stories.",
  },
  {
    id: 2,
    title: "Creative Stories",
    category: "Behind The Scenes",
    type: "youtube",
    videoId: "iU-A0dqv_8s",
    description:
      "A behind-the-scenes look at the creative process behind MACSTUDIOS productions.",
  },
  {
    id: 3,
    title: "Visual Production",
    category: "Videography",
    type: "image",
    src: "/videography.jpeg",
    description:
      "Cinematic visual production created with a strong focus on storytelling and atmosphere.",
  },
  {
    id: 4,
    title: "Website Design",
    category: "Software Development",
    type: "video",
    src: "/SoftwareDev.mp4",
    description:
      "Digital experiences designed to combine functionality, creativity, and visual identity.",
  },
  {
    id: 5,
    title: "Visual Stories",
    category: "Photography",
    type: "video",
    src: "/Photography.mp4",
    description:
      "Photography-focused visual storytelling built around authentic moments and strong composition.",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/MACSTUDIOS AD1.jpg.jpeg"
            alt="MACSTUDIOS Portfolio"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/20" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-orange-500">
              Our Portfolio
            </p>

            <h1 className="text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl md:text-8xl">
              Stories
              <br />
              <span className="text-orange-500">Worth Seeing.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              Explore a selection of creative work from MACSTUDIOS —
              photography, videography, content creation, digital experiences,
              and stories brought to life through visual media.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-20 md:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
              Selected Work
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-tight md:text-6xl">
              Every project has
              <span className="text-white/40"> a story.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/50 md:text-base">
            From the first idea to the final frame, we create visual
            experiences designed to communicate, connect, and leave an
            impression.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="space-y-24 md:space-y-32">
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7 }}
                className={`grid items-center gap-8 md:grid-cols-12 md:gap-12 ${
                  isReversed ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* MEDIA */}
                <div className="relative md:col-span-8 md:[direction:ltr]">
                  <div
                    className="group relative aspect-[16/10] cursor-pointer overflow-hidden bg-zinc-900"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.type === "image" && (
                      <img
                        src={project.src}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    )}

                    {project.type === "video" && (
                      <video
                        src={project.src}
                        muted
                        loop
                        autoPlay
                        playsInline
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    )}

                    {project.type === "youtube" && (
                      <img
                        src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    )}

                    <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/45" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-black">
                        {project.type === "youtube" ? (
                          <Play className="ml-1 fill-current" size={24} />
                        ) : (
                          <ArrowUpRight size={25} />
                        )}
                      </div>
                    </div>

                    <div className="absolute left-5 top-5">
                      <span className="bg-black/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    {project.type === "youtube" && (
                      <div className="absolute bottom-5 right-5 flex items-center gap-2 bg-black/75 px-3 py-2 text-xs font-bold backdrop-blur-md">
                        <FaYoutube className="text-red-500" />
                        YouTube
                      </div>
                    )}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="md:col-span-4 md:[direction:ltr]">
                  <div className="mb-5 flex items-center gap-4">
                    <span className="text-xs font-bold tracking-[0.25em] text-orange-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-12 bg-white/20" />
                  </div>

                  <h3 className="text-3xl font-black uppercase leading-tight md:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/55 md:text-base">
                    {project.description}
                  </p>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="group mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:text-orange-500"
                  >
                    View Project
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-black">
                      <ArrowUpRight size={16} />
                    </span>
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* STATEMENT */}
      <section className="relative overflow-hidden border-y border-white/10 bg-orange-500 text-black">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <p className="text-xs font-black uppercase tracking-[0.3em]">
            MACSTUDIOS
          </p>

          <h2 className="mt-6 max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
            We don't just create content.
            <br />
            We create stories.
          </h2>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="border border-white/10 bg-zinc-950 p-8 md:p-12 lg:p-16">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">
                  Have a project?
                </p>

                <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-tight md:text-6xl">
                  Let's create something
                  <span className="text-orange-500"> worth remembering.</span>
                </h2>
              </div>

              <a
                href="/booking"
                className="inline-flex w-fit items-center gap-3 bg-orange-500 px-7 py-4 text-sm font-black uppercase tracking-wider text-black transition hover:bg-white"
              >
                Start a Project
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden bg-zinc-950"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/80 text-white transition hover:bg-orange-500 hover:text-black"
            >
              <X size={20} />
            </button>

            {/* MEDIA */}
            <div className="aspect-video bg-black">
              {selectedProject.type === "youtube" && (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedProject.videoId}?autoplay=1`}
                  title={selectedProject.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}

              {selectedProject.type === "image" && (
                <img
                  src={selectedProject.src}
                  alt={selectedProject.title}
                  className="h-full w-full object-contain"
                />
              )}

              {selectedProject.type === "video" && (
                <video
                  src={selectedProject.src}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-contain"
                />
              )}
            </div>

            {/* MODAL INFO */}
            <div className="p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
                {selectedProject.category}
              </p>

              <div className="mt-3 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <h3 className="text-3xl font-black uppercase md:text-4xl">
                    {selectedProject.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.type === "youtube" && (
                  <a
                    href={`https://www.youtube.com/watch?v=${selectedProject.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-black transition hover:bg-orange-500"
                  >
                    <FaYoutube size={17} />
                    Watch on YouTube
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Portfolio;