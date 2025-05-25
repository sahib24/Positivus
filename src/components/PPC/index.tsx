"use client";

import Image from "next/image";

export default function PPC() {
  return (
    <div className="custom-container">
      <div className="flex flex-col md:flex-row items-center justify-around py-8 bg-[#F3F3F3] rounded-2xl">
        <div className=" mb-6 md:mb-0  flex justify-center w-full md:w-1/2">
          <Image
            src="/Illustration.png"
            alt="Business growth illustration"
            width={400}
            height={400}
            className="h-auto max-w-[80%] md:max-w-[500px]"
          />
        </div>

        <div className=" text-center md:text-left">
          <h2 className="text-3xl lg:text-[18px] text-gray-900  bg-[#E5E5E5] rounded inline-block px-2 py-2 mb-8">
            Marketing Strategies
          </h2>
          <h1 className="text-[20px] md:text-[30px] leading-none font-semibold text-D_Grey">
            PPC vs. Organic Marketing
          </h1>
          <p className="text-[20px] md:text-[30px] font-semibold text-Primary">
            Which One Is
          </p>
          <p className="text-[20px] md:text-[30px] font-semibold text-Primary leading-none mb-10">
            Right for Your Business?
          </p>
          <p className="text-[14px] md:text-[18px] text-D_Grey  max-w-[500px] mx-auto mt-3 mb-6">
            PPC and organic marketing each offer unique benefits for driving
            traffic and growing your business. Discover which strategy aligns
            best with your goals and how to strike the perfect balance.
          </p>
        </div>
      </div>
    </div>
  );
}
