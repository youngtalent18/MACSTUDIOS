import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Activity, ArrowUpRight, Bell, CalendarDays, Check, CircleHelp, FileText, FolderKanban, LayoutDashboard, LoaderCircle, LogOut, Mail, Menu, MessageSquareQuote, Plus, Search, ShieldCheck, Trash2, X } from "lucide-react";
import api from "../../lib/axios.js";
import { userStore } from "../../store/user.js";

const NAV = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "bookings", label: "Bookings", icon: CalendarDays },
  { id: "contact", label: "Messages", icon: Mail },
  { id: "reviews", label: "Reviews", icon: MessageSquareQuote },
  { id: "blog", label: "Blog posts", icon: FileText },
  { id: "portfolio", label: "Portfolio", icon: FolderKanban },
];
const RESOURCE = { bookings: "/bookings", contact: "/contact", reviews: "/reviews/admin", blog: "/blog/admin", portfolio: "/portfolio/admin" };
const DATE = (date) => date ? new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(date)) : "—";

function AdminLogin() {
  const signIn = userStore((state) => state.signIn);
  const loading = userStore((state) => state.loading);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const submit = async (event) => {
    event.preventDefault(); setError("");
    try { await signIn(credentials); }
    catch (err) { setError(err.response?.data?.message || "Unable to sign in. Check your details and try again."); }
  };
  return <main className="flex min-h-screen items-center justify-center bg-[#090909] px-5 text-white">
    <div className="w-full max-w-md border border-white/10 bg-[#101010] p-8 shadow-2xl shadow-black/60 sm:p-10">
      <Link to="/" className="text-xs font-black uppercase tracking-[.24em]">MAC<span className="text-orange-500">STUDIOS</span></Link>
      <p className="mt-12 text-[10px] font-bold uppercase tracking-[.28em] text-orange-500">Administrator access</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">Welcome back.</h1>
      <p className="mt-2 text-sm text-white/45">Sign in to manage your studio workspace.</p>
      <form onSubmit={submit} className="mt-8 space-y-5">
        <label className="block text-xs text-white/60">Email address<input required type="email" autoComplete="username" value={credentials.email} onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} className="mt-2 w-full border border-white/10 bg-black px-4 py-3.5 text-sm text-white outline-none focus:border-orange-500" placeholder="admin@example.com" /></label>
        <label className="block text-xs text-white/60">Password<input required type="password" autoComplete="current-password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} className="mt-2 w-full border border-white/10 bg-black px-4 py-3.5 text-sm text-white outline-none focus:border-orange-500" placeholder="Your password" /></label>
        {error && <p role="alert" className="text-xs text-red-400">{error}</p>}
        <button disabled={loading} className="flex w-full items-center justify-center gap-2 bg-orange-500 px-4 py-3.5 text-xs font-bold uppercase tracking-[.18em] text-black transition hover:bg-white disabled:opacity-60">{loading ? <LoaderCircle className="animate-spin" size={16} /> : <ShieldCheck size={16} />} Sign in securely</button>
      </form>
      <p className="mt-8 border-t border-white/10 pt-5 text-[10px] leading-5 text-white/30">Admin accounts only. Public visitors do not need an account to use MACSTUDIOS.</p>
    </div>
  </main>;
}

function StatCard({ label, value, icon: Icon, note, tint = "orange" }) {
  return <article className="relative overflow-hidden border border-white/[.08] bg-[#111] p-5 sm:p-6">
    <div className="flex items-start justify-between"><p className="text-xs font-medium text-white/45">{label}</p><span className={`flex h-9 w-9 items-center justify-center ${tint === "green" ? "bg-emerald-400/10 text-emerald-300" : "bg-orange-400/10 text-orange-300"}`}><Icon size={16} /></span></div>
    <p className="mt-6 text-3xl font-semibold tracking-tight text-white">{value ?? "—"}</p>
    <p className="mt-2 flex items-center gap-1.5 text-[11px] text-white/35"><ArrowUpRight size={13} className="text-emerald-400" />{note}</p>
    <div className="absolute -bottom-8 -right-5 h-20 w-20 rounded-full border border-white/[.04]" />
  </article>;
}

