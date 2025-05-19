"use client";

import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "John Smith",
    title: "CEO and Founder",
    image: "/Team/1.png",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.",
  },
  {
    name: "Jane Doe",
    title: "Director of Operations",
    image: "/Team/2.png",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills.",
  },
  {
    name: "Michael Brown",
    title: "Senior SEO Specialist",
    image: "/Team/3.png",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.",
  },
  {
    name: "Emily Johnson",
    title: "PPC Manager",
    image: "/Team/4.png",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.",
  },
  {
    name: "Brian Williams",
    title: "Social Media Specialist",
    image: "/Team/5.png",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement.",
  },
  {
    name: "Sarah Kim",
    title: "Content Creator",
    image: "/Team/6.png",
    description:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries.",
  },
];

export default function TeamSection() {
  return (
    <div className="custom-container py-12">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-3 py-14">
        <span className="bg-[#B9FF66] text-black font-bold text-[24px] sm:text-[30px] px-2 py-1 rounded self-center sm:self-start w-max">
          Team
        </span>

        <p className="text-[15px] sm:text-[16px] text-black max-w-full sm:max-w-[500px] flex text-center justify-center sm:text-left">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white border rounded-3xl p-4 shadow-md hover:shadow-lg transition relative"
          >
            <div className="flex items-start space-x-4 pt-2">
              <div>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="w-fit h-auto"
                />
              </div>

              <div className="flex-1 text-left mt-10">
                <h3 className="font-semibold text-lg leading-tight">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.title}</p>
              </div>

              <Link href="#" className="absolute top-3 right-3">
                <Image
                  src="/Team/icon.png"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </Link>
            </div>

            <div className="mt-4">
              <hr className="my-2 border-black" />
              <p className="text-sm text-gray-700">{member.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-10">
        <button className="bg-black text-white px-6 py-3 rounded-xl text-[13px] md:text-[18px] cursor-pointer hover:bg-gray-500">
          See all team
        </button>
      </div>
    </div>
  );
}
