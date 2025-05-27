"use client";

import Image from "next/image";

export default function Expert() {
  return (
    <div className="custom-container mb-6 py-8">
      <div className="flex flex-col md:flex-row px-8 items-center justify-around py-6 bg-[#F3F3F3] mt-6 mb-4 rounded-3xl">
        <div className=" mb-6 md:mb-0  flex justify-center ">
          <Image
            src="/expert.png"
            alt="Business growth illustration"
            width={100}
            height={100}
            className="h-80 w-80"
          />
        </div>

        <div className=" text-center md:text-left ">
          <h1 className="text-[20px] md:text-[40px] leading-none font-semibold text-D_Grey">
            Expert Digital
          </h1>
          <p className="text-[20px] md:text-[40px] font-semibold text-Primary">
            Marketing
          </p>
          <p className="text-[20px] md:text-[40px] font-semibold text-Primary">
            Services
          </p>
          <p className="text-[14px] md:text-[18px] text-D_Grey  max-w-[450px] mx-auto mt-3 mb-6">
            Unlock businesss full potential with tailored strategies designed to
            drive growth and deliver results.
          </p>
        </div>
      </div>
    </div>
  );
}
