const Contact = () => {
  return (
    <section className="mt-20 px-16 text-center">

      {/* HEADING */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="w-20 h-[1px] bg-gray-400"></div>
        <h2 className="text-gray-600 text-sm">Contact Us</h2>
        <div className="w-20 h-[1px] bg-gray-400"></div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT: FORM + IMAGE COMBINED */}
        <div className="bg-gradient-to-b from-blue-100 to-blue-300 p-6 rounded-2xl shadow-md flex gap-4 items-center">
          
          {/* FORM */}
          <div className="flex-1 text-left">
            <h3 className="text-sm font-semibold mb-3">
              Let’s Chat, Reach Out To Us
            </h3>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full mb-2 p-2 rounded bg-white text-sm outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full mb-2 p-2 rounded bg-white text-sm outline-none"
            />

            <textarea
              placeholder="Your Query..."
              className="w-full mb-2 p-2 rounded bg-white text-sm outline-none"
            ></textarea>

            <button className="bg-white px-4 py-1 rounded text-sm shadow">
              Submit
            </button>
          </div>

          {/* IMAGE */}
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              className="rounded-xl shadow-md w-full h-[180px] object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            className="w-24 mx-auto opacity-60"
          />
          <p className="mt-4 text-sm text-gray-600">
            Our Tech Staff Will <br /> Reach Out To You Soon...
          </p>
        </div>

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