"use client";
import Image from "next/image";
import Link from "next/link";

export default function OutJourney() {
  return (
    <div className="relative ">
      <div className="custom-container sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center  gap-4 sm:gap-3 py-14">
          <span className="bg-[#B9FF66] text-black font-bold text-[24px] sm:text-[30px] px-2 py-1 rounded self-center sm:self-start w-max">
            Our journey
          </span>

          <p className="text-[15px] sm:text-[16px] text-black max-w-full sm:max-w-[500px] flex text-center justify-center sm:text-left">
            From humble beginnings to industry leaders, discover how Positivus
            has evolved to drive success for businesses worldwide.
          </p>
        </div>

        <div className="max-w-6xl mx-auto py-16 px-4 space-y-16">
          <Link href="#" className="absolute top-150 right-0 hidden lg:block ">
            <Image src="/Aright.jpeg" alt="LinkedIn" width={250} height={250} />
          </Link>
          <Link href="#" className="absolute top-100 left-0 hidden lg:block ">
            <Image src="/Aleft.jpeg" alt="LinkedIn" width={250} height={250} />
          </Link>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-1/2">
              <div className="flex items-start gap-4">
                <div className="w-20 text-right">
                  <h3 className="text-xl font-bold text-black mt-2">2019</h3>
                </div>
                <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-md w-full">
                  <h4 className="text-xl font-semibold">The Beginning</h4>
                  <p className="text-sm text-gray-300 mt-2">
                    Positivus was founded to help businesses navigate the
                    digital world and achieve online success.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2"></div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="hidden md:block md:w-1/2"></div>
            <div className="md:w-1/2">
              <div className="flex items-start gap-4">
                <div className="w-20 text-right">
                  <h3 className="text-xl font-bold text-black mt-2">2021</h3>
                </div>
                <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-md w-full">
                  <h4 className="text-xl font-semibold">
                    Industry Recognition
                  </h4>
                  <p className="text-sm text-gray-300 mt-2">
                    Positivus was named among the top 50 global digital
                    agencies, affirming its leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-1/2">
              <div className="flex items-start gap-4">
                <div className="w-20 text-right">
                  <h3 className="text-xl font-bold text-black mt-2">2023</h3>
                </div>
                <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-md w-full">
                  <h4 className="text-xl font-semibold">
                    Innovation and Growth
                  </h4>
                  <p className="text-sm text-gray-300 mt-2">
                    With over 50 experts, Positivus continues to deliver
                    cutting-edge solutions to help businesses thrive.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2"></div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="hidden md:block md:w-1/2"></div>
            <div className="md:w-1/2">
              <div className="flex items-start gap-4">
                <div className="w-20 text-right">
                  <h3 className="text-xl font-bold text-black mt-2">2024</h3>
                </div>
                <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-md w-full">
                  <h4 className="text-xl font-semibold">Leading the Future</h4>
                  <p className="text-sm text-gray-300 mt-2">
                    In 2024, Positivus is pioneering the use of AI and
                    automation to deliver more personalized, data-driven
                    strategies and set new standards in digital marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
