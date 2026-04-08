
// import { useState, useRef, useEffect } from "react";
// import { Menu } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const menuRef = useRef();

//   // CLICK OUTSIDE CLOSE
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (menuRef.current && !menuRef.current.contains(e.target)) {
//         setOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -60, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className="bg-[#3b003b] text-white px-6 py-3 relative"
//     >
//       <div className="flex items-center justify-between">

//         {/* LEFT MENU */}
//         <div className="hidden md:flex gap-6 text-sm">
//           {["Blog", "Services", "Portfolio"].map((item, i) => (
//             <motion.p
//               key={i}
//               whileHover={{ scale: 1.1, color: "#d1d5db" }}
//               className="cursor-pointer"
//             >
//               {item}
//             </motion.p>
//           ))}
//         </div>

//         {/* CENTER LOGO */}
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           whileHover={{ scale: 1.05 }}
//           className="text-center leading-tight cursor-pointer"
//         >
//           <p className="text-[10px] tracking-[6px]">THE</p>
//           <div className="w-20 h-[1px] bg-white mx-auto my-1"></div>
//           <h1 className="text-xl md:text-2xl font-serif tracking-[6px]">
//             CREATOR
//           </h1>
//         </motion.div>

//         {/* RIGHT MENU */}
//         <div className="hidden md:flex items-center gap-6 text-sm">
//           {["Home", "About Us", "Contact Us"].map((item, i) => (
//             <motion.p
//               key={i}
//               whileHover={{ scale: 1.1, color: "#d1d5db" }}
//               className={i === 0 ? "border-b border-white pb-1 cursor-pointer" : "cursor-pointer"}
//             >
//               {item}
//             </motion.p>
//           ))}

//           <motion.img
//             whileHover={{ scale: 1.2, rotate: 5 }}
//             src="https://i.pravatar.cc/40"
//             className="w-8 h-8 rounded-full cursor-pointer"
//           />
//         </div>

//         {/* MOBILE MENU ICON */}
//         <div className="md:hidden">
//           <motion.button
//             whileTap={{ scale: 0.8 }}
//             whileHover={{ scale: 1.1 }}
//             onClick={() => setOpen(!open)}
//           >
//             <Menu size={26} />
//           </motion.button>
//         </div>
//       </div>

//       {/* MOBILE DROPDOWN */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             ref={menuRef}
//             initial={{ opacity: 0, y: -20, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: -20, scale: 0.95 }}
//             transition={{ duration: 0.3 }}
//             className="absolute right-4 top-14 bg-white text-black rounded-lg shadow-lg w-44 py-3 z-50"
//           >
//             {[
//               "Home",
//               "About Us",
//               "Contact Us",
//               "divider",
//               "Blog",
//               "Services",
//               "Portfolio",
//             ].map((item, i) =>
//               item === "divider" ? (
//                 <hr key={i} className="my-2" />
//               ) : (
//                 <motion.p
//                   key={i}
//                   whileHover={{ x: 5, backgroundColor: "#f3f4f6" }}
//                   onClick={() => setOpen(false)}
//                   className="px-4 py-2 cursor-pointer"
//                 >
//                   {item}
//                 </motion.p>
//               )
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;

import { useState, useRef, useEffect } from "react";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // 🔥 SCROLL FUNCTION
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-[#3b003b] text-white px-6 py-3 relative"
    >
      <div className="flex items-center justify-between">
      <div className="hidden md:flex gap-6 text-sm">
  {[
    { name: "Blog", id: "imagination" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "Team" },
  ].map((item, i) => (
    <motion.p
      key={i}
      onClick={() => scrollToSection(item.id)}
      whileHover={{ scale: 1.1, color: "#d1d5db" }}
      className="cursor-pointer"
    >
      {item.name}
    </motion.p>
  ))}
</div>

        {/* CENTER LOGO */}
        <motion.div
          onClick={() => scrollToSection("home")}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          className="text-center leading-tight cursor-pointer"
        >
          <p className="text-[10px] tracking-[6px]">THE</p>
          <div className="w-20 h-[1px] bg-white mx-auto my-1"></div>
          <h1 className="text-xl md:text-2xl font-serif tracking-[6px]">
            CREATOR
          </h1>
        </motion.div>

        {/* RIGHT MENU */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {[
            { name: "Home", id: "home" },
            { name: "About Us", id: "about" },
            { name: "Contact Us", id: "contact" },
           
          ].map((item, i) => (
            <motion.p
              key={i}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.1, color: "#d1d5db" }}
              className={`cursor-pointer ${
                i === 0 ? "border-b border-white pb-1" : ""
              }`}
            >
              {item.name}
            </motion.p>
          ))}

          <motion.img
            whileHover={{ scale: 1.2, rotate: 5 }}
            src="https://i.pravatar.cc/40"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setOpen(!open)}
          >
            <Menu size={26} />
          </motion.button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute right-4 top-14 bg-white text-black rounded-lg shadow-lg w-44 py-3 z-50"
          >
            {[
              { name: "Home", id: "home" },
              { name: "About Us", id: "about" },
              { name: "Contact Us", id: "contact" },
              "divider",
              "Blog",
              "Services",
              "Portfolio",
            ].map((item, i) =>
              item === "divider" ? (
                <hr key={i} className="my-2" />
              ) : (
                <motion.p
                  key={i}
                  whileHover={{ x: 5, backgroundColor: "#f3f4f6" }}
                  onClick={() => {
                    if (typeof item !== "string") {
                      scrollToSection(item.id);
                    }
                    setOpen(false);
                  }}
                  className="px-4 py-2 cursor-pointer"
                >
                  {typeof item === "string" ? item : item.name}
                </motion.p>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;