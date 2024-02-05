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
          <Link to="/contact">Contact</Link>
        </li>
        <li className="active">
          <Link to="/enterapp">
            <button className="enter-app">Enter App</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
