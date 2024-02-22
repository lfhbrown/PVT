import "./Navbar.css";
import { React, useState } from "react";
import ContactModal from "./ContactModal";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [modal, setModal] = useState(false);

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
          <button onClick={() => setModal(true)}>Contact</button>
          <ContactModal modal={modal} onClose={() => setModal(false)} />
        </li>
        <li className="active">
          <Link to="/faqs">FAQs</Link>
        </li>
        <li>
          <Link to="/enterapp">
            <button>Enter App</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
