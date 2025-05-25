import React from "react";
import Image from "next/image";

const plans = [
  {
    name: "Basic Plan",
    price: "$500",
    features: [
      "Website optimization",
      "Social media setup and management (1 platform)",
      "Monthly progress report",
      "Email support",
      "Basic competitor analysis",
      "Initial SEO audit",
    ],
  },
  {
    name: "Pro Plan",
    price: "$1000",
    popular: true,
    features: [
      "Includes all from the Basic Plan",
      "Social media setup and management (up to 3 platforms)",
      "PPC ad campaign management",
      "Email and phone support",
      "On-page SEO improvements",
      "Monthly content recommendations",
    ],
  },
  {
    name: "Elite Plan",
    price: "$2000",
    features: [
      "Includes all from the Pro Plan",
      "Website design and development",
      "Comprehensive SEO strategy",
      "Social media setup and management (up to 5 platforms)",
      "Content marketing strategy and implementation",
      "In-depth analytics and reporting",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-0">
      <h2 className="text-4xl font-bold  mb-4">Pricing</h2>
      <p className=" text-black mb-12">
        Elevate Your Online Presence: Competitive Pricing for Exceptional
        Results
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => {
          const isPopular = plan.popular;
          const cardBg = isPopular
            ? "bg-neutral-900 text-white  border-2"
            : "bg-white";
          const buttonColor = isPopular ? "bg-lime-500" : "bg-black";

          return (
            <div
              key={index}
              className={`rounded-2xl border p-6 shadow-md flex flex-col justify-between   border-b-6 ${cardBg}`}
            >
              <div className="flex flex-col justify-between h-full">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-semibold flex items-center gap-2">
                      {plan.name}
                    </h3>
                    {isPopular && (
                      <span className="bg-lime-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-3xl font-bold mb-4">
                    {plan.price}
                    <span className="text-base font-normal"> /month</span>
                  </p>
                  <div className="flex flex-col gap-2 mb-6">
                    <button
                      className={`${buttonColor} text-white py-2 rounded-xl font-semibold cursor-pointer`}
                    >
                      Get Started
                    </button>
                    <button
                      className={`py-2 rounded-xl font-semibold cursor-pointer ${
                        isPopular
                          ? "border border-white text-white"
                          : "border border-black text-black"
                      }`}
                    >
                      Request a quote
                    </button>
                  </div>
                  <hr className="border-t border-gray-300 my-4" />
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
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
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
