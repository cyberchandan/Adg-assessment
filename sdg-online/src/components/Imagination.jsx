

import { motion } from "framer-motion";

const Imagination = () => {
  return (
    <section className="px-16 mt-20 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* IMAGE */}
        <motion.img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          initial={{ opacity: 0, x: -80, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="w-full h-[350px] object-cover rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
        />

        {/* TEXT SIDE */}
        <div className="pt-4">

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold leading-snug"
          >
            Go Beyond Your <br /> Imagination
          </motion.h2>

          {/* CARD */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 15px 35px rgba(37,99,235,0.4)",
            }}
            className="bg-blue-600 text-white mt-6 px-6 py-5 rounded-xl max-w-md shadow-md cursor-pointer"
          >
            Imagination is the quiet superpower that turns a blank page into a vibrant universe, allowing us to build castles in the sky and solve mundane problems with magical solutions.
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Imagination;