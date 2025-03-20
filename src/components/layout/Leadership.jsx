import React from "react";

const HomePage = () => {
  return (
    <div className="bg-white min-h-screen p-10 flex flex-col items-center">
      {/* Header Section */}
      <div className="flex justify-between items-start w-full max-w-5xl">
        {/* Text Section */}
        <div className="text-left mb-10 w-2/3">
          <h1 className="text-5xl font-bold mb-6 text-black">이사장 인사말.</h1>
          <p className="text-black text-xl mb-6 leading-relaxed">
            안녕하세요, 사색의향기 이사장 오덕균 입니다.
            <br />
            사색의향기는 '행복한 문화 나눔'을 통해 더 나은 사회를 만들어가고자
            노력해왔습니다.
            <br />
            앞으로도 문화와 인문학의 가치를 공유하며, 열린 커뮤니티로서 함께
            성장하겠습니다.
            <br />
            많은 관심과 응원 부탁드립니다. 감사합니다.
          </p>
          <p className="text-black text-xl font-bold mb-4">
            사단법인 사색의향기 이사장 오덕균
          </p>
          <p className="text-blue-600 underline cursor-pointer text-lg">
            인터뷰 더 보기 &gt;
          </p>
        </div>

        {/* CEO Image with Blue Background */}
        {/* <div className="relative w-72 h-72">
          <div className="absolute inset-0 bg-blue-200 rounded-2xl"></div>
          <img
            src="/images/leader.jpg"
            alt="CEO"
            className="w-72 h-55 object-cover relative"
          />
        </div> */}
        {/* CEO Image with Custom Background Space */}
      <div className="relative w-72 h-72">
        <div className="absolute inset-0 rounded-2xl">
          <div className="w-full h-full bg-blue-200 rounded-[100px]"></div> {/* Shape Background */}
        </div>
        <div className="absolute inset-0 rounded-2xl">
          {/* Placeholder for Background Image, You can place your image here */}
        </div>
        <img
          src="/images/leader.png"
          alt="CEO"
          className="w-72 h-72 object-cover rounded-2xl relative"
        />
      </div>
      </div>

      {/* Images Section */}
      <div className="flex justify-center items-center gap-20 mt-10">
        {/* Image with Text Below */}
        <div className="flex flex-col items-center">
          <img
            src="/images/leader.png"
            alt="오덕균 이사장"
            className="w-40 h-40 rounded-full mb-4 object-cover"
          />
          <p className="text-center font-medium text-black">오덕균 이사장</p>
        </div>

        {/* Two Profiles in Circles */}
        <div className="flex gap-16">
          <div className="flex flex-col items-center">
            <img
              src="/images/leader2.png"
              alt="정준호 이사"
              className="w-40 h-40 rounded-full mb-4 object-cover"
            />
            <p className="text-center font-medium text-black">정준호 이사</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/leader3.png"
              alt="권혁준 고문"
              className="w-40 h-40 rounded-full mb-4 object-cover"
            />
            <p className="text-center font-medium text-black">권혁준 고문</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
