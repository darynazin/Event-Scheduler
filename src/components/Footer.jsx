import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 p-6 bg-gray-800 text-white text-sm">
      <div className="flex flex-wrap justify-center gap-8">
        <a href="#" className="hover:underline hover:text-cyan-400">
          About Us
        </a>
        <a href="#" className="hover:underline hover:text-cyan-400">
          Contact
        </a>
        <a href="#" className="hover:underline hover:text-cyan-400">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline hover:text-cyan-400">
          Terms of Service
        </a>
      </div>

      <div className="flex gap-6 justify-center mt-4">
        <a
          href="#"
          className="text-white hover:text-cyan-400 transition duration-300"
        >
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a
          href="#"
          className="text-white hover:text-cyan-400 transition duration-300"
        >
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a
          href="#"
          className="text-white hover:text-cyan-400 transition duration-300"
        >
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a
          href="#"
          className="text-white hover:text-cyan-400 transition duration-300"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>

      <div className="text-gray-400 text-xs mt-4">
        <p>© 2024 Personal Diary. All Rights Reserved.</p>
      </div>

      <div>
        <a href="#top" className="hover:underline hover:text-cyan-400">
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