const TABLE_META = {
  bookings: { title: "Project enquiries", sub: "Review new project requests and update their status.", headers: ["Client", "Service", "Received", "Status"] },
  contact: { title: "Inbox", sub: "Client questions and messages sent through the website.", headers: ["Contact", "Subject", "Received", "Status"] },
  reviews: { title: "Client reviews", sub: "Approve testimonials before they appear on the public website.", headers: ["Client", "Review", "Rating", "Visibility"] },
  blog: { title: "Blog posts", sub: "Create and publish stories from the studio.", headers: ["Post", "Category", "Updated", "Status"] },
  portfolio: { title: "Portfolio projects", sub: "Manage the work displayed in the public portfolio.", headers: ["Project", "Type", "Updated", "Status"] },
};

export default function Dashboard() {
  const location = useLocation();
  const user = userStore((state) => state.user);
  const checkingAuth = userStore((state) => state.checkingAuth);
  const checkAuth = userStore((state) => state.checkAuth);
  const logout = userStore((state) => state.logout);
  const [stats, setStats] = useState(null);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [mobileNav, setMobileNav] = useState(false);
  const [search, setSearch] = useState("");
  const [createOpen, setCreateOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState("");
  const section = location.pathname.split("/")[2] || "overview";
  const current = NAV.find((item) => item.id === section) || NAV[0];

  useEffect(() => { if (checkingAuth) checkAuth(); }, [checkingAuth, checkAuth]);

  const load = useCallback(async () => {
    if (!user) return;
    setLoading(true); setError("");
    try {
      const requests = [api.get("/admin/stats")];
      if (RESOURCE[section]) requests.push(api.get(RESOURCE[section]));
      const [statsRes, listRes] = await Promise.all(requests);
      setStats(statsRes.data.data);
      setRows(section === "overview" ? [] : listRes.data.data || []);
    } catch (err) {
      setError(err.response?.data?.message || "Could not load dashboard data.");
    } finally { setLoading(false); }
  }, [section, user]);
  useEffect(() => { load(); }, [load]);

  const filteredRows = useMemo(() => rows.filter((row) => JSON.stringify(row).toLowerCase().includes(search.toLowerCase())), [rows, search]);
  const refresh = async () => { await load(); setNotice("Changes saved"); window.setTimeout(() => setNotice(""), 2400); };
  const updateRow = async (row, updates) => {
    const path = section === "reviews" ? `/reviews/admin/${row._id}` : `${RESOURCE[section]}/${row._id}`;
    try { await api.patch(path, updates); await refresh(); }
    catch (err) { setError(err.response?.data?.message || "Unable to save this change."); }
  };
  const deleteRow = async (row) => {
    if (!window.confirm(`Delete “${row.title || row.name || "this record"}”? This cannot be undone.`)) return;
    const path = section === "reviews" ? `/reviews/admin/${row._id}` : `${RESOURCE[section]}/${row._id}`;
    try { await api.delete(path); await refresh(); }
    catch (err) { setError(err.response?.data?.message || "Unable to delete this record."); }
  };
  const createItem = async (event) => {
    event.preventDefault(); const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));
    if (section === "blog") { payload.published = payload.published === "on"; payload.featured = payload.featured === "on"; if (payload.published) payload.publishedAt = new Date().toISOString(); }
    if (section === "portfolio") { payload.published = payload.published === "on"; payload.featured = payload.featured === "on"; payload.order = Number(payload.order || 0); }
    setSaving(true);
    try { await api.post(RESOURCE[section], payload); setCreateOpen(false); form.reset(); await refresh(); }
    catch (err) { setError(err.response?.data?.message || "Unable to create this item."); }
    finally { setSaving(false); }
  };

  if (checkingAuth) return <main className="grid min-h-screen place-items-center bg-[#090909] text-orange-500"><LoaderCircle className="animate-spin" /></main>;
  if (!user) return <AdminLogin />;
  if (user.role !== "admin") return <AdminLogin />;

  const statsCards = [
    { label: "Project enquiries", value: stats?.bookings?.total, icon: CalendarDays, note: `${stats?.bookings?.pending || 0} waiting for a reply` },
    { label: "Inbox messages", value: stats?.contact?.total, icon: Mail, note: `${stats?.contact?.new || 0} new messages` },
    { label: "Reviews to approve", value: stats?.reviews?.pending, icon: MessageSquareQuote, note: `${stats?.reviews?.approved || 0} published`, tint: "green" },
    { label: "Published stories", value: (stats?.blog?.published || 0) + (stats?.portfolio?.published || 0), icon: Activity, note: `${stats?.blog?.drafts || 0} blog drafts` },
  ];
  return <div className="min-h-screen bg-[#090909] text-white">
    <header className="sticky top-0 z-40 flex h-[72px] items-center justify-between border-b border-white/[.08] bg-[#0c0c0c]/95 px-4 backdrop-blur-xl md:px-7">
      <div className="flex items-center gap-3"><button onClick={() => setMobileNav(!mobileNav)} className="rounded-md p-2 text-white/60 hover:bg-white/5 lg:hidden" aria-label="Toggle navigation"><Menu size={19} /></button><Link to="/admin" className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center bg-orange-500 text-[11px] font-black text-black">M</span><span className="text-xs font-black uppercase tracking-[.18em]">MAC<span className="text-orange-500">STUDIOS</span><span className="ml-2 hidden border-l border-white/15 pl-2 text-[9px] font-medium tracking-[.2em] text-white/35 sm:inline">STUDIO DESK</span></span></Link></div>
      <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[.18em] text-white/35 md:flex"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Workspace active <span className="px-1 text-white/15">/</span> {new Intl.DateTimeFormat("en", { weekday: "short", month: "short", day: "numeric" }).format(new Date())}</div>
      <div className="flex items-center gap-2"><Link to="/" className="hidden px-3 py-2 text-[10px] font-bold uppercase tracking-[.14em] text-white/45 transition hover:text-white sm:block">View website <ArrowUpRight size={13} className="ml-1 inline" /></Link><button aria-label="Notifications" className="relative grid h-9 w-9 place-items-center border border-white/[.08] text-white/50 hover:text-white"><Bell size={16} /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-orange-500" /></button><div className="ml-1 flex items-center gap-2 border-l border-white/[.08] pl-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-orange-500/15 text-xs font-bold text-orange-300">{user.name?.[0]?.toUpperCase() || "A"}</span><div className="hidden sm:block"><p className="text-[11px] font-semibold">{user.name}</p><p className="text-[9px] uppercase tracking-wider text-white/30">Administrator</p></div><button aria-label="Sign out" onClick={async () => { await logout(); }} className="ml-1 p-2 text-white/35 hover:text-orange-400"><LogOut size={15} /></button></div></div>
    </header>
    <div className="mx-auto flex max-w-[1700px]">
      <aside className={`${mobileNav ? "translate-x-0" : "-translate-x-full"} fixed bottom-0 left-0 top-[72px] z-30 w-[248px] border-r border-white/[.07] bg-[#0c0c0c] p-4 transition-transform lg:sticky lg:top-[72px] lg:h-[calc(100vh-72px)] lg:translate-x-0`}>
        <p className="mb-3 px-3 pt-4 text-[9px] font-bold uppercase tracking-[.22em] text-white/25">Workspace</p>
        <nav className="space-y-1">{NAV.map(({ id, label, icon: Icon }) => { const active = section === id; const count = id === "reviews" ? stats?.reviews?.pending : id === "bookings" ? stats?.bookings?.pending : id === "contact" ? stats?.contact?.new : null; return <Link key={id} to={id === "overview" ? "/admin" : `/admin/${id}`} onClick={() => setMobileNav(false)} className={`group flex items-center gap-3 rounded-md px-3 py-3 text-[12px] transition ${active ? "bg-orange-500 text-black" : "text-white/45 hover:bg-white/[.04] hover:text-white"}`}><Icon size={16} strokeWidth={1.8} /><span className="flex-1 font-medium">{label}</span>{count > 0 && <span className={`min-w-5 rounded px-1.5 py-0.5 text-center text-[9px] font-bold ${active ? "bg-black/10" : "bg-white/[.07] text-white/55"}`}>{count}</span>}</Link>; })}</nav>
        <div className="absolute bottom-5 left-4 right-4 border-t border-white/[.07] pt-4"><Link to="/contact" className="flex items-center gap-3 rounded-md px-3 py-2 text-[11px] text-white/35 hover:text-white"><CircleHelp size={15} /> Get support</Link><div className="mt-4 flex items-center gap-2 px-3 text-[9px] uppercase tracking-[.16em] text-white/20"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" /> Secure admin session</div></div>
      </aside>
      {mobileNav && <button aria-label="Close navigation" onClick={() => setMobileNav(false)} className="fixed inset-0 z-20 bg-black/60 lg:hidden" />}
      <main className="min-w-0 flex-1 px-4 py-7 sm:px-7 sm:py-9 lg:px-10">
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="mb-3 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.2em] text-white/30"><span>Studio desk</span><span className="text-white/15">/</span><span className="text-orange-400">{current.label}</span></div><h1 className="text-3xl font-semibold tracking-tight sm:text-[34px]">{section === "overview" ? `Good day, ${user.name?.split(" ")[0] || "Admin"}.` : current.label}</h1><p className="mt-2 text-sm text-white/40">{section === "overview" ? "Here’s what’s happening across your studio today." : TABLE_META[section]?.sub}</p></div><div className="flex items-center gap-2"><div className="flex h-10 items-center gap-2 border border-white/[.08] bg-[#111] px-3 text-white/30"><Search size={15} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search workspace" className="w-32 bg-transparent text-xs text-white outline-none placeholder:text-white/25 sm:w-44" /></div>{["blog", "portfolio"].includes(section) && <button onClick={() => setCreateOpen(true)} className="flex h-10 items-center gap-2 bg-orange-500 px-4 text-[10px] font-bold uppercase tracking-[.12em] text-black transition hover:bg-white"><Plus size={15} /> New {section === "blog" ? "post" : "project"}</button>}</div></div>
          {notice && <div className="mb-4 flex items-center gap-2 border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-xs text-emerald-300"><Check size={14} /> {notice}</div>}
          {error && <div role="alert" className="mb-4 flex items-center justify-between border border-red-500/20 bg-red-500/5 px-4 py-3 text-xs text-red-300"><span>{error}</span><button onClick={() => setError("")} aria-label="Dismiss error"><X size={14} /></button></div>}
          {section === "overview" ? <>
            <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{statsCards.map((card) => <StatCard key={card.label} {...card} />)}</section>
            <section className="mt-7 grid gap-4 xl:grid-cols-[1.5fr_1fr]">
              <div className="border border-white/[.08] bg-[#101010] p-5 sm:p-6"><div className="flex items-start justify-between"><div><p className="text-sm font-semibold">Latest project enquiries</p><p className="mt-1 text-xs text-white/35">A quick look at recent requests</p></div><Link to="/admin/bookings" className="text-[10px] font-bold uppercase tracking-wider text-orange-400 hover:text-white">View all <ArrowUpRight size={13} className="ml-1 inline" /></Link></div><RecentBookings /></div>
              <div className="border border-white/[.08] bg-[#101010] p-5 sm:p-6"><div className="flex items-start justify-between"><div><p className="text-sm font-semibold">Studio pulse</p><p className="mt-1 text-xs text-white/35">Your content at a glance</p></div><span className="grid h-8 w-8 place-items-center bg-orange-500/10 text-orange-300"><Activity size={15} /></span></div><div className="mt-7 space-y-5">{[{ label: "Approved client reviews", value: stats?.reviews?.approved, max: Math.max(stats?.reviews?.total || 1, 5), color: "bg-orange-400" }, { label: "Published blog posts", value: stats?.blog?.published, max: Math.max(stats?.blog?.total || 1, 5), color: "bg-sky-400" }, { label: "Live portfolio projects", value: stats?.portfolio?.published, max: Math.max(stats?.portfolio?.total || 1, 5), color: "bg-emerald-400" }].map((item) => <div key={item.label}><div className="mb-2 flex justify-between text-[11px]"><span className="text-white/45">{item.label}</span><span className="text-white/70">{item.value ?? 0}</span></div><div className="h-1 bg-white/[.07]"><div className={`h-full ${item.color}`} style={{ width: `${Math.min(100, ((item.value || 0) / item.max) * 100)}%` }} /></div></div>)}</div><div className="mt-7 border-t border-white/[.07] pt-4 text-[10px] text-white/30"><ShieldCheck size={13} className="mr-1.5 inline text-emerald-400" /> Public reviews are shown after admin approval</div></div>
            </section>
            <section className="mt-4 grid gap-3 sm:grid-cols-3">{NAV.slice(1).map(({ id, label, icon: Icon }) => <Link to={`/admin/${id}`} key={id} className="group flex items-center gap-3 border border-white/[.07] bg-[#101010] p-4 transition hover:border-orange-500/30"><span className="grid h-9 w-9 place-items-center bg-white/[.04] text-orange-300"><Icon size={16} /></span><span className="flex-1 text-xs font-medium text-white/65">Manage {label.toLowerCase()}</span><ArrowUpRight size={14} className="text-white/20 transition group-hover:text-orange-400" /></Link>)}</section>
          </> : <section className="overflow-hidden border border-white/[.08] bg-[#101010]"><div className="flex flex-col gap-3 border-b border-white/[.07] p-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-sm font-semibold">{TABLE_META[section]?.title}</h2><p className="mt-1 text-[11px] text-white/35">{filteredRows.length} {filteredRows.length === 1 ? "record" : "records"}</p></div><button onClick={load} className="w-fit text-[10px] font-bold uppercase tracking-[.14em] text-white/35 hover:text-orange-400">Refresh data</button></div><div className="overflow-x-auto"><table className="w-full min-w-[740px] text-left"><thead><tr className="border-b border-white/[.06] text-[9px] font-bold uppercase tracking-[.16em] text-white/30">{TABLE_META[section]?.headers.map((head) => <th key={head} className="px-5 py-3.5">{head}</th>)}<th className="px-5 py-3.5 text-right">Actions</th></tr></thead><tbody>{loading ? <tr><td colSpan={5} className="px-5 py-16 text-center text-xs text-white/35"><LoaderCircle className="mr-2 inline animate-spin" size={15} /> Loading records</td></tr> : filteredRows.length === 0 ? <tr><td colSpan={5} className="px-5 py-16 text-center"><p className="text-sm text-white/60">Nothing here yet</p><p className="mt-1 text-xs text-white/30">New website submissions will appear here.</p></td></tr> : filteredRows.map((row) => <DataRow key={row._id} section={section} row={row} onUpdate={updateRow} onDelete={deleteRow} />)}</tbody></table></div></section>}
        </div>
      </main>
    </div>
    {createOpen && <CreateDialog section={section} saving={saving} onClose={() => setCreateOpen(false)} onSubmit={createItem} />}
  </div>;
}

