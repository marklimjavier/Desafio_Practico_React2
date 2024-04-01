import React from "react";
import { NavLink } from "react-router-dom";
import Carrito from "../views/Carrito";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "activate" : "inactive");
  return (
    <section>
    <nav  >
      <article className="navbar">
        <NavLink className={setActiveClass} to="/">
            🍕Pizzería Mamma Mia!
        </NavLink>
        <NavLink className={setActiveClass} to="/TotalPagar" >
          <Carrito/>
        </NavLink>
      </article>
    </nav>
    <img className="Logo" src="https://storage.googleapis.com/storage.screentop.gg/game/800539d8-5d40-4376-b705-6b6065f671c6/image?v=1692350644" alt="Logo MammaMia" />
    </section>

  );
};

export default Navbar;
