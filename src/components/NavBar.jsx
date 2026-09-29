import React from "react";
import { navLinks } from "@/constants";

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="apple logo" />

        <ul>
          {navLinks.map((navlink) => (
            <li key={navlink.label}>
              <a href={navlink.label}>{navlink.label}</a>
            </li>
          ))}
        </ul>

        <div className=" flex-center gap-3  ">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
