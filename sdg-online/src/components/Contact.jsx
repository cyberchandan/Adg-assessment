
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="mt-20 px-16 text-center">

     
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="w-20 h-[1px] bg-gray-400"></div>
        <h2 className="text-gray-600 text-sm">Contact Us</h2>
        <div className="w-20 h-[1px] bg-gray-400"></div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

       
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-blue-100 to-blue-300 p-6 rounded-2xl shadow-md flex gap-4 items-center hover:shadow-xl transition"
        >
          
          {/* FORM */}
          <div className="flex-1 text-left">
            <h3 className="text-sm font-semibold mb-3">
              Let’s Chat, Reach Out To Us
            </h3>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-2 p-2 rounded bg-white text-sm outline-none transition focus:ring-2 focus:ring-blue-500 focus:scale-[1.02]"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full mb-2 p-2 rounded bg-white text-sm outline-none transition focus:ring-2 focus:ring-blue-500 focus:scale-[1.02]"
            />

            <textarea
              placeholder="Your Query..."
              className="w-full mb-2 p-2 rounded bg-white text-sm outline-none transition focus:ring-2 focus:ring-blue-500 focus:scale-[1.02]"
            ></textarea>

            <button
              className="bg-white px-4 py-1 rounded text-sm shadow 
              hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Submit
            </button>
          </div>

          {/* IMAGE */}
          <div className="flex-1">
            <motion.img
              whileHover={{ scale: 1.08, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              className="rounded-xl shadow-md w-full h-[180px] object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="relative w-fit mx-auto">
            
            {/* PULSE EFFECT */}
            <span className="absolute inset-0 rounded-full bg-blue-400 opacity-30 animate-ping"></span>

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              className="w-24 mx-auto opacity-60 relative z-10 hover:scale-110 transition"
            />
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Our Tech Staff Will <br /> Reach Out To You Soon...
          </p>
        </motion.div>

      </div>

      {/* QUOTE */}
      <div className="flex items-center justify-center gap-4 mt-12">
        <div className="w-24 h-[1px] bg-gray-400"></div>
        <p className="text-xs text-gray-500 italic">
          “Your dream is our goal. We can’t wait to kickstart your imagination.”
        </p>
        <div className="w-24 h-[1px] bg-gray-400"></div>
      </div>

    </section>
  );
};

export default Contact;
