"use client";
import Image from "next/image";

export default function HowWeWork() {
  return (
    <div className="custom-container sm:px-6 lg:px-8 mb-10">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-3 py-10">
        <span className="bg-[#B9FF66] text-black font-bold text-[24px] sm:text-[30px] px-2 py-1 rounded self-center sm:self-start w-max">
          How We Work: SEO Process
        </span>

        <p className="text-[15px] sm:text-[16px] text-black max-w-full sm:max-w-[500px] text-center sm:text-left">
          Our step-by-step SEO process ensures a website ranks higher, attracts
          more traffic, and drives lasting results.
        </p>
      </div>

      <div className="p-4 space-y-6">
        {[
          {
            title: "Website Audit & Analysis",
            description:
              "We begin by conducting a comprehensive audit to identify areas for improvement, including technical issues, content quality, and keyword opportunities.",
          },
          {
            title: "Keyword Research & Strategy",
            description:
              "Our team researches the most relevant and high-impact keywords for your business, ensuring that we target terms that drive qualified traffic.",
          },
          {
            title: "On-Page Optimization",
            description:
              "We optimize your websites structure, meta tags, and content to make it search engine-friendly, improving your visibility and relevance.",
          },
          {
            title: "Content Creation & Optimization",
            description:
              "High-quality content is key to SEO. We create or refine content that engages your audience while aligning with search engine algorithms.",
          },
          {
            title: "Link Building",
            description:
              "We develop a link-building strategy to acquire authoritative, relevant backlinks that boost your domain authority and search rankings.",
          },
          {
            title: "Monitoring & Reporting",
            description:
              "We continuously monitor performance, track rankings, and provide detailed reports, making data-driven adjustments to maintain and improve your results.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center bg-[#F3F3F3] rounded-2xl shadow-md p-4 sm:p-6 space-y-4 sm:space-y-0 sm:space-x-6 transform transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-1"
          >
            <Image
              src="/HowToWork.png"
              alt={`Step ${index + 1}`}
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 max-w-full sm:max-w-[650px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
