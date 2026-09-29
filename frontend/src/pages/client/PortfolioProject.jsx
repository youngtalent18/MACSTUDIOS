import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../lib/axios.js";
import SEO from "../../components/SEO.jsx";

export default function PortfolioProject() {
  const { slug } = useParams();
  const [result, setResult] = useState(null);
  useEffect(() => { let active = true; api.get(`/portfolio/${encodeURIComponent(slug)}`).then(({ data }) => { if (active) setResult({ slug, project: data.data }); }).catch(() => { if (active) setResult({ slug, error: true }); }); return () => { active = false; }; }, [slug]);
  const project = result?.slug === slug ? result.project : null;
  if (result?.slug === slug && result.error) return <><SEO noindex /><main className="min-h-[65vh] bg-black px-6 py-32 text-center text-white"><h1 className="text-4xl font-black uppercase">Project unavailable</h1><Link to="/portfolio" className="mt-6 inline-block text-orange-400">Back to portfolio</Link></main></>;
  if (!project) return <main className="min-h-[65vh] bg-black px-6 py-32 text-center text-white/50">Loading project...</main>;
  const videoId = project.youtubeVideoId || project.youtubeUrl?.match(/[?&]v=([^&]+)/)?.[1];
  return <><SEO title={`${project.title} | MACSTUDIOS Portfolio`} description={project.description || `${project.category || "Creative"} project by MACSTUDIOS.`} image={project.image} /><main className="min-h-screen bg-black text-white"><header className="mx-auto max-w-6xl px-6 pb-12 pt-32 md:px-10"><Link to="/portfolio" className="text-xs font-bold uppercase tracking-[.2em] text-orange-400">← Portfolio</Link><p className="mt-10 text-xs font-bold uppercase tracking-[.25em] text-orange-400">{project.category || "MACSTUDIOS"}</p><h1 className="mt-4 text-4xl font-black uppercase md:text-7xl">{project.title}</h1><p className="mt-5 max-w-3xl text-base leading-7 text-white/55">{project.description}</p></header><section className="mx-auto max-w-6xl px-6 pb-24 md:px-10">{project.type === "youtube" && videoId ? <iframe className="aspect-video w-full" src={`https://www.youtube-nocookie.com/embed/${videoId}`} title={project.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : project.type === "video" && project.video ? <video className="aspect-video w-full bg-black object-contain" src={project.video} controls preload="none" poster={project.image || undefined} /> : project.image ? <img className="max-h-[75vh] w-full object-contain" src={project.image} alt={`${project.title} by MACSTUDIOS`} loading="eager" /> : null}</section></main></>;
}
