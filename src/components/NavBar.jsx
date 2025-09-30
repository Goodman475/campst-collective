import Logo from '../assets/campst-logo.png';

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-20 bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 shadow-md flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-12">
      <div className="flex items-center gap-3 mb-2 md:mb-0">
        <a href="#hero">
          <img className="w-16 h-16 drop-shadow-lg" src={Logo} alt="logo" />
        </a>
      </div>
      <ul className="text-lime-900 flex gap-6 md:gap-10 font-semibold cursor-pointer">
        <li>
          <a href="#hero" className="hover:text-amber-400 transition-colors duration-200">HOME</a>
        </li>
        <li>
          <a href="#about" className="hover:text-amber-400 transition-colors duration-200">ABOUT</a>
        </li>
        <li>
          <a href="#contacts" className="hover:text-amber-400 transition-colors duration-200">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;