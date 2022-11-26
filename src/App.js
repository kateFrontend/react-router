import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./About";
import Home from "./Home";
import Shop from "./Shop";
import Team from "./Team";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/home" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/shop" className="link">
          Shop
        </Link>
        <Link to="/team" className="link">
          Our Team
        </Link>
        <Link to="/contact" className="link">
          Contact us
        </Link>
      </nav>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
