import React, { useState } from "react";
import "./Header.scss";
import { Logo, SearchIcon } from "@icons";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
    setShowSearch(false);
  };
  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
    setShowMenu(false);
  };
  return (
    <header id="header" className="Header">
      <div className="Header__container container">
        <button
          className={`Header__nav-toggle ${showMenu ? "open" : ""}`}
          onClick={toggleMenu}
          title="Toggle Main Navbar"
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
        <div className="Header__logo">
          <Logo />
        </div>
        <button className="Header__search-toggle" onClick={toggleSearch} title="Toggle Search Bar">
          <SearchIcon />
        </button>
        <nav className={`Header__nav ${showMenu ? "open" : ""}`}>
          <ul>
            <li>
              <a className="nav-links" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="nav-links" href="#trends">
                Trending Movies
              </a>
            </li>
            <li>
              <a className="nav-links" href="#category=28&Action">
                Categories
              </a>
            </li>
            <li>
              <a className="nav-links" href="#popular">
                Popular
              </a>
            </li>
            <li>
              <a className="nav-links" href="#upcoming">
                Upcoming
              </a>
            </li>
          </ul>
        </nav>
        <div className={`Header__search ${showSearch ? "open" : ""}`}>
          <form id="searchForm">
            <input type="text" placeholder="Search" />
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
