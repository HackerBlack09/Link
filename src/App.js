import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { About } from "./pages/About.js";
import { Blog } from "./pages/Blog.js";
import { NotFound } from "./pages/NotFound.js";
import { Home } from "./pages/Home.js";

function App() {
  return (
    <>
      <Router>
        <div className="navbar">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/notfound"}>NotFound</Link>
            </li>
          </ul>
        </div>
      <header>
        <h2>Header</h2>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
