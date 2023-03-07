import React from "react";

function NavBar() {
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
      style={{ backgroundColor: "rgb(3, 54, 81)" }}
    >
      <div className="container">
        <div className="navbar-brand">
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbar-menu" className="navbar-menu is-static">
          <div className="navbar-start">
            <a href="#personal" className="navbar-item has-text-white">
              about
            </a>
            <a href="#educational" className="navbar-item has-text-white">
              educational
            </a>
            <a href="#skills" className="navbar-item has-text-white">
              skills
            </a>
            <a href="#ex" className="navbar-item has-text-white">
              extracuricular activies
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
