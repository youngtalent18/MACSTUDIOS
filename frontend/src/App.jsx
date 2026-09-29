import { lazy, Suspense } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
const Dashboard = lazy(() => import("./pages/admin/Dashboard.jsx"));
const Home = lazy(() => import("./pages/client/Home.jsx"));
import Header from "./layout/Header";
const Services = lazy(() => import("./pages/client/Services.jsx"));
const About = lazy(() => import("./pages/client/About.jsx"));
const Blog = lazy(() => import("./pages/client/Blog.jsx"));
const NotFound = lazy(() => import("./pages/client/NotFound.jsx"));
const Booking = lazy(() => import("./pages/client/Booking.jsx"));
import Footer from "./components/features/Footer";
const Contact = lazy(() => import("./pages/client/Contact.jsx"));
const Portfolio = lazy(() => import("./pages/client/Portfolio.jsx"));
const BlogArticle = lazy(() => import("./pages/client/BlogArticle.jsx"));
import { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import SEO from "./components/SEO.jsx";
const Reviews = lazy(() => import("./pages/client/Reviews.jsx"));
const PortfolioProject = lazy(() => import("./pages/client/PortfolioProject.jsx"));

function App() {
    const location = useLocation();
    const isAdmin = location.pathname.startsWith("/admin");
    return(
        <>
            <SEO />
            {!isAdmin && <Header />}
            <Suspense fallback={<main className="grid min-h-screen place-items-center bg-black text-sm text-white/45">Loading MACSTUDIOS...</main>}><Routes>
                <Route path="/admin/*" element={<Dashboard/>}/>

                <Route path="/" element={<Home />}/>

                <Route path="/services" element={<Services/>}/>

                <Route path="/about" element={<About/>}/>   

                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogArticle />} />
                <Route path="/reviews" element={<Reviews />} />

                <Route path="*" element={<NotFound/>}/>

                <Route path="/contact" element={<Contact />} />

                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/portfolio/:slug" element={<PortfolioProject />} />

                <Route path="/booking" element={<Booking />} />
            </Routes></Suspense>
            {!isAdmin && <Footer />}
            <Toaster position="top-right" toastOptions={{ style: { background: "#151515", color: "#fff", border: "1px solid #333" } }} />
        </>
    )
}

function AppRouter() { return <Router><App /></Router>; }

export default AppRouter;
