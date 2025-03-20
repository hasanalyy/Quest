import React from "react";

const DonationSection = () => {
  return (
    <section className="bg-[#F9F5F3] py-16 text-center">
      {/* Main Title */}
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">
        기부를 통해 따뜻한 마음을 보내고 싶다면,
      </h2>

      {/* Account Info */}
      <p className="text-lg text-gray-700 font-medium">후원계좌 안내</p>
      <p className="text-lg text-gray-600 mt-1">
        국민 924501-01-351204 / 사단법인 사색의향기
      </p>

      {/* Donation Buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <button className="flex items-center gap-2 px-6 py-3 border border-black rounded-full text-white font-medium bg-transparent hover:bg-gray-100 transition">
          정기 후원
        </button>
        <button className="flex items-center gap-2 px-6 py-3 border border-black rounded-full text-white font-medium bg-transparent hover:bg-gray-100 transition">
          일시 후원
        </button>
      </div>
    </section>
  );
};

export default DonationSection;
