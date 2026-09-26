import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Behind the Lens: The Art of Visual Storytelling",
    excerpt:
      "Great visuals do more than look good. They communicate emotion, build connection, and turn ordinary moments into stories worth remembering.",
    category: "Photography",
    date: "September 12, 2026",
    readTime: "5 min read",
    image: "/blog1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Why Every Brand Needs Strong Visual Content",
    excerpt:
      "In a world driven by visual communication, the right content can help a brand stand out and connect with its audience.",
    category: "Content Creation",
    date: "September 05, 2026",
    readTime: "4 min read",
    image: "/blog2.jpg",
  },
  {
    id: 3,
    title: "From Concept to Screen: Our Video Production Process",
    excerpt:
      "Take a look at how an idea moves from the first concept through production and finally becomes a finished visual story.",
    category: "Videography",
    date: "August 28, 2026",
    readTime: "6 min read",
    image: "/blog3.jpg",
  },
  {
    id: 4,
    title: "Building Stories Through Creative Collaboration",
    excerpt:
      "The best creative work happens when different skills, ideas, and perspectives come together.",
    category: "Creative Process",
    date: "August 20, 2026",
    readTime: "4 min read",
    image: "/blog4.jpg",
  },
  {
    id: 5,
    title: "The Power of Social Media Storytelling",
    excerpt:
      "Social media is more than posting content. It is an opportunity to create stories that people can connect with.",
    category: "Social Media",
    date: "August 14, 2026",
    readTime: "5 min read",
    image: "/blog5.jpg",
  },
  {
    id: 6,
    title: "Creating With Purpose",
    excerpt:
      "At MACSTUDIOS, every project begins with an idea and a purpose: to inspire, connect, and transform.",
    category: "MACSTUDIOS",
    date: "August 08, 2026",
    readTime: "3 min read",
    image: "/blog6.jpg",
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

const Blog = () => {
  const featuredPost = BLOG_POSTS.find((post) => post.featured);
  const regularPosts = BLOG_POSTS.filter((post) => !post.featured);

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
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/20" />

        <div className="absolute left-0 top-0 h-full w-0.75 bg-orange-500" />

        <div className="relative flex min-h-[75vh] mt-10 items-end">
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
                  MACSTUDIOS Journal
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-6xl font-black uppercase leading-[0.82] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[9rem]"
              >
                Stories.
                <br />
                Ideas.
                <br />
                <span className="text-orange-500">Insights.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-10 max-w-xl text-base leading-7 text-white/65 md:text-lg"
              >
                Explore stories, creative insights, production experiences,
                and ideas from the world of MACSTUDIOS.
              </motion.p>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden rotate-90 text-[10px] font-bold uppercase tracking-[0.35em] text-white/40 md:block">
          Journal / Stories
        </div>
      </section>

      {/* FEATURED POST */}
      {featuredPost && (
        <section className="bg-[#050505]">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-32">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-12 flex items-end justify-between gap-8"
            >
              <div>
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
                  Featured Story
                </p>

                <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tight md:text-6xl">
                  Latest from
                  <br />
                  <span className="text-white/30">MACSTUDIOS.</span>
                </h2>
              </div>

              <span className="hidden font-mono text-xs text-white/30 md:block">
                01 / 06
              </span>
            </motion.div>

            <motion.article
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group grid overflow-hidden border border-white/10 bg-[#090909] lg:grid-cols-12"
            >
              {/* IMAGE */}
              <div className="relative min-h-[400px] overflow-hidden lg:col-span-7">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute left-6 top-6">
                  <span className="border border-orange-500 bg-orange-500 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-black">
                    Featured
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-between p-7 md:p-10 lg:col-span-5 lg:p-12">
                <div>
                  <div className="mb-6 flex flex-wrap items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    <span className="text-orange-500">
                      {featuredPost.category}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-white/20" />

                    <span>{featuredPost.date}</span>
                  </div>

                  <h3 className="text-3xl font-black uppercase leading-[0.95] md:text-4xl">
                    {featuredPost.title}
                  </h3>

                  <p className="mt-7 text-sm leading-7 text-white/45">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                  <div className="flex items-center gap-2 text-xs text-white/40">
                    <Clock size={14} />
                    {featuredPost.readTime}
                  </div>

                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="group/link flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]"
                  >
                    Read Story
                    <ArrowUpRight
                      size={17}
                      className="text-orange-500 transition group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                    />
                  </Link>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* BLOG GRID */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12 lg:pb-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
                Latest Articles
              </p>

              <h2 className="text-4xl font-black uppercase leading-[0.9] md:text-6xl">
                From the
                <br />
                <span className="text-white/30">studio.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/40">
              Creative knowledge, production stories, ideas, and insights from
              the MACSTUDIOS team.
            </p>
          </motion.div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
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
                className="group overflow-hidden border border-white/10 bg-[#080808]"
              >
                {/* IMAGE */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5">
                    <span className="bg-black/70 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-orange-500 backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>

                  <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center border border-white/20 bg-black/50 opacity-0 backdrop-blur-md transition duration-500 group-hover:opacity-100">
                    <ArrowUpRight size={17} />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
                    <CalendarDays size={13} />

                    <span>{post.date}</span>

                    <span className="h-1 w-1 rounded-full bg-white/20" />

                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold uppercase leading-tight transition group-hover:text-orange-500">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/40">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.id}`}
                    className="mt-7 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:text-orange-500"
                  >
                    Read Article
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ORANGE STATEMENT */}
      <section className="relative overflow-hidden bg-orange-500 text-black">
        <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 text-[15rem] font-black leading-none tracking-[-0.08em] text-black/5 md:text-[22rem]">
          BLOG
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/60">
              Keep Exploring
            </p>

            <h2 className="mt-7 max-w-5xl text-5xl font-black uppercase leading-[0.85] tracking-[-0.05em] sm:text-6xl md:text-8xl">
              Ideas become
              <br />
              stories.
              <br />
              Stories create
              <br />
              <span className="text-white">impact.</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative min-h-[55vh] overflow-hidden">
        <img
          src="/MACSTUDIOS AD1.jpg.jpeg"
          alt="MACSTUDIOS"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-black/50" />

        <div className="relative flex min-h-[55vh] items-end">
          <div className="mx-auto w-full max-w-7xl mt-10 px-6 pb-16 md:px-10 lg:px-12 lg:pb-24">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
                Have a story to tell?
              </p>

              <h2 className="mt-6 text-5xl font-black uppercase leading-[0.85] tracking-[-0.04em] sm:text-6xl md:text-8xl">
                Let's create
                <br />
                something
                <br />
                <span className="text-orange-500">worth sharing.</span>
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

export default Blog;