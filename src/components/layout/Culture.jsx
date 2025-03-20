import React from "react";
import bookImg from "../../assets/hero.png";

const Culture = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          새로운 문화 나눔을 만들어갑니다.
        </h1>

        <div className="flex items-center justify-center gap-2">
          <h2 className="text-3xl md:text-4xl font-bold text-black">우리는</h2>
          <div className=" w-60 h-16 relative rounded-full overflow-hidden">
            <img
              src={bookImg}
              alt="Book Image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-black">
          사색의향기입니다.
        </h1>

        <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto">
          사색의향기는 문학인들의 커뮤니티로서 "행복한 문화 나눔"을 통한 사회
          공헌과 선진적이고 건전한 사회 문화를 만들어나가기 위해 노력하는 비영리
          단체입니다.
        </p>
      </div>
    </div>
  );
};

export default Culture;
