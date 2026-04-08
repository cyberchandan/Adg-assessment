
const Progress = () => {
  const data = [
    { value: 80, label: "Satisfied Clients" },
    { value: 50, label: "Active Brand Collab", prefix: "More than" }, 
    { value: 60, label: "Current Active Users" },
  ];

  return (
    <section className="w-full px-20 mt-20">
      <div className="grid md:grid-cols-3 gap-12 justify-items-center">
        
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white w-[260px] h-[260px] rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center"
          >
            
            {/* BIG CIRCLE */}
            <div
              className="w-32 h-32 rounded-full"
              style={{
                background: `conic-gradient(#22c55e ${item.value}%, #e5e7eb 0%)`,
                mask: "radial-gradient(white 55%, transparent 56%)",
                WebkitMask: "radial-gradient(white 55%, transparent 56%)",
              }}
            ></div>

            {/* TEXT */}
            <p className="mt-6 text-center font-medium text-gray-800 leading-snug">
  {item.prefix && (
    <span className="block text-sm text-gray-600">
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