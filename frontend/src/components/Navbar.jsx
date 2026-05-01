import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="container">
        <nav className="glass">
          
          <div className="logo">
            <span>HireHub</span>
          </div>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>

            {/* 👇 NEW LINK ADD */}
            <Link to="/applications">My Applications</Link>
          </div>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;