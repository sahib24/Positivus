"use client";
import Link from "next/link";

export default function CaseStudies() {
  return (
    <div className="custom-container sm:px-6 lg:px-8 mb-10">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-3 py-14">
        <span className="bg-[#B9FF66] text-black font-bold text-[24px] sm:text-[30px] px-2 py-1 rounded self-center sm:self-start w-max">
          Case Studies
        </span>

        <p className="text-[15px] sm:text-[16px] text-black max-w-full sm:max-w-[500px] flex text-center justify-center sm:text-left">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <div className="bg-[#14141F] text-white px-4 py-14 rounded-4xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-600 gap-6">
          <div className="px-4 max-w-[250px]">
            <p className="mb-4">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <Link
              href="#"
              className="text-lime-400 flex items-center gap-1 hover:underline"
            >
              Learn more
            </Link>
          </div>

          <div className="px-4 max-w-[350px]">
            <p className="mb-4">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <Link
              href="#"
              className="text-lime-400 flex items-center gap-1 hover:underline"
            >
              Learn more
            </Link>
          </div>

          <div className="px-4 max-w-[350px]">
            <p className="mb-4">
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <Link
              href="#"
              className="text-lime-400 flex items-center gap-1 hover:underline"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
