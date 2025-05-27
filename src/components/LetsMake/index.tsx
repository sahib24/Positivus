"use client";

import Image from "next/image";

export default function LetsMake() {
  return (
    <div className="custom-container">
      <div className="flex flex-col md:flex-row items-center justify-between py-6 bg-[#F3F3F3] px-14 rounded-4xl">
        <div className=" order-2 md:order-1 text-center md:text-left ">
          <h2 className="text-[17px] sm:text-[24px] font-semibold mb-5">
            Lets make things happen for success
          </h2>
          <p className="text-gray-700  max-w-md mx-auto md:mx-0 text-[16px] sm::text-[17px] mb-8">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>

          <button className="bg-black text-white text-[14px] md:text-[20px] font-medium group   items-center border hover:text-black py-2 px-4 rounded relative overflow-hidden cursor-pointer">
            <span
              className="absolute inset-0 bg-[#B9FF66]  translate-x-[-100%] group-hover:translate-x-0
     transition-transform duration-600 ease-out z-0"
            ></span>
            <p className="relative z-10 text-center"> Get your free proposal</p>
          </button>
        </div>

        <div className="order-1 md:order-2 mb-6 md:mb-0  flex justify-center ">
          <Image
            src="/letsmake.png"
            alt="Business growth illustration"
            width={400}
            height={400}
            className="h-auto w-fit"
          />
        </div>
      </div>
    </div>
  );
}
