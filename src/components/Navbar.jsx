import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleNavItemClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = -document.querySelector('.sticky').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
      setMobileDrawerOpen(false);
    }
  };

  return (
    <div className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container mx-auto px-4 lg:text-sm relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  className="hover:opacity-70"
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavItemClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-12">
            <a
              href="#"
              className="py-2 px-3 border rounded-md hover:bg-neutral-600"
            >
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:opacity-90"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col items-center justify-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavItemClick(item.href);
                    }}
                    className="hover:opacity-70"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="py-2 px-3 border rounded-md text-center hover:bg-neutral-600"
              >
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:opacity-90"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
