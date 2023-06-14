import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <button
          className="Header__search-toggle"
          onClick={toggleSearch}
          title="Toggle Search Bar"
        >
          <SearchIcon />
        </button>
        <nav className={`Header__nav ${showMenu ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink className="navLink" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/trends">
                Trending Movies
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/category">
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/popular">
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/upcoming">
                Upcoming
              </NavLink>
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
