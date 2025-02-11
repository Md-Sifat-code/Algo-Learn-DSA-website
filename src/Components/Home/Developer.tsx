import React from "react";
import logo from "/rt.png"; // Your logo image
import { FaGithubAlt, FaLinkedin, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaKaggle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Developer: React.FC = () => {
  return (
    <section className="bg-gray-900 px-6 md:px-0 container mx-auto mt-12 rounded-[42px] min-h-[50vh] flex flex-col items-center justify-center">
      <div className="mt-12">
        <img
          src={logo}
          className="w-[200px] h-[200px] rounded-full border-2 border-purple-500"
          alt="Developer Logo"
        />
      </div>
      <div className="mt-6 text-center">
        <h1 className="text-white text-2xl font-bold">Md Sifat Bin Jibon</h1>
        <h2 className="text-purple-400 text-lg font-semibold">
          Full-Stack Developer || MERN
        </h2>
        <div className="flex flex-row justify-center items-center gap-6 text-purple-500 mt-4 text-2xl">
          <Link to="https://github.com/Md-Sifat-code">
            <FaGithubAlt />
          </Link>
          <Link to="https://www.linkedin.com/in/md-sifat-follow/">
            <FaLinkedin />
          </Link>
          <Link to="https://www.kaggle.com/codewithsifat">
            <FaKaggle />
          </Link>
          <Link to="https://agiles.site/">
            <FaCode />
          </Link>
          <Link to="https://leetcode.com/u/HEX_Sifat/">
            <SiLeetcode />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Developer;
