const Progress = () => {
    const items = [
      { val: 80, text: "Satisfied Clients" },
      { val: 50, text: "Active Brand Collab" },
      { val: 60, text: "Active Users" },
    ];
  
    return (
      <div className="flex justify-center gap-10 mt-16">
        {items.map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow text-center">
            <div
              className="w-24 h-24 rounded-full"
              style={{
                background: `conic-gradient(#22c55e ${item.val}%, #e5e7eb 0%)`,
              }}
            ></div>
            <p className="mt-4 text-sm font-medium">
              {item.val}% {item.text}
            </p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Progress;