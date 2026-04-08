import { FaCoffee, FaCode, FaPaintBrush, FaUser } from "react-icons/fa";

const Team = () => {
  const data = [
    { icon: <FaCoffee />, value: "210+", label: "Cups of Coffees" },
    { icon: <FaUser />, value: "50+", label: "Developers" },
    { icon: <FaPaintBrush />, value: "60+", label: "Designers" },
    { icon: <FaCode />, value: "8250+", label: "Lines of Codes" },
  ];

  return (
    <section className="mt-20 px-16 text-center">

      {/* HEADING */}
      <div className="flex items-center justify-center gap-6 mb-10">
        <div className="w-20 h-[1px] bg-gray-400"></div>

        <h2 className="bg-yellow-300 px-6 py-1 font-semibold text-lg">
          Creators In Our Team
        </h2>

        <div className="w-20 h-[1px] bg-gray-400"></div>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-12">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            
            {/* ICON */}
            <div className="text-3xl mb-3">
              {item.icon}
            </div>

            {/* VALUE */}
            <p className="text-lg font-semibold">
              {item.value}
            </p>

            {/* LABEL */}
            <p className="text-sm text-gray-700">
              {item.label}
            </p>

          </div>
        ))}
      </div>

      {/* BOTTOM LINE */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <div className="w-16 h-[1px] bg-gray-400"></div>
        <p className="text-sm text-gray-500">Quality Over Quantity</p>
        <div className="w-16 h-[1px] bg-gray-400"></div>
      </div>

    </section>
  );
};

export default Team;