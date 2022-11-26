import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Shop from "./Shop";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
      </nav>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
