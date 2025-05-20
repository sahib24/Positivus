"use client";

import Image from "next/image";

export default function Navigating() {
  return (
    <div className="custom-container">
      <div className="flex flex-col md:flex-row px-8 items-center justify-around py-6 bg-[#F3F3F3] mt-6 mb-4 rounded-3xl">
        <Image
          src="/Atpositivus.png"
          alt="Business growth illustration"
          width={400}
          height={400}
          className="h-auto"
          priority
        />

        <div className=" text-center md:text-left ">
          <p className="md:text-[20px] lg:text-[30px] leading-none font-semibold text-D_Grey mb-8 max-w-[600px] mx-auto">
            At Positivus, we believe that success is built on innovation,
            collaboration, and a relentless focus on delivering results.
          </p>
          <p className=" md:text-[14px] lg:text-[20px]  font-semibold text-D_Grey">
            - John Smith, Founder of Positivus
          </p>
        </div>
      </div>
    </div>
  );
}
