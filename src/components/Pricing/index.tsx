import React from "react";
import Image from "next/image";

const Pricing = () => {
  return (
    <div className="py-16 custom-container">
      <h2 className="text-4xl font-bold mb-4">Pricing</h2>
      <p className="text-black mb-12">
        Elevate Your Online Presence: Competitive Pricing for Exceptional
        Results
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="rounded-2xl border p-6 shadow-md flex flex-col justify-between bg-white border-b-6 hover:bg-black transition duration-300 group">
          <div className="flex flex-col justify-between h-full">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-semibold flex items-center gap-2 group-hover:text-white">
                  Basic Plan
                </h3>
              </div>
              <p className="text-3xl font-bold mb-4 group-hover:text-white">
                $500<span className="text-base font-normal"> /month</span>
              </p>
              <div className="flex flex-col gap-2 mb-6">
                <button className="bg-black text-white py-2 rounded-xl font-semibold cursor-pointer  group-hover:bg-[#B9FF66] group-hover:text-black">
                  Get Started
                </button>
                <button className="py-2 rounded-xl font-semibold cursor-pointer border group-hover:border-white group-hover:text-white border-black text-black">
                  Request a quote
                </button>
              </div>
              <hr className="border-t border-black my-4 group-hover:border-white" />
              <ul className="space-y-2 group-hover:text-white">
                {[
                  "Website optimization",
                  "Social media setup and management (1 platform)",
                  "Monthly progress report",
                  "Email support",
                  "Basic competitor analysis",
                  "Initial SEO audit",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Image
                      src="/icon.png"
                      alt="check"
                      width={20}
                      height={20}
                      className="mr-2 mt-1 rounded-full"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border p-6 shadow-md flex flex-col justify-between bg-white border-b-6 hover:bg-black transition duration-300 group">
          <div className="flex flex-col justify-between h-full">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2 ">
                <h3 className="text-2xl font-semibold flex items-center gap-2 group-hover:text-white">
                  Pro Plan
                </h3>
                <span className="bg-lime-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                  Popular
                </span>
              </div>
              <p className="text-3xl font-bold mb-4 group-hover:text-white">
                $1000<span className="text-base font-normal"> /month</span>
              </p>
              <div className="flex flex-col gap-2 mb-6">
                <button className="bg-black text-white py-2 rounded-xl font-semibold cursor-pointer  group-hover:bg-[#B9FF66] group-hover:text-black">
                  Get Started
                </button>
                <button className="py-2 rounded-xl font-semibold cursor-pointer border group-hover:border-white group-hover:text-white border-black text-black">
                  Request a quote
                </button>
              </div>
              <hr className="border-t border-black my-4 group-hover:border-white" />
              <ul className="space-y-2 group-hover:text-white">
                {[
                  "Includes all from the Basic Plan",
                  "Social media setup and management (up to 3 platforms)",
                  "PPC ad campaign management",
                  "Email and phone support",
                  "On-page SEO improvements",
                  "Monthly content recommendations",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Image
                      src="/icon.png"
                      alt="check"
                      width={20}
                      height={20}
                      className="mr-2 mt-1 rounded-full"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border p-6 shadow-md flex flex-col justify-between bg-white border-b-6 hover:bg-black transition duration-300 group">
          <div className="flex flex-col justify-between h-full">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-semibold flex items-center gap-2 group-hover:text-white">
                  Elite Plan
                </h3>
              </div>
              <p className="text-3xl font-bold mb-4 group-hover:text-white">
                $2000<span className="text-base font-normal"> /month</span>
              </p>
              <div className="flex flex-col gap-2 mb-6">
                <button className="bg-black text-white py-2 rounded-xl font-semibold cursor-pointer  group-hover:bg-[#B9FF66] group-hover:text-black">
                  Get Started
                </button>
                <button className="py-2 rounded-xl font-semibold cursor-pointer border group-hover:border-white group-hover:text-white border-black text-black">
                  Request a quote
                </button>
              </div>
              <hr className="border-t border-black my-4 group-hover:border-white" />
              <ul className="space-y-2 group-hover:text-white">
                {[
                  "Includes all from the Pro Plan",
                  "Website design and development",
                  "Comprehensive SEO strategy",
                  "Social media setup and management (up to 5 platforms)",
                  "Content marketing strategy and implementation",
                  "In-depth analytics and reporting",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Image
                      src="/icon.png"
                      alt="check"
                      width={20}
                      height={20}
                      className="mr-2 mt-1 rounded-full"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
