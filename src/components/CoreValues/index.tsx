"use client";
import Image from "next/image";

const values = [
  {
    title: "Client Success First",
    description:
      "We are dedicated to achieving measurable results for our clients. Each strategy is tailored to meet unique business goals and drive long-term success.",
    image: null,
  },
  {
    title: "Innovation",
    description: "We constantly strive to stay ahead of industry trends.",
    image: "/core1.png",
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and partnership.",
    image: "/core2.png",
  },
  {
    title: "Transparency",
    description:
      "Open and honest communication is key to our success. We keep our clients informed every step of the way to ensure trust and clarity.",
    image: null,
  },
];

export default function CoreValues() {
  return (
    <div className="custom-container  mb-10">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-3 py-10">
        <span className="bg-[#B9FF66] text-black font-bold text-[24px] sm:text-[30px] px-2 py-1 rounded self-center sm:self-start w-max">
          Core Values
        </span>
        <p className="text-[15px] sm:text-[16px] text-black max-w-full sm:max-w-[500px] flex text-center justify-center sm:text-left">
          At the heart of everything we do are our core values:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-white rounded-[40px] border-[2px] border-b-6 border-black flex flex-col md:flex-row p-6"
          >
            <div className="flex-1 w-full md:w-1/2 flex flex-col ">
              <h3 className="text-lg sm:text-xl font-semibold mb-6 text-black">
                {value.title}
              </h3>
              <hr className="border-black mb-6 w-1/2" />
              <p className="text-black lg:text-[20px]">{value.description}</p>
            </div>
            {value.image && (
              <div className="w-fit flex justify-center md:justify-end items-center mt-4 md:mt-0">
                <Image
                  src={value.image}
                  alt={value.title}
                  width={200}
                  height={200}
                  className="w-fit h-auto"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
