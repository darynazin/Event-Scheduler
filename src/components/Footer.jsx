import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 p-6 bg-gray-800 text-white text-sm">
      <div className="flex flex-wrap justify-center gap-8">
        <Link to="#" className="hover:underline hover:text-cyan-400">
          About Us
        </Link>
        <Link to="#" className="hover:underline hover:text-cyan-400">
          Contact
        </Link>
        <Link to="#" className="hover:underline hover:text-cyan-400">
          Privacy Policy
        </Link>
        <Link to="#" className="hover:underline hover:text-cyan-400">
          Terms of Service
        </Link>
      </div>

      <div className="flex gap-6 justify-center mt-4">
        <Link
          to="#"
          className="text-white hover:text-cyan-400 transition duration-300"
        >
          <i className="fab fa-facebook fa-2x"></i>
        </Link>
        <Link
          to="#"
          className="text-white hover:text-cyan-400 transition duration-300"
        >
          <i className="fab fa-twitter fa-2x"></i>
        </Link>
        <Link
          to="#"
          className="text-white hover:text-cyan-400 transition duration-300"
        >
          <i className="fab fa-instagram fa-2x"></i>
        </Link>
        <Link
          to="#"
          className="text-white hover:text-cyan-400 transition duration-300"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </Link>
      </div>

      <div className="text-gray-400 text-xs mt-4">
        <p>© 2024 Personal Diary. All Rights Reserved.</p>
      </div>

      <div>
        <Link to="#top" className="hover:underline hover:text-cyan-400">
          Back to Top ↑
        </Link>
      </div>
    </footer>
    // </footer>
  );
}

export default Footer;
