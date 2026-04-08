
import { useState, useRef, useEffect } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // CLICK OUTSIDE CLOSE
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#3b003b] text-white px-6 py-3 relative">

      <div className="flex items-center justify-between">

        {/* LEFT MENU */}
        <div className="hidden md:flex gap-6 text-sm">
          <p className="cursor-pointer hover:text-gray-300">Blog</p>
          <p className="cursor-pointer hover:text-gray-300">Services</p>
          <p className="cursor-pointer hover:text-gray-300">Portfolio</p>
        </div>

        {/* CENTER LOGO */}
        <div className="text-center leading-tight">
          <p className="text-[10px] tracking-[6px]">THE</p>
          <div className="w-20 h-[1px] bg-white mx-auto my-1"></div>
          <h1 className="text-xl md:text-2xl font-serif tracking-[6px]">
            CREATOR
          </h1>
        </div>

        {/* RIGHT MENU */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <p className="border-b border-white pb-1">Home</p>
          <p className="cursor-pointer hover:text-gray-300">About Us</p>
          <p className="cursor-pointer hover:text-gray-300">Contact Us</p>

          <img
            src="https://i.pravatar.cc/40"
            className="w-8 h-8 rounded-full"
          />
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <Menu size={26} className="hover:scale-110 transition" />
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div
          ref={menuRef}
          className="absolute right-4 top-14 bg-white text-black rounded-lg shadow-lg w-44 py-3 z-50 transition-all duration-300"
        >
          <p onClick={() => setOpen(false)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Home</p>
          <p onClick={() => setOpen(false)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">About Us</p>
          <p onClick={() => setOpen(false)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Contact Us</p>

          <hr className="my-2" />

          <p onClick={() => setOpen(false)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Blog</p>
          <p onClick={() => setOpen(false)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Services</p>
          <p onClick={() => setOpen(false)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Portfolio</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;