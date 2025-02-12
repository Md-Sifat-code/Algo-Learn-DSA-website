import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import banner from "/abnner.png";
import Sections from "./Sections";

const Hero: React.FC = () => {
  return (
    <>
      <section>
        <div className="container mt-[100px] mx-auto bg-purple-50 p-8 rounded-[18px] flex flex-row justify-center items-center">
          {/* <div className="flex flex-col justify-center items-center ">
            <h1 className="text-5xl mark text-center flex flex-col items-center gap-2 sm:text-4xl md:text-5xl lg:text-6xl">
              Learn Data Structure <span className="text-xl">with</span>
              <p className="text-purple-800 mark text-4xl sm:text-3xl md:text-4xl lg:text-5xl">
                Al
                <span className="hana">g</span>o
              </p>
            </h1>

            <p className="text-3xl mark sm:text-2xl md:text-3xl lg:text-4xl">
              Agorithm <span className="text-purple-700 hana">&</span>{" "}
              Pseudocode
            </p>
            <FaArrowCircleDown className="mt-6 text-3xl text-purple-800 sm:text-2xl md:text-3xl lg:text-4xl" />
          </div> */}
          <div className="flex flex-col items-center">
            <img src={banner} alt="" />
            <h1 className="text-5xl mark text-center flex flex-col items-center  sm:text-4xl md:text-5xl lg:text-6xl">
              Learn Data Structure <span className="text-xl">with</span>
              <p className="text-purple-800 mark text-4xl sm:text-3xl md:text-4xl lg:text-5xl">
                Al
                <span className="hana">g</span>o
              </p>
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <Sections />
        </div>
      </section>
    </>
  );
};

export default Hero;
