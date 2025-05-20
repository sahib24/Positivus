"use client";

import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
];

export default function OurWorking() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="custom-container py-10">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4  sm:gap-3 py-10">
        <span className="bg-[#B9FF66]  leading-tight text-black font-bold text-[24px] sm:text-[30px] px-1 py-1 rounded self-center sm:self-start w-max">
          Our Working Process
        </span>

        <p className="text-[15px] sm:text-[16px] text-black max-w-full sm:max-w-[500px] flex text-center justify-center sm:text-left">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      {steps.map((step, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className={`px-8 mb-4 transition-all duration-300 ease-in-out rounded-[40px] border-[2px] border-b-6 ${
              isOpen ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
            }`}
          >
            <div
              className="flex justify-between items-center py-10 cursor-pointer"
              onClick={() => setActiveIndex(isOpen ? -1 : index)}
            >
              <div className="flex items-center gap-4">
                <span className="font-bold text-[40px]">{step.number}</span>
                <h2 className="font-bold text-[18px]">{step.title}</h2>
              </div>

              <Image
                src={isOpen ? "/minus.png" : "/plus.png"}
                alt={isOpen ? "Collapse" : "Expand"}
                width={24}
                height={24}
                className={`w-8 h-8 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-[72px] border-t border-black pt-4 pb-6">
                <p>{step.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
