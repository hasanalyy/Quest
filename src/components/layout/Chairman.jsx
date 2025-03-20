import React from "react";

const Chairman = () => {
  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - CEO Message */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-black">
              이사장 인사말.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              안녕하세요, 사색의향기 이사장 오덕균 입니다. <br />
              사색의향기는 ‘행복한 문화 나눔’을 통해 더 나은 사회를 만들어가고자
              노력해왔습니다. 앞으로도 문화와 인문학의 가치를 공유하며, 열린
              커뮤니티로서 함께 성장하겠습니다.
            </p>
            <p className="text-gray-600 font-semibold mb-2">
              사단법인 사색의향기 이사장 오덕균
            </p>
            <img
              src="/images/signature.png"
              alt="Signature"
              className="w-[150px] h-auto"
            />
            <a
              href="#"
              className="mt-4 inline-block text-gray-700 font-semibold"
            >
              인터뷰 더 보기 &gt;
            </a>
          </div>

          {/* Right Side - CEO Image with Abstract Background Shape */}
          <div className="relative flex justify-end">
            {/* Abstract Art Behind Image */}
            <div className="absolute -top-6 -left-6 w-[250px] h-[150px] bg-blue-200 rounded-bl-[60px] rounded-tr-[20px] -z-10"></div>
            <img
              src="/images/leader.png"
              alt="CEO"
              className="w-full max-w-[350px] h-auto rounded-lg relative z-10"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 flex flex-wrap justify-center gap-12">
          {/* Team Member 1 */}
          <div className="text-center">
            <img
              src="/images/leader.png"
              alt="Team Member 1"
              className="w-36 h-36 object-cover rounded-full mx-auto mb-4"
            />
            <p className="text-lg font-medium text-black">오덕균 이사장</p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <img
              src="/images/leader2.png"
              alt="Team Member 2"
              className="w-36 h-36 object-cover rounded-full mx-auto mb-4"
            />
            <p className="text-lg font-medium text-black">정준호 이사</p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <img
              src="/images/leader3.png"
              alt="Team Member 3"
              className="w-36 h-36 object-cover rounded-full mx-auto mb-4"
            />
            <p className="text-lg font-medium text-black">권혁준 고문</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chairman;
