"use client";

import Image from "next/image";

export default function JoindOurTeam() {
  return (
    <div className="custom-container">
      <div className="flex flex-col md:flex-row items-center justify-between py-6 bg-[#B9FF66] px-14 rounded-[40px] border-[2px] border-b-6">
        <div className=" order-2 md:order-1 text-center md:text-left md:w-1/2">
          <h2 className="text-[17px] md:text-[26px] font-bold mb-3">
            Join Our Team
          </h2>
          <p className="text-gray-700 mb-4 max-w-md mx-auto md:mx-0 text-[14px] md:text-[17px]">
            At Positivus, Positivus thrive on innovation and collaboration.
            Positivus are always looking for passionate individuals to join the
            team and help businesses grow. Ready to make an impact?
          </p>

          <button className="bg-black text-white text-[14px] md:text-[20px] font-medium group md:mt-6 mt-3 items-center border hover:text-black  py-2 px-3 rounded relative overflow-hidden cursor-pointer">
            <span
              className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0
     transition-transform duration-600 ease-out z-0"
            ></span>
            <p className="relative z-10 text-center"> Explore Careers</p>
          </button>
        </div>

        <div className="order-1 md:order-2 mb-6 md:mb-0  flex justify-center w-full md:w-1/2">
          <Image
            src="/join.png"
            alt="join our team"
            width={400}
            height={400}
            className="h-auto max-w-[80%] md:max-w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}
