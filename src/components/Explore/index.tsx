"use client";
import Image from "next/image";
export default function Featured() {
  return (
    <div className="custom-container">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-3 py-10">
        <span className="bg-[#B9FF66] text-black font-bold text-[24px] sm:text-[30px] px-2 py-1 rounded self-center sm:self-start w-max">
          Explore More Insights
        </span>
        <p className="text-[15px] sm:text-[16px] text-black max-w-full sm:max-w-[500px] text-center sm:text-left">
          Discover expert tips, strategies, and stories to keep you ahead in the
          digital landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0  p-6 rounded-[40px] border-[2px] border-b-6 ">
        <div className="border-r">
          <div className="p-6">
            <h3 className="text-lg font-semibold leading-none">E-commerce</h3>
            <h3 className="text-lg font-semibold mb-6">Fashion Brand</h3>
            <p className="text-gray-600 text-sm mb-6">
              We implemented a tailored SEO strategy that boosted organic search
              rankings, leading to a 150% increase in website traffic and a 50%
              rise in online sales within six months.
            </p>
            <div className="flex items-center gap-2 justify-center sm:justify-start ">
              <Image
                src="/serviceIcons/Icon.png"
                alt="Clubs icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="flex items-center justify-between  ">
                <button className=" font-medium flex items-center">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-r">
          <div className="p-6">
            <h3 className="text-lg font-semibold leading-none">
              Local Restaurant
            </h3>
            <h3 className="text-lg font-semibold mb-6"> Chain</h3>
            <p className="text-gray-600 text-sm mb-6">
              By optimizing local SEO and enhancing Google My Business profiles,
              we increased visibility, driving a 300% boost in online
              reservations and foot traffic.
            </p>
            <div className="flex items-center gap-2 justify-center sm:justify-start ">
              <Image
                src="/serviceIcons/Icon.png"
                alt="Clubs icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="flex items-center justify-between  ">
                <button className=" font-medium flex items-center">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-6">Healthcare Provider</h3>
            <p className="text-gray-600 text-sm mb-6">
              Through content optimization and targeted keyword strategy, we
              helped a healthcare provider rank on the first page for critical
              services, resulting in a 180% increase in inquiries and patient
              bookings.
            </p>
            <div className="flex items-center gap-2 justify-center sm:justify-start ">
              <Image
                src="/serviceIcons/Icon.png"
                alt="Clubs icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="flex items-center justify-between  ">
                <button className=" font-medium flex items-center">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-r">
          <div className="p-6">
            <h3 className="text-lg font-semibold leading-none">E-commerce</h3>
            <h3 className="text-lg font-semibold mb-6">Fashion Brand</h3>
            <p className="text-gray-600 text-sm mb-6">
              We implemented a tailored SEO strategy that boosted organic search
              rankings, leading to a 150% increase in website traffic and a 50%
              rise in online sales within six months.
            </p>
            <div className="flex items-center gap-2 justify-center sm:justify-start ">
              <Image
                src="/serviceIcons/Icon.png"
                alt="Clubs icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="flex items-center justify-between  ">
                <button className=" font-medium flex items-center">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-r">
          <div className="p-6">
            <h3 className="text-lg font-semibold leading-none">
              Local Restaurant
            </h3>
            <h3 className="text-lg font-semibold mb-6"> Chain</h3>
            <p className="text-gray-600 text-sm mb-6">
              By optimizing local SEO and enhancing Google My Business profiles,
              we increased visibility, driving a 300% boost in online
              reservations and foot traffic.
            </p>
            <div className="flex items-center gap-2 justify-center sm:justify-start ">
              <Image
                src="/serviceIcons/Icon.png"
                alt="Clubs icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="flex items-center justify-between  ">
                <button className=" font-medium flex items-center">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-6">Healthcare Provider</h3>
            <p className="text-gray-600 text-sm mb-6">
              Through content optimization and targeted keyword strategy, we
              helped a healthcare provider rank on the first page for critical
              services, resulting in a 180% increase in inquiries and patient
              bookings.
            </p>
            <div className="flex items-center gap-2 justify-center sm:justify-start ">
              <Image
                src="/serviceIcons/Icon.png"
                alt="Clubs icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="flex items-center justify-between  ">
                <button className=" font-medium flex items-center">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
