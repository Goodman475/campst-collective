import Logo from "../assets/campst-logo.png";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-30 bg-white/70 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        <a href="#hero" className="flex items-center gap-2 group">
          <img
            className="w-14 h-14 md:w-16 md:h-16 drop-shadow-md transform transition duration-300 group-hover:scale-105"
            src={Logo}
            alt="Campst Logo"
          />
        </a>
        <ul className="flex gap-6 md:gap-10 font-semibold text-lime-900 text-sm md:text-base">
          {[
            { name: "HOME", href: "#hero" },
            { name: "ABOUT", href: "#about-campst" },
            { name: "CONTACT", href: "#contacts" },
          ].map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative group transition-colors duration-200"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
