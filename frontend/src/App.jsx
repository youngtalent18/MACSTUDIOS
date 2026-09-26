import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from "./pages/admin/Dashboard";
import Home from "./pages/client/Home";
import Header from "./layout/Header";
import Services from "./pages/client/Services"
import About from "./pages/client/About"
import Blog from "./pages/client/Blog"
import NotFound from "./pages/client/NotFound"
import Booking from "./pages/client/Booking"
import Footer from "./components/features/Footer";
import Contact from "./pages/client/Contact";
import Portfolio from "./pages/client/Portfolio";

function App() {
    
    return(
        <Router>
            <Header />
            <Routes>
                <Route path="/admin" element={<Dashboard/>}/>

                <Route path="/" element={<Home />}/>

                <Route path="/services" element={<Services/>}/>

                <Route path="/about" element={<About/>}/>   

                <Route path="/blog" element={<Blog />} />

                <Route path="*" element={<NotFound/>}/>

                <Route path="/contact" element={<Contact />} />

                <Route path="/portfolio" element={<Portfolio />} />

                <Route path="/booking" element={<Booking />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App;