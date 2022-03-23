import React from "react";
import { CardWidget } from "./CardWidget";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">INICIO</a>
        </li>
        <li>
          <a href="#">PRODUCTOS</a>
        </li>
        <li>
          <a href="#">NOSOTROS</a>
        </li>
        <li>
          <a href="#">CONTACTO</a>
        </li>
      </ul>
      <section className="acount">
        <a href="#">INICIAR SESION</a>
        <CardWidget />
      </section>
    </nav>
  );
};

export default NavBar;
