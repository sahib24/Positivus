"use client";

import Image from "next/image";

export default function LetsMake() {
  return (
    <div className="custom-container">
      <div className="flex flex-col md:flex-row items-center justify-between py-6 bg-[#F3F3F3] px-14 rounded-4xl">
        <div className=" order-2 md:order-1 text-center md:text-left md:w-1/2">
          <h2 className="text-[13px] md:text-[26px] font-semibold mb-3">
            Lets make things happen for success
          </h2>
          <p className="text-gray-700 mb-4 max-w-md mx-auto md:mx-0 text-[13px] md:text-[17px]">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="bg-black text-white text-[13px] md:text-[17px] px-4 py-3 mb-3 rounded-xl hover:bg-gray-500 cursor-pointer mt-2 md:mt-5">
            Get your free proposal
          </button>
        </div>

        <div className="order-1 md:order-2 mb-6 md:mb-0  flex justify-center w-full md:w-1/2">
          <Image
            src="/letsmake.png"
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
