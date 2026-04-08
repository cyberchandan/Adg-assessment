import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#2b0a2e] text-white px-6 py-3 flex items-center justify-between">

     
      <div className="flex gap-6 text-sm font-medium">
        <a href="#" className="hover:text-gray-300">Blog</a>
        <a href="#" className="hover:text-gray-300">Services</a>
        <a href="#" className="hover:text-gray-300">Portfolio</a>
      </div>

      <div className="text-center">
        <h1 className="text-xl font-bold tracking-widest">
         <span className="text-gray-300">Adg Online Solution</span>
        </h1>
      </div>

     
      <div className="flex gap-6 text-sm font-medium items-center">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">About Us</a>
        <a href="#" className="hover:text-gray-300">Contact Us</a>

       
        <img
          src="https://i.pravatar.cc/30"
          alt="pofile-photo"
          className="w-8 h-8 rounded-full border-2 border-white"
        />
      </div>
    </nav>
  );
};

export default Navbar;