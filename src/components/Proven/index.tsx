"use client";

import Image from "next/image";

export default function Proven() {
  return (
    <div className="custom-container mb-6">
      <div className="flex flex-col md:flex-row px-8 items-center justify-around py-10 bg-[#F3F3F3] mt-6 mb-4 rounded-3xl">
        <div className=" mb-6 md:mb-0  flex justify-center ">
          <Image
            src="/Proven.png"
            alt="Business growth illustration"
            width={100}
            height={100}
            className="h-80 w-80"
          />
        </div>

        <div className=" text-center md:text-left ">
          <h1 className="text-[20px] md:text-[40px] leading-none font-semibold text-D_Grey">
            Proven Success
          </h1>
          <p className="text-[20px] md:text-[40px] leading-none font-semibold text-D_Grey">
            Stories
          </p>
          <p className="text-[14px] md:text-[18px] text-D_Grey  max-w-[450px] mx-auto mt-6 mb-6">
            See how innovative digital marketing strategies have transformed
            businesses. Whether through SEO, PPC, social media, or web design,
            these use cases highlight the tangible impact of the work. Explore
            the successes and envision what can be achieved together.
          </p>
        </div>
      </div>
    </div>
  );
}
