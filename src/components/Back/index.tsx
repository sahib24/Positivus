"use client";
import Image from "next/image";

export default function Services() {
  return (
    <div className="custom-container py-6">
      <div className="flex gap-3 pl-6 items-center mb-4">
        <Image
          src="/back.png"
          alt="Back icon"
          width={24}
          height={24}
          className="w-8 h-8"
        />
        <p className="text-xl text-black">Back</p>
      </div>

      <div className="bg-[#191A23] p-6 md:p-8 rounded-2xl mt-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4 w-full md:w-auto">
            <Image src="/Vector.png" alt="icon" width={24} height={24} />
            <div className="bg-[#B9FF66] text-[#191A23] font-semibold text-lg px-2 py-1 rounded leading-tight">
              <p>Search engine</p>
              <p>optimization</p>
            </div>
          </div>

          <div className="text-white md:max-w-2xl">
            <p className="mb-6 leading-relaxed text-sm md:text-base">
              SEO is the process of improving your website visibility on search
              engines like Google. By optimizing your content and site
              structure, we help your business rank higher in search results,
              driving more organic traffic and potential customers.
            </p>
            <button className="w-full md:w-[600px] px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-300 cursor-pointer transition">
              Boost My Rankings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
