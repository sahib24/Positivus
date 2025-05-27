"use client";
import Image from "next/image";

export default function OurOther() {
  return (
    <div className="custom-container  sm:px-6 lg:px-8 mb-10">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4  sm:gap-3 py-10">
        <span className="bg-[#B9FF66] text-black font-bold text-[24px] sm:text-[30px] px-2 py-1 rounded self-center sm:self-start w-max">
          Our Other Services
        </span>

        <p className="text-[15px] sm:text-[16px] text-black max-w-full sm:max-w-[500px] flex text-center justify-center sm:text-left">
          At a digital marketing agency, a range of services are offered to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="bg-[#F3F3F3] p-5 shadow-md flex flex-col justify-between py-6 rounded-[40px] border-[2px] border-b-6 ">
          <div className="flex flex-col md:flex-row items-center justify-between ">
            <div className="text-center md:text-left space-y-24">
              <h1 className="text-[24px] leading-tight font-semibold text-D_Grey bg-[#B9FF66] px-2">
                <span className="block">Search engine</span>
                <span className="block">optimization</span>
              </h1>

              <div className="flex items-center gap-2 justify-center sm:justify-start ">
                <Image
                  src="/serviceIcons/Icon.png"
                  alt="Clubs icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <div className="flex items-center justify-between  ">
                  <button className=" font-medium flex items-center cursor-pointer">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 ">
              <Image
                src="/services/1.png"
                alt="Business growth illustration"
                width={500}
                height={500}
                className="h-auto w-fit"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#F3F3F3] p-5  shadow-md flex flex-col justify-between py-6 rounded-[40px] border-[2px] border-b-6">
          <div className="flex flex-col md:flex-row items-center justify-between ">
            <div className=" text-center md:text-left space-y-24">
              <h1 className="text-[24px] leading-tight  font-semibold text-D_Grey px-2 bg-white ">
                <span className="block">Pay-per-click</span>
                <span className="block">advertising</span>
              </h1>

              <div className="flex items-center gap-2 justify-center sm:justify-start ">
                <Image
                  src="/serviceIcons/Icon.png"
                  alt="Clubs icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <div className="flex items-center justify-between  ">
                  <button className=" font-medium flex items-center cursor-pointer">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 ">
              <Image
                src="/services/2.png"
                alt="Business growth illustration"
                width={500}
                height={500}
                className="h-auto w-fit"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#F3F3F3] p-5  shadow-md flex flex-col justify-between py-6 rounded-[40px] border-[2px] border-b-6">
          <div className="flex flex-col md:flex-row items-center justify-between ">
            <div className=" text-center md:text-left space-y-24">
              <h1 className="font-semibold text-D_Grey bg-white px-2 text-black  text-[24px] leading-tight ">
                <span className="block">Social Media</span>
                <span className="block">Marketing</span>
              </h1>

              <div className="flex items-center gap-2 justify-center sm:justify-start ">
                <Image
                  src="/serviceIcons/Icon.png"
                  alt="Clubs icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <div className="flex items-center text-black justify-between  ">
                  <button className=" font-medium flex items-center cursor-pointer">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 ">
              <Image
                src="/services/3.png"
                alt="Business growth illustration"
                width={500}
                height={500}
                className="h-auto w-fit"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#F3F3F3]  p-5 rounded-[40px] border-[2px] border-b-6 shadow-md flex flex-col justify-between py-6">
          <div className="flex flex-col md:flex-row items-center justify-between ">
            <div className=" text-center md:text-left space-y-24">
              <h1 className="font-semibold text-D_Grey bg-[#B9FF66] px-2  text-[24px] leading-tight ">
                <span className="block">Email</span>
                <span className="block">Marketing</span>
              </h1>

              <div className="flex items-center gap-2 justify-center sm:justify-start ">
                <Image
                  src="/serviceIcons/Icon.png"
                  alt="Clubs icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <div className="flex items-center justify-between  ">
                  <button className=" font-medium flex items-center cursor-pointer">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 ">
              <Image
                src="/services/4.png"
                alt="Business growth illustration"
                width={500}
                height={500}
                className="h-auto w-fit"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#F3F3F3] p-5 rounded-[40px] border-[2px] border-b-6 shadow-md flex flex-col justify-between py-6">
          <div className="flex flex-col md:flex-row items-center justify-between ">
            <div className=" text-center md:text-left space-y-24">
              <h1 className="font-semibold text-D_Grey px-2 bg-white text-[24px] leading-tight ">
                <span className="block">Content</span>
                <span className="block">Creation</span>
              </h1>

              <div className="flex items-center gap-2 justify-center sm:justify-start ">
                <Image
                  src="/serviceIcons/Icon.png"
                  alt="Clubs icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <div className="flex items-center justify-between  ">
                  <button className=" font-medium flex items-center cursor-pointer">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 ">
              <Image
                src="/services/5.png"
                alt="Business growth illustration"
                width={500}
                height={500}
                className="h-auto w-fit"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#F3F3F3] p-5 rounded-[40px] border-[2px] border-b-6 shadow-md flex flex-col justify-between py-6">
          <div className="flex flex-col md:flex-row items-center justify-between ">
            <div className=" text-center md:text-left space-y-24">
              <h1 className="font-semibold text-D_Grey px-2 bg-[#B9FF66]  text-[24px] leading-tight text-black">
                <span className="block">Analytics and</span>
                <span className="block">Tracking</span>
              </h1>

              <div className="flex items-center gap-2 justify-center sm:justify-start ">
                <Image
                  src="/serviceIcons/Icon.png"
                  alt="Clubs icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <div className="flex items-center text-black justify-between  ">
                  <button className=" font-medium flex items-center cursor-pointer">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <Image
                src="/services/6.png"
                alt="Business growth illustration"
                width={500}
                height={500}
                className="h-auto w-fit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
