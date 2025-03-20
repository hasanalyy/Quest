import React from "react";

const projects = [
  {
    title: "인문학 콘서트",
    description:
      "깊은 사유와 따뜻한 대화가 어우러진 시간\n마음을 울리는 문화와 인문학의 이야기",
    image: "/images/img1.png",
    align: "right",
  },
  {
    title: "지역 축제",
    description:
      "지역의 숨결을 느끼며 함께 웃는 하루\n소박한 만남속에 커지는 온기",
    image: "/images/img1.png",
    align: "left",
  },
  {
    title: "나눔 바자회",
    description: "행복이 전해지는 물건들,\n그 속의 이야기들",
    image: "/images/img2.png",
    align: "right",
  },
  {
    title: "따뜻한 후원",
    description:
      "작은 나눔이 모여 큰 울림이 됩니다.\n사색의향기와 함께 만들어가는 더 나은 내일",
    image: "/images/img3.png",
    align: "left",
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full px-6 py-16 bg-white ">
      {/* Title */}
      <div className="text-center mb-12 text-black">
        <h2 className="text-4xl font-bold ">
          함께하는 일 <span className="text-gray-300 ">· 우리의 흔적</span>
        </h2>
      </div>

      {/* Project List */}
      <div className="space-y-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              project.align === "left" ? "md:flex-row-reverse" : ""
            } items-center gap-4 `}
            style={{ paddingLeft: "320px", paddingRight: "320px" }}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/2 h-24 object-cover rounded-lg"
            />

            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <p className="text-gray-600 whitespace-pre-line mb-2">
                {project.description}
              </p>
              <h3 className="text-2xl font-bold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
