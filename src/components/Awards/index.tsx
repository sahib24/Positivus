"use client";
import Image from "next/image";

export default function Awards() {
  return (
    <div className="custom-container mb-10">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-3 py-10 mb-10">
        <span className="bg-[#B9FF66] text-black font-bold text-[24px] sm:text-[30px] px-2 py-1 rounded self-center sm:self-start w-max">
          Awards & Recognition
        </span>
        <p className="text-[15px] sm:text-[16px] text-black max-w-full sm:max-w-[500px] text-center sm:text-left">
          At the heart of everything we do are our core values:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2   md:grid-cols-2   xl:grid-cols-4 gap-12">
        <div className="bg-[#F3F3F3] rounded-4xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="h-48 bg-gray-100 flex items-center justify-center">
            <Image
              src="/Awarts/a.png"
              alt="Digital Marketing Award"
              width={200}
              height={200}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Best Small Business Digital Marketing Agency of the Year
            </h3>
          </div>
          <div className="px-6 pb-6">
            <p className="text-black">
              Celebrating our success in delivering innovative strategies and
              measurable results for small business clients.
            </p>
          </div>
        </div>

        <div className="bg-[#F3F3F3] rounded-4xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="h-48 bg-gray-100 flex items-center justify-center">
            <Image
              src="/Awarts/b.png"
              alt="Website Design Award"
              width={200}
              height={200}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Innovative Website Design
            </h3>
          </div>
          <div className="px-6 pb-6">
            <p className="text-black">
              Honoring our expertise in developing visually stunning,
              user-friendly websites that boost conversions.
            </p>
          </div>
        </div>

        <div className="bg-[#F3F3F3] rounded-4xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="h-48 bg-gray-100 flex items-center justify-center">
            <Image
              src="/Awarts/c.png"
              alt="PPC Campaign Award"
              width={200}
              height={200}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Top Performing PPC Campaign of the Year
            </h3>
          </div>
          <div className="px-6 pb-6">
            <p className="text-black">
              Acknowledging our ability to design and execute high-impact
              pay-per-click campaigns.
            </p>
          </div>
        </div>

        <div className=" bg-[#F3F3F3] rounded-4xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="h-48 bg-gray-100 flex items-center justify-center">
            <Image
              src="/Awarts/d.jpeg"
              alt="Social Media Award"
              width={200}
              height={200}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Expertise in Social Media Marketing
            </h3>
          </div>
          <div className="px-6 pb-6">
            <p className="text-black">
              Recognizing our skills in crafting effective social media
              strategies and engaging content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
