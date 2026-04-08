
const Progress = () => {
  const data = [
    { value: 80, label: "Satisfied Clients" },
    { value: 50, label: "Active Brand Collab", prefix: "More than" },
    { value: 60, label: "Current Active Users" },
  ];

  return (
    <section className="w-full px-6 md:px-20 mt-20">
      <div className="grid md:grid-cols-3 gap-12 justify-items-center">

        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white w-[260px] h-[260px] rounded-2xl shadow-lg flex flex-col items-center justify-center 
            transition-all duration-500 hover:scale-110 
            hover:shadow-[0_0_60px_rgba(34,197,94,0.8)]"
          >

            {/* 🔥 FIRE CIRCLE */}
            <div className="relative group">

              {/* 🔥 OUTER GLOW */}
              <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-500 
              bg-[radial-gradient(circle,#22c55e,transparent)]"></div>

              {/* 🔥 MAIN PROGRESS */}
              <div
                className="w-32 h-32 rounded-full relative z-10 transition-all duration-500 group-hover:scale-110"
                style={{
                  background: `conic-gradient(#22c55e ${item.value}%, #e5e7eb 0%)`,
                  mask: "radial-gradient(white 55%, transparent 56%)",
                  WebkitMask: "radial-gradient(white 55%, transparent 56%)",
                }}
              ></div>

              {/* 🔥 PULSE RING */}
              <div className="absolute inset-0 rounded-full border-2 border-green-400 opacity-0 
              group-hover:opacity-100 animate-ping"></div>

            </div>

            {/* TEXT */}
            <p className="mt-6 text-center font-medium text-gray-800 leading-snug">
              {item.prefix && (
                <span className="block text-sm text-gray-500">
                  {item.prefix}
                </span>
              )}
              {item.value}% of <br />
              {item.label}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Progress;