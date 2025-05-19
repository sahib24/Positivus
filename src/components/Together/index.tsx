"use client";

import Image from "next/image";

export default function Navigating() {
  return (
    <div className="custom-container">
      <div className="flex flex-col md:flex-row px-8 items-center justify-around py-6 bg-[#F3F3F3] mt-6 mb-4 rounded-3xl">
        <div className=" mb-6 md:mb-0  flex justify-center ">
          <Image
            src="/together.png"
            alt="Business growth illustration"
            width={400}
            height={400}
            className="h-auto max-w-[80%] md:max-w-[500px]"
          />
        </div>

        <div className=" text-center md:text-left ">
          <h1 className="text-[20px] md:text-[40px] leading-none font-semibold text-D_Grey">
            Together for
          </h1>
          <p className="text-[20px] md:text-[40px] font-semibold text-Primary">
            Success
          </p>
          <p className="text-[14px] md:text-[18px] text-D_Grey  max-w-[450px] mx-auto mt-3 mb-6">
            At Positivus, we help businesses grow by combining creativity,
            innovation, and data-driven strategies. Together, we build a future
            of shared success.
          </p>
        </div>
      </div>
    </div>
  );
}
