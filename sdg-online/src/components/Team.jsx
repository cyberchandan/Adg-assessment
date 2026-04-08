
import { Coffee, User, Paintbrush, Code } from "lucide-react";

const Creator = () => {
  const data = [
    { icon: <Coffee />, value: "210+", label: "Cups of Coffees" },
    { icon: <User />, value: "50+", label: "Developers" },
    { icon: <Paintbrush />, value: "60+", label: "Designers" },
    { icon: <Code />, value: "8250+", label: "Lines of Codes" },
  ];

  return (
    <section className="w-full px-6 md:px-20 mt-20 text-center">

      {/* TITLE */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="w-20 h-[1px] bg-gray-400"></div>
        <h2 className="bg-yellow-400 px-4 py-1 font-semibold">
          Creators In Our Team
        </h2>
        <div className="w-20 h-[1px] bg-gray-400"></div>
      </div>

      {/* ITEMS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

        {data.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 
            transition-all duration-500 
            hover:scale-110"
          >

            {/* ICON */}
            <div className="text-black text-3xl 
            transition-all duration-500 
            hover:text-blue-600 
            hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
              {item.icon}
            </div>

            {/* NUMBER */}
            <h3 className="text-xl font-semibold 
            transition-all duration-500 
            hover:text-blue-600">
              {item.value}
            </h3>

            {/* LABEL */}
            <p className="text-sm text-gray-500">
              {item.label}
            </p>

          </div>
        ))}

      </div>

      {/* LINE TEXT */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <div className="w-20 h-[1px] bg-gray-400"></div>
        <p className="text-gray-500 text-sm">Quality Over Quantity</p>
        <div className="w-20 h-[1px] bg-gray-400"></div>
      </div>

  
    </section>
  );
};

export default Creator;