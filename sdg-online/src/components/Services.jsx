
const services = [
  {
    title: "BRAND IDENTITY",
    img:  "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    desc: "Brand identity is the unique combination of visual elements, voice, and values that define how a business presents itself and is perceived by customers.",
  },
  {
    title: "WEB DESIGN & UI",
    img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    desc: "Web design is the art of planning and creating visually appealing, user-friendly websites that deliver a seamless user experience across devices.",
  },
  {
    title: "DEVELOPMENT & CMS",
    img: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
    desc: "Development and CMS solutions empower businesses to build, manage, and update digital platforms efficiently without needing constant technical support.",
  },
];

const Services = () => {
  return (
    <section className="px-16 mt-16">
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((item, i) => (
          <div
            key={i}
            className="bg-yellow-300 rounded-2xl p-6 text-center shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:scale-105 transition duration-300"
          >
            {/* IMAGE */}
            <img
              src={item.img}
              className="w-40 mx-auto mb-4"
            />

            {/* TITLE */}
            <h3 className="font-semibold text-sm tracking-wide">
              {item.title}
            </h3>

            {/* WHITE CONTENT BOX */}
            <div className="bg-white text-xs text-gray-700 p-3 mt-3 rounded-md shadow">
              {item.desc}
            </div>

            {/* BUTTON */}
            <button className="mt-3 text-sm font-medium underline hover:text-blue-600">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;