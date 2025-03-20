import React from "react";

const FooterSection = () => {
  return (
    <footer className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between">
        {/* Left Section with Logo and Info */}
        <div className="w-full lg:w-2/3">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold">사색의향기</h1>
          </div>

          {/* Links */}
          <div className="flex gap-6 mb-6">
            <a href="#" className="text-gray-300 hover:text-white">
              개인정보 처리방침
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              이용약관
            </a>
          </div>

          {/* Customer Service */}
          <p className="text-gray-400 mb-8">
            고객센터 평일 08:00~19:00 (주말 및 공휴일 휴무)
          </p>

          {/* Company Info */}
          <div className="space-y-4 text-gray-400">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <p className="text-gray-300">사단법인 사색의향기</p>
              <p>이사장 오덕균</p>
              <p>고유번호 355-82-00129</p>
            </div>

            {/* Address and Contact */}
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-gray-500">주소</span>
                <span>서울시 강남구 테헤란로 19길 28 이림빌딩3층(역삼동)</span>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <div className="flex gap-2">
                  <span className="text-gray-500">전화</span>
                  <span>02-539-5101</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-500">팩스</span>
                  <span>070-8668-5091</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-500">이메일</span>
                  <span>culppy@culppy.com</span>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 pt-4">
              Copyright © 2025 사색의향기. All Rights Reserved
            </p>
          </div>
        </div>

        {/* Right Section - Newsletter */}
        <div className="w-full lg:w-1/3 mt-12 lg:mt-0">
          <div className="lg:max-w-sm lg:ml-auto">
            <h3 className="text-xl font-semibold mb-4">뉴스레터 구독하기</h3>
            <p className="text-gray-400 mb-6">
              이메일 구독을 통해 사색의향기의 최신 소식과 교육 및 이벤트 소식을
              빠르게 받아보실 수 있습니다.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="이메일 주소"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-full focus:outline-none focus:border-gray-500"
              />
              <button className="px-6 py-2 bg-white text-black rounded-r-full hover:bg-gray-200 transition-colors">
                구독하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
