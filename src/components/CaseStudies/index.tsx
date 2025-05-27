"use client";
import Link from "next/link";

export default function CaseStudies() {
  return (
    <div className="custom-container sm:px-6 lg:px-8 mb-10">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-3 py-14">
        <span className="bg-[#B9FF66] text-black font-bold text-[24px] sm:text-[30px] px-2 py-1 rounded self-center sm:self-start w-max">
          Case Studies
        </span>

        <p className="text-[15px] sm:text-[16px] text-black max-w-full sm:max-w-[600px] flex text-center justify-center sm:text-left">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <div className="bg-[#14141F] text-white px-8 py-8 rounded-2xl">
        <div className="  grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white py-6">
          <div className="flex flex-col justify-center h-full items-center md:items-start text-center md:text-left px-8">
            <p className="mb-6 text-lg">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <Link
              href="#"
              className="text-[#B9FF66] flex items-center text-lg gap-1 mb-2"
            >
              Learn more
            </Link>
          </div>

          <div className="flex flex-col justify-center h-full items-center pl-8 md:items-start text-center md:text-left px-4">
            <p className="mb-6 text-lg">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <Link
              href="#"
              className="text-[#B9FF66] flex items-center text-lg gap-1 mb-2"
            >
              Learn more
            </Link>
          </div>

          <div className="flex flex-col justify-center h-full items-center pl-8 md:items-start text-center md:text-left px-4">
            <p className="mb-6 text-lg">
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <Link
              href="#"
              className="text-[#B9FF66] flex items-center gap-1 text-lg"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
