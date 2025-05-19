"use client";

import Image from "next/image";

export default function Navigating() {
  return (
    <div className="custom-container">
      <div className="flex flex-col md:flex-row px-8 items-center justify-around py-6 bg-[#F3F3F3] mt-6 mb-4 rounded-3xl">
        <div className=" mb-6 md:mb-0  flex justify-center ">
          <Image
            src="/Atpositivus.png"
            alt="Business growth illustration"
            width={500}
            height={500}
            className="h-auto max-w-[80%] md:max-w-[500px]"
          />
        </div>

        <div className=" text-center md:text-left ">
          <p className="text-[20px] md:text-[40px] leading-none font-semibold text-D_Grey mb-8 max-w-[600px] mx-auto">
            At Positivus, we believe that success is built on innovation,
            collaboration, and a relentless focus on delivering results.
          </p>
          <p className="text-[20px] md:text-[24px]  font-semibold text-D_Grey">
            - John Smith, Founder of Positivus
          </p>
        </div>
      </div>
    </div>
  );
}
