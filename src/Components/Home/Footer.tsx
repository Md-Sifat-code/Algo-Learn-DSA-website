import React from "react";
import { Link } from "react-router-dom"; // Use Link for navigation
import { FaGithubAlt, FaLinkedin, FaCode } from "react-icons/fa"; // GitHub, LinkedIn, and Code icons
import { FaKaggle } from "react-icons/fa"; // Kaggle icon
import { SiLeetcode } from "react-icons/si"; // Leetcode icon

const Footer: React.FC = () => {
  return (
    <section className="bg-white text-black py-8">
      <div className="container mx-auto px-6 md:px-0  flex flex-col lg:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-6 lg:mb-0 flex justify-center lg:justify-start">
          <Link
            to="/"
            className="font-bold text-purple-800 text-3xl flex items-center space-x-2"
          >
            <h1 className="text-purple-800 mark text-4xl">
              Al<span className="hana">g</span>o
            </h1>
          </Link>
        </div>

        {/* Links Section */}
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
          <Link
            to="/"
            className="footer-link text-center text-lg font-medium hover:text-purple-800 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/developer"
            className="footer-link text-center text-lg font-medium hover:text-purple-800 transition duration-300"
          >
            Developer Info
          </Link>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-6 flex justify-center space-x-6">
        <a
          href="https://github.com/Md-Sifat-code"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-800 hover:text-white transition duration-300"
        >
          <FaGithubAlt className="text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/md-sifat-follow/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-800 hover:text-white transition duration-300"
        >
          <FaLinkedin className="text-3xl" />
        </a>
        <a
          href="https://www.kaggle.com/codewithsifat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-800 hover:text-white transition duration-300"
        >
          <FaKaggle className="text-3xl" />
        </a>
        <a
          href="https://agiles.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-800 hover:text-white transition duration-300"
        >
          <FaCode className="text-3xl" />
        </a>
        <a
          href="https://leetcode.com/u/HEX_Sifat/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-800 hover:text-white transition duration-300"
        >
          <SiLeetcode className="text-3xl" />
        </a>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400">
          &copy; 2025 Sifat. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
