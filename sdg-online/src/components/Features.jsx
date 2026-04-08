import { FaShieldAlt, FaTrophy, FaArrowDown, FaStore } from "react-icons/fa";

const Features = () => {
  const data = [
    {
      icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
      text: "100% Transferable",
    },
    {
      icon: <FaTrophy className="text-blue-600 text-3xl" />,
      text: "Expert Tech Support",
    },
    {
      icon: <FaStore className="text-blue-600 text-3xl" />,
      text: "Full Shop Functionality",
    },
    {
      icon: <FaArrowDown className="text-blue-600 text-3xl" />,
      text: "Easy Installation",
    },
  ];

  return (
    <section className="mt-20 px-20">
      <div className="grid md:grid-cols-2 gap-12">
        {data.map((item, i) => (
          <div key={i} className="flex items-center justify-center gap-4">
            {item.icon}
            <p className="text-lg font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;