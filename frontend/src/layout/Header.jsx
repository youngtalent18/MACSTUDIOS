import {
  BriefcaseBusiness,
  Calendar,
  Home,
  Images,
  Lock,
  Menu,
  Newspaper,
  Phone,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import mac from "/MAC STUDIOS.png?url";

const LINKS = [
  {
    icon: Home,
    name: "Home",
    path: "/",
  },
  {
    icon: User,
    name: "About Us",
    path: "/about",
  },
  {
    icon: BriefcaseBusiness,
    name: "Services",
    path: "/services",
  },
  {
    icon: Images,
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    icon: Newspaper,
    name: "Blog",
    path: "/blog",
  },
  {
    icon: Calendar,
    name: "Booking",
    path: "/booking",
  },
  {
    icon: Phone,
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-2"
        >
          <img
            src={mac}
            alt="MACSTUDIOS logo"
            className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />

          <span className="text-sm font-semibold tracking-[0.16em] text-white">
            MACSTUDIOS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map(({ icon: Icon, name, path }) => {
            const active = location.pathname === path;

            return (
              <Link
                key={name}
                to={path}
                className={`group relative flex items-center gap-2 px-3 py-2 text-xs font-medium tracking-wide transition-colors duration-300 ${
                  active
                    ? "text-orange-500"
                    : "text-white/65 hover:text-white"
                }`}
              >
                <Icon
                  size={15}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />

                <span>{name}</span>

                {/* Active indicator */}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-px bg-orange-500 transition-transform duration-300 ${
                    active
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}

          {/* Divider */}
          <div className="mx-2 h-7 w-px bg-white/10" />

          {/* Admin */}
          <Link
            to="/admin"
            title="Admin"
            className="group flex h-9 w-9 items-center justify-center border border-white/10 text-white/50 transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-500"
          >
            <Lock
              size={16}
              strokeWidth={1.6}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center border border-white/10 text-white transition-all duration-300 hover:border-orange-500/50 hover:text-orange-500 lg:hidden"
        >
          {menuOpen ? (
            <X size={21} strokeWidth={1.6} />
          ) : (
            <Menu size={21} strokeWidth={1.6} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-3">
          {LINKS.map(({ icon: Icon, name, path }, index) => {
            const active = location.pathname === path;

            return (
              <Link
                key={name}
                to={path}
                onClick={closeMenu}
                className={`group flex items-center justify-between border-b border-white/5 py-4 transition-colors duration-300 ${
                  active
                    ? "text-orange-500"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={18}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                  <span className="text-sm font-medium tracking-wide">
                    {name}
                  </span>
                </div>

                <span
                  className={`text-xs transition-transform duration-300 group-hover:translate-x-1 ${
                    active ? "text-orange-500" : "text-white/20"
                  }`}
                >
                  0{index + 1}
                </span>
              </Link>
            );
          })}

          {/* Mobile Admin */}
          <Link
            to="/admin"
            onClick={closeMenu}
            className="group mt-3 flex items-center justify-between border border-white/10 px-4 py-3 text-white/60 transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/5 hover:text-orange-500"
          >
            <div className="flex items-center gap-3">
              <Lock
                size={17}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <span className="text-xs font-medium uppercase tracking-[0.15em]">
                Admin
              </span>
            </div>

            <span className="text-xs text-white/20">→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;