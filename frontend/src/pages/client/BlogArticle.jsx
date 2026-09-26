import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";
import api from "../../lib/axios.js";

export default function BlogArticle() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    setPost(null); setError(false);
    api.get(`/blog/${encodeURIComponent(slug)}`).then(({ data }) => setPost(data.data)).catch(() => setError(true));
  }, [slug]);
  if (error) return <main className="min-h-[60vh] bg-black px-6 py-24 text-center text-white"><p className="text-orange-500">Story unavailable</p><Link to="/blog" className="mt-5 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"><ArrowLeft size={15} /> Back to the journal</Link></main>;
  if (!post) return <main className="min-h-[60vh] bg-black px-6 py-24 text-center text-sm text-white/40">Loading story...</main>;
  return <main className="min-h-screen bg-black text-white">
    <header className="relative flex min-h-[48vh] items-end overflow-hidden border-b border-white/10">
      {post.image && <img src={post.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
      <div className="relative mx-auto w-full max-w-4xl px-6 pb-12 pt-24 md:px-10"><Link to="/blog" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-white/45 hover:text-orange-400"><ArrowLeft size={14} /> Journal</Link><p className="mt-10 text-[10px] font-bold uppercase tracking-[.25em] text-orange-400">{post.category || "MACSTUDIOS"}</p><h1 className="mt-4 text-4xl font-black uppercase leading-[.95] tracking-tight md:text-6xl">{post.title}</h1>{post.publishedAt && <p className="mt-6 flex items-center gap-2 text-xs text-white/40"><CalendarDays size={14} />{new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(new Date(post.publishedAt))}</p>}</div>
    </header>
    <article className="mx-auto max-w-3xl px-6 py-14 md:px-10 md:py-20"><p className="mb-8 text-lg leading-8 text-white/55">{post.excerpt}</p><div className="whitespace-pre-wrap text-[15px] leading-8 text-white/75">{post.content}</div><div className="mt-14 border-t border-white/10 pt-7"><Link to="/blog" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-orange-400 hover:text-white"><ArrowLeft size={14} /> All stories</Link></div></article>
  </main>;
}
