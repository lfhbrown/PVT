import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/home" className="site-title">
        Pivot
      </Link>
      <ul>
        <li className="active">
          <Link to="/about">About</Link>
        </li>
        <li className="active">
          <button>Contact Modal</button>
        </li>
        <li className="active">
          <li className="active">
            <Link to="/faqs">FAQs</Link>
          </li>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
