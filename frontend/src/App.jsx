import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from "./pages/admin/Dashboard";
import Home from "./pages/client/Home";
import Header from "./layout/Header";
import Services from "./pages/client/Services"

function App() {
    
    return(
        <Router>
            <Header />
            <Routes>
                <Route path="/admin" element={<Dashboard/>}/>

                <Route path="/" element={<Home />}/>

                <Route path="/services" element={<Services/>}/>
            </Routes>
        </Router>
    )
}

export default App;