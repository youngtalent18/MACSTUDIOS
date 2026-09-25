import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Play,
} from "lucide-react";
import { FaYoutube } from "react-icons/fa";

const CHANNEL_URL = "https://www.youtube.com/@macstudios101";

const YouTubeLatest = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/youtube/latest");

        if (!response.ok) {
          throw new Error("Failed to fetch YouTube videos.");
        }

        const data = await response.json();

        if (!data.success) {
          throw new Error(
            data.message || "Unable to load YouTube videos."
          );
        }

        setVideos(data.videos || []);
      } catch (err) {
        console.error(err);
        setError(
          "We couldn't load the latest videos right now."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(date));
  };

  return (
    <section className="bg-black px-6 py-20 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-orange-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                YouTube
              </span>
            </div>

            <h2 className="text-4xl font-black uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
              Latest
              <span className="block text-orange-500">
                Uploads
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 md:text-base">
              Discover the latest creative work, behind-the-scenes
              moments, stories, productions and visual content
              from MACSTUDIOS.
            </p>
          </div>

          {/* SUBSCRIBE */}
          <motion.a
            href={`${CHANNEL_URL}?sub_confirmation=1`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-orange-500 bg-orange-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-orange-400"
          >
            <FaYoutube className="text-lg" />

            Subscribe

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>
        </motion.div>

        {/* LOADING */}
        {loading && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="overflow-hidden border border-white/10 bg-white/3"
              >
                <div className="aspect-video animate-pulse bg-white/10" />

                <div className="space-y-3 p-5">
                  <div className="h-4 w-3/4 animate-pulse bg-white/10" />
                  <div className="h-3 w-1/2 animate-pulse bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <div className="border border-white/10 bg-white/3 p-8 text-center">
            <FaYoutube className="mx-auto mb-4 text-3xl text-orange-500" />

            <p className="text-sm text-white/60">
              {error}
            </p>

            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-orange-500 transition-colors hover:text-orange-400"
            >
              Visit our YouTube channel
              <ArrowUpRight size={16} />
            </a>
          </div>
        )}

        {/* VIDEOS */}
        {!loading && !error && videos.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <motion.a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="group block overflow-hidden border border-white/10 bg-white/3 transition-colors duration-500 hover:border-orange-500/50"
              >
                {/* THUMBNAIL */}
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/45" />

                  {/* PLAY */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-black transition-all duration-500 group-hover:scale-110">
                      <Play
                        size={21}
                        fill="currentColor"
                        className="ml-0.5"
                      />
                    </div>
                  </div>

                  {/* YOUTUBE */}
                  <div className="absolute left-4 top-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/70 backdrop-blur">
                      <FaYoutube className="text-sm text-orange-500" />
                    </div>
                  </div>

                  {/* ARROW */}
                  <div className="absolute right-4 top-4 flex h-9 w-9 translate-x-2 -translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={17} />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h3 className="line-clamp-2 text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-orange-500">
                    {video.title}
                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-wider text-white/40">
                    <CalendarDays size={14} />

                    <span>
                      {formatDate(video.publishedAt)}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {/* NO VIDEOS */}
        {!loading && !error && videos.length === 0 && (
          <div className="border border-white/10 bg-white/3 p-10 text-center">
            <FaYoutube className="mx-auto mb-4 text-3xl text-orange-500" />

            <p className="text-white/50">
              No videos found on the channel yet.
            </p>
          </div>
        )}
        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              More from MACSTUDIOS
            </p>

            <p className="mt-1 text-sm text-white/40">
              Watch our latest creative work on YouTube.
            </p>
          </div>

          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-orange-500 transition-colors hover:text-orange-400"
          >
            View Channel

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeLatest;