const Footer = () => {
    return (
      <footer className="bg-black text-white mt-10 py-3 px-10">
        <div className="flex justify-between items-center text-xs">
  
          {/* LEFT */}
          <p>Copyright © 2026 The Creator.</p>
  
          {/* CENTER */}
          <p className="hover:underline cursor-pointer">
            Privacy Policy
          </p>
  
          {/* RIGHT */}
          <p className="hover:underline cursor-pointer">
            Term Of Use
          </p>
  
        </div>
      </footer>
    );
  };
  
  export default Footer;