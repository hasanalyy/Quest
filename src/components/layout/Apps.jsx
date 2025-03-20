import React, { useRef } from "react";

const Apps = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const partners = [
    {
      title: "(주)행복한사람들",
      description:
        "행복한 날, 행복한 사람들과 함께하는 특별한 날을 선사합니다.",
      image: "/images/1.png",
    },
    {
      title: "바른댓글 실천연대",
      description: "바른댓글 정착으로 아름다운 사회를 만들어갑니다.",
      image: "/images/2.png",
    },
    {
      title: "아트리안",
      description:
        "생활미술시장의 뉴 패러다임을 제안하는 상설 아트갤러리 프로젝트.",
      image: "/images/3.png",
    },
    {
      title: "대한민국위멘위원회",
      description: "어린이를 위한 위대한 멘토, 위멘이\n함께 합니다.",
      image: "/images/4.png",
    },
  ];

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">
            함께하는 <br />
            이들
          </h2>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="p-4 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-4 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Partners Section */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {partners.map((partner, index) => (
            <div key={index} className="flex-none w-[300px] snap-start">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={partner.image}
                    alt={partner.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{partner.title}</h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apps;