function RecentBookings() {
  const [items, setItems] = useState([]);
  const user = userStore((state) => state.user);
  useEffect(() => { if (user) api.get("/bookings", { params: { limit: 5 } }).then((res) => setItems(res.data.data || [])).catch(() => setItems([])); }, [user]);
  return <div className="mt-5 divide-y divide-white/[.06]">{items.length ? items.slice(0, 4).map((item) => <div key={item._id} className="flex items-center gap-3 py-3"><span className="grid h-8 w-8 place-items-center bg-white/[.04] text-[10px] font-semibold text-orange-300">{item.fullName?.[0]?.toUpperCase() || "C"}</span><div className="min-w-0 flex-1"><p className="truncate text-xs font-medium">{item.fullName}</p><p className="mt-1 truncate text-[10px] text-white/35">{item.service}</p></div><span className="text-[9px] text-white/25">{DATE(item.createdAt)}</span></div>) : <p className="py-9 text-center text-xs text-white/30">{"No project requests yet."}</p>}</div>;
}

function DataRow({ section, row, onUpdate, onDelete }) {
  const statusValues = section === "bookings" ? ["pending", "contacted", "confirmed", "completed", "cancelled"] : section === "contact" ? ["new", "read", "replied", "archived"] : [];
  const title = row.fullName || row.name || row.title || "Untitled";
  const subtitle = row.email || row.excerpt || row.description || row.message || "";
  const middle = section === "bookings" ? row.service : section === "contact" ? row.subject : section === "reviews" ? row.rating : section === "blog" ? row.category : row.type;
  const published = section === "reviews" ? row.approved : row.published;
  return <tr className="border-b border-white/[.045] align-middle transition hover:bg-white/[.015]"><td className="px-5 py-4"><p className="max-w-[230px] truncate text-xs font-medium text-white/85">{title}</p><p className="mt-1 max-w-[230px] truncate text-[10px] text-white/30">{subtitle}</p></td><td className="max-w-[250px] px-5 py-4 text-xs text-white/55">{section === "reviews" ? <span className="line-clamp-2">{row.message}</span> : middle || "—"}</td><td className="px-5 py-4 text-xs text-white/45">{section === "reviews" ? `${row.rating || 0} / 5` : DATE(row.createdAt || row.updatedAt)}</td><td className="px-5 py-4">{statusValues.length ? <select aria-label={`Status for ${title}`} value={row.status} onChange={(e) => onUpdate(row, { status: e.target.value })} className="border border-white/10 bg-[#0b0b0b] px-2 py-1.5 text-[10px] capitalize text-white/70 outline-none focus:border-orange-500">{statusValues.map((status) => <option key={status} value={status}>{status}</option>)}</select> : <button onClick={() => onUpdate(row, section === "reviews" ? { approved: !row.approved } : { published: !row.published })} className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-semibold ${published ? "bg-emerald-400/10 text-emerald-300" : "bg-white/[.06] text-white/40"}`}><span className={`h-1.5 w-1.5 rounded-full ${published ? "bg-emerald-400" : "bg-white/30"}`} />{published ? section === "reviews" ? "Approved" : "Published" : section === "reviews" ? "Pending" : "Draft"}</button>}</td><td className="px-5 py-4 text-right">{section === "reviews" && <button title={row.featured ? "Unfeature review" : "Feature review"} onClick={() => onUpdate(row, { featured: !row.featured })} className={`mr-2 text-[9px] uppercase tracking-wider ${row.featured ? "text-orange-400" : "text-white/25 hover:text-orange-400"}`}>{row.featured ? "Featured" : "Feature"}</button>}{(section === "blog" || section === "portfolio") && <button title={row.featured ? "Unfeature" : "Feature"} onClick={() => onUpdate(row, { featured: !row.featured })} className={`mr-2 text-[9px] uppercase tracking-wider ${row.featured ? "text-orange-400" : "text-white/25 hover:text-orange-400"}`}>{row.featured ? "Featured" : "Feature"}</button>}<button onClick={() => onDelete(row)} aria-label={`Delete ${title}`} className="p-1.5 text-white/25 transition hover:text-red-400"><Trash2 size={14} /></button></td></tr>;
}

function CreateDialog({ section, saving, onClose, onSubmit }) {
  const blog = section === "blog";
  const fields = blog ? [["title", "Title", true], ["slug", "Slug", true], ["category", "Category", false], ["excerpt", "Short summary", false], ["image", "Cover image URL", false], ["content", "Article content", true]] : [["title", "Project title", true], ["slug", "Slug", true], ["category", "Category", false], ["type", "Project type (image, video, youtube)", false], ["image", "Image URL", false], ["youtubeVideoId", "YouTube video ID", false], ["description", "Description", false]];
  return <div className="fixed inset-0 z-50 grid place-items-center bg-black/75 p-4 backdrop-blur-sm"><div className="max-h-[90vh] w-full max-w-xl overflow-y-auto border border-white/10 bg-[#111] p-6 shadow-2xl sm:p-8"><div className="mb-6 flex items-start justify-between"><div><p className="text-[9px] font-bold uppercase tracking-[.2em] text-orange-400">Studio library</p><h2 className="mt-2 text-xl font-semibold">Create {blog ? "blog post" : "portfolio project"}</h2></div><button onClick={onClose} aria-label="Close" className="text-white/35 hover:text-white"><X size={18} /></button></div><form onSubmit={onSubmit} className="space-y-4">{fields.map(([name, label, required]) => <label key={name} className="block text-[10px] font-semibold uppercase tracking-wider text-white/40">{label}{name === "content" || name === "description" ? <textarea name={name} required={required} rows={name === "content" ? 6 : 3} className="mt-2 w-full resize-y border border-white/10 bg-black px-3 py-3 text-xs normal-case tracking-normal text-white outline-none focus:border-orange-500" /> : name === "type" ? <select name={name} defaultValue="image" className="mt-2 w-full border border-white/10 bg-black px-3 py-3 text-xs normal-case tracking-normal text-white outline-none focus:border-orange-500"><option value="image">Image</option><option value="video">Video</option><option value="youtube">YouTube</option></select> : <input name={name} required={required} className="mt-2 w-full border border-white/10 bg-black px-3 py-3 text-xs normal-case tracking-normal text-white outline-none focus:border-orange-500" />}</label>)}<div className="flex flex-wrap gap-4 pt-1 text-xs text-white/55"><label className="flex items-center gap-2"><input type="checkbox" name="published" className="accent-orange-500" /> Publish now</label><label className="flex items-center gap-2"><input type="checkbox" name="featured" className="accent-orange-500" /> Feature this</label></div><div className="flex justify-end gap-2 border-t border-white/[.07] pt-5"><button type="button" onClick={onClose} className="px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-white/40 hover:text-white">Cancel</button><button disabled={saving} className="bg-orange-500 px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider text-black hover:bg-white disabled:opacity-50">{saving ? "Saving..." : "Create item"}</button></div></form></div></div>;
}
