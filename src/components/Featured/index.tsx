"use client";

import Image from "next/image";

export default function Featured() {
  return (
    <div className="custom-container px-4 md:px-0">
      <div className="bg-[#0f0f10] text-white p-6 md:p-8 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-block bg-[#a1f65e] text-black font-semibold text-[18px] md:text-[24px] px-3 py-1 rounded-md mb-4 md:mb-6">
            Featured Success Story
          </div>
          <h2 className="text-[16px] md:text-[18px] font-bold leading-tight">
            Scaling Success for a
          </h2>
          <h2 className="text-[16px] md:text-[18px] font-bold leading-tight mb-4 md:mb-6">
            Leading E-Commerce Brand
          </h2>
          <p className="text-[14px] text-white mb-6 md:mb-8 max-w-full md:max-w-[500px]">
            Through a comprehensive SEO and PPC strategy, we helped this
            e-commerce brand increase visibility, drive traffic, and boost
            sales.
          </p>
          <div className="flex gap-2 items-center mb-4">
            <Image
              src="/back.png"
              alt="Back icon"
              width={24}
              height={24}
              className="w-6 h-6 md:w-8 md:h-8"
            />
            <p className="text-lg md:text-xl text-[#a1f65e] cursor-pointer">
              Read
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white text-black text-center py-6 md:py-10 rounded-xl">
            <div className="text-xl md:text-2xl font-bold">200%</div>
            <div className="text-xs text-gray-600 mt-1">
              increase in organic traffic
            </div>
          </div>
          <div className="bg-white text-black text-center py-6 md:py-10 rounded-xl">
            <div className="text-xl md:text-2xl font-bold">150%</div>
            <div className="text-xs text-gray-600 mt-1">
              rise in online sales
            </div>
          </div>
          <div className="bg-white text-black text-center py-6 md:py-10 rounded-xl">
            <div className="text-xl md:text-2xl font-bold">75%</div>
            <div className="text-xs text-gray-600 mt-1">
              reduction in cost-per-click (CPC)
            </div>
          </div>
          <div className="bg-white text-black text-center py-6 md:py-10 rounded-xl">
            <div className="text-xl md:text-2xl font-bold">300%</div>
            <div className="text-xs text-gray-600 mt-1">
              improvement in conversion rate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
