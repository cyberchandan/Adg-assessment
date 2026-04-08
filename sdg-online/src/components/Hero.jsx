
const Hero = () => {
  return (
    <section className="relative text-center py-12 bg-[#f4efef] overflow-hidden">

      {/* LEFT DOODLES */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
        className="absolute left-10 top-20 w-20 opacity-40"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/1828/1828925.png"
        className="absolute left-10 bottom-20 w-20 opacity-40"
      />

      {/* RIGHT DOODLES */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/1828/1828961.png"
        className="absolute right-10 top-32 w-20 opacity-40"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png"
        className="absolute right-10 bottom-24 w-20 opacity-40"
      />

      {/* MAIN IMAGE */}
      <div className="relative w-[720px] mx-auto">
        <img
          src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
          className="w-full rounded-md shadow-md"
        />

{/* TOP RIGHT SHAPE */}
<div className="absolute -top-6 -right-6 w-24 h-12 bg-blue-500 rounded-bl-[40px] z-10"></div>

{/* BOTTOM LEFT SHAPE */}
<div className="absolute -bottom-6 -left-6 w-24 h-12 bg-blue-500 rounded-tr-[40px] z-10"></div>

      </div>

      {/* TEXT */}
      <p className="mt-6 italic text-gray-700 text-lg">
        "Designing The Future, One Pixel at a time"
      </p>

      <p className="text-sm text-gray-500 mt-1">
        - Don Norman
      </p>

      {/* BUTTON */}
      <button className="mt-4 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded shadow-md">
        Explore Now
      </button>

      {/* HEADING */}
      <h1 className="text-4xl font-bold mt-12">
        Welcome To Our Creative Studio
      </h1>

      <p className="text-gray-600 mt-2 max-w-xl mx-auto">
        In “The Creator” We Turn Our Imagination Into Pixels With Bunch Of Innovative Ideas.
      </p>
    </section>
  );
};

export default Hero;