
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative text-center py-12 overflow-hidden">

      {/* LEFT DOODLES */}
      <motion.img
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 1 }}
        src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
        className="hidden md:block absolute left-0 top-20 w-16"
      />

      <motion.img
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 1.2 }}
        src="https://cdn-icons-png.flaticon.com/512/1828/1828925.png"
        className="hidden md:block absolute left-0 bottom-10 w-16"
      />

      {/* RIGHT DOODLES */}
      <motion.img
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 1 }}
        src="https://cdn-icons-png.flaticon.com/512/1828/1828961.png"
        className="hidden md:block absolute right-0 top-20 w-16"
      />

      <motion.img
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 1.2 }}
        src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png"
        className="hidden md:block absolute right-0 bottom-10 w-16"
      />

      {/* MAIN IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-[720px] mx-auto px-4 group"
      >
        <motion.img
          whileHover={{ scale: 1.03 }}
          src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
          className="w-full h-[220px] sm:h-[300px] md:h-[400px] object-cover rounded-md shadow-md transition"
        />

        {/* TOP RIGHT SHAPE */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-6 -right-6 w-24 h-12 bg-blue-500 rounded-bl-[40px] z-10"
        ></motion.div>

        {/* BOTTOM LEFT SHAPE */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-6 -left-6 w-24 h-12 bg-blue-500 rounded-tr-[40px] z-10"
        ></motion.div>
      </motion.div>

      {/* TEXT */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 italic text-gray-700 text-lg"
      >
        "Designing The Future, One Pixel at a time"
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-sm text-gray-500 mt-1"
      >
        - Don Norman
      </motion.p>

      {/* BUTTON */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow-md transition"
      >
        Explore Now
      </motion.button>

      {/* HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="text-4xl font-bold mt-12"
      >
        Welcome To Our Creative Studio
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="text-gray-600 mt-2 max-w-xl mx-auto"
      >
        In “The Creator” We Turn Our Imagination Into Pixels With Bunch Of Innovative Ideas.
      </motion.p>
    </section>
  );
};

export default Hero;
