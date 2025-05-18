"use client";

import Image from "next/image";

export default function Navigating() {
  return (
    <div className="custom-container">
      <div className="flex flex-col md:flex-row items-center justify-between py-6">
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-[20px] md:text-[40px] leading-none font-semibold text-D_Grey">
            Navigating the
          </h1>
          <p className="text-[20px] md:text-[40px] font-semibold text-Primary">
            digital landscape
          </p>
          <p className="text-[20px] md:text-[40px] font-semibold text-Primary leading-none mb-6">
            for success
          </p>
          <p className="text-[14px] md:text-[18px] text-D_Grey  max-w-[500px] mx-auto mt-3 mb-6">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="bg-black text-white text-[13px] md:text-[20px] px-4 py-3 mb-3 rounded-xl hover:bg-gray-500 cursor-pointer mt-2 md:mt-5">
            Book a consultation
          </button>
        </div>
        <div className="order-1 md:order-2 mb-6 md:mb-0  flex justify-center w-full md:w-1/2">
          <Image
            src="/Illustration.png"
            alt="Business growth illustration"
            width={400}
            height={400}
            className="h-auto max-w-[80%] md:max-w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}
