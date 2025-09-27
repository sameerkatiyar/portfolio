import { useState } from "react";
import pic from "../../public/Images/photo.avif";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experiance" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="logo" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Sameer <span className="text-green-500 text-2xl">Katiyar</span>
              <p className="text-sm">front-end developer</p>
            </h1>
          </div>

          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 cursor-pointer font-medium"
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <div
              onClick={() => setMenu(!menu)}
              className="md:hidden cursor-pointer"
            >
              {menu ? <FiMenu size={24} /> : <IoClose size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-6 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                >
                  <Link
                  onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
