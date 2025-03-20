import React from "react";
import heroImage from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center">
      {/* Navbar */}
      <div className="w-full flex justify-between items-center py-4 px-8">
        <div className="text-2xl text-black font-bold">사색의향기</div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-700">
            소개
          </a>
          <a href="#" className="text-gray-700">
            소소담담 APP
          </a>
          <a href="#" className="text-gray-700">
            활동
          </a>
          <div className="relative">
            <button className="bg-gray-700 text-white px-4 py-2 rounded-full flex items-center space-x-2">
              <span>KOR</span>
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Image Section */}
      <div
        className="relative w-[90%] h-[80%] bg-cover bg-center rounded-[40px] overflow-hidden"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30 rounded-[40px]"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <p className="text-sm mb-2">특별한 나눔</p>
          <h1 className="text-5xl font-bold mb-4">
            함께하는 마음이 만드는 소중한 변화
          </h1>
          <p className="text-lg">즐거움과 나눔이 있는 감동의 순간</p>
        </div>

        {/* Pagination Controls */}
        <div className="absolute bottom-6 right-6 flex items-center space-x-4 text-white">
          <div className="text-sm">1 &mdash; 2</div>
          <button className="bg-black p-2 rounded-full border-2 border-white hover:bg-gray-700 transition">
            ←
          </button>
          <button className="bg-black p-2 rounded-full border-2 border-white hover:bg-gray-700 transition">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
