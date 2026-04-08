// import { FaShieldAlt, FaTrophy, FaArrowDown, FaStore } from "react-icons/fa";

// const Features = () => {
//   const data = [
//     {
//       icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
//       text: "100% Transferable",
//     },
//     {
//       icon: <FaTrophy className="text-blue-600 text-3xl" />,
//       text: "Expert Tech Support",
//     },
//     {
//       icon: <FaStore className="text-blue-600 text-3xl" />,
//       text: "Full Shop Functionality",
//     },
//     {
//       icon: <FaArrowDown className="text-blue-600 text-3xl" />,
//       text: "Easy Installation",
//     },
//   ];

//   return (
//     <section className="mt-20 px-20">
//       <div className="grid md:grid-cols-2 gap-12">
//         {data.map((item, i) => (
//           <div key={i} className="flex items-center justify-center gap-4">
//             {item.icon}
//             <p className="text-lg font-medium">{item.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Features;


import { Shield, Trophy, Store, ArrowDown } from "lucide-react";

const Features = () => {
  const features = [
    { icon: <Shield />, title: "100% Transferable" },
    { icon: <Trophy />, title: "Expert Tech Support" },
    { icon: <Store />, title: "Full Shop Functionality" },
    { icon: <ArrowDown />, title: "Easy Installation" },
  ];

  return (
    <section className="w-full mt-20">

      {/* CENTER GRID */}
      <div className="grid md:grid-cols-2 gap-y-12 gap-x-32 justify-items-center">

        {features.map((item, i) => (
          <div
            key={i}
            className="group flex flex-col items-center text-center gap-3 
            transition-all duration-500 cursor-pointer"
          >

            {/* ICON */}
            <div
              className="text-blue-600 text-4xl 
              transition-all duration-500 
              group-hover:scale-125 
              group-hover:rotate-6
              group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.9)]"
            >
              {item.icon}
            </div>

            {/* TEXT */}
            <p
              className="text-lg font-medium text-gray-800 
              transition-all duration-500 
              group-hover:text-blue-600"
            >
              {item.title}
            </p>

            {/* UNDERLINE */}
            <div className="w-0 h-[2px] bg-blue-500 transition-all duration-500 group-hover:w-16"></div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Features;