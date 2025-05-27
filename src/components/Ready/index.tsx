"use client";
import Image from "next/image";

export default function Services() {
  return (
    <div className="custom-container py-6">
      <div className="bg-white rounded-[40px] border-[2px] border-b-6 border-black flex flex-col md:flex-row p-6 md:px-20 gap-6">
        <div className="w-full md:max-w-2xl mx-auto md:mx-0 p-4 md:p-8 text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Ready to Elevate Your Search Rankings?
          </h2>

          <p className="mb-6 leading-relaxed text-sm sm:text-base">
            Our proven SEO strategies are designed to help your business achieve
            long-lasting success in search engines. Whether you want to boost
            organic traffic, improve keyword rankings, or increase conversions,
            were here to make it happen.
          </p>

          <p className="mb-8 text-sm sm:text-base">
            Lets work together to grow your online presence.
          </p>

          <button className="bg-[#B9FF66] w-full md:w-[550px] text-black text-[14px] md:text-[20px] font-medium group flex flex-col items-center  hover:text-white hover:bg-black py-2 px-3 rounded relative overflow-hidden cursor-pointer">
            Start My SEO Journey
          </button>
        </div>

        <div className="flex justify-center md:justify-end items-center w-full md:w-1/2">
          <Image
            src="/core1.png"
            alt="Innovation"
            width={200}
            height={200}
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80"
          />
        </div>
      </div>
    </div>
  );
}
