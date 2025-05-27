"use client";
import Image from "next/image";

export default function Services() {
  return (
    <div className="custom-container px-4 sm:px-6 ">
      <div className="flex gap-3 items-center mb-6">
        <Image
          src="/back.png"
          alt="Back icon"
          width={24}
          height={24}
          className="w-6 h-6 sm:w-8 sm:h-8"
        />
        <p className="text-lg sm:text-xl text-black">Back</p>
      </div>

      <div className="bg-[#191A23] p-4 sm:p-6 md:p-12 rounded-2xl ">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between px-6 lg:px-14 gap-6">
          <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4 w-full md:w-auto">
            <Image src="/Vector.png" alt="icon" width={24} height={24} />
            <div className="bg-[#B9FF66] text-[#191A23] font-semibold text-lg px-2 py-1 rounded leading-tight">
              <p>Search engine</p>
              <p>optimization</p>
            </div>
          </div>

          <div className="text-white w-full md:w-2/3">
            <p className="mb-6 leading-relaxed text-sm sm:text-base">
              SEO is the process of improving your website visibility on search
              engines like Google. By optimizing your content and site
              structure, we help your business rank higher in search results,
              driving more organic traffic and potential customers.
            </p>
            <button className="w-full px-4 py-3 bg-white text-black font-medium rounded-md hover:bg-[#B9FF66] hover:text-black cursor-pointer transition duration-300">
              Boost My Rankings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
