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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-0  p-6 rounded-[40px] border-[2px] border-b-6 ">
        <div className=" sm:border-r border-b sm:border-b-0">
          <div className="p-6">
            <h3 className="text-lg font-semibold leading-none">
              10 SEO Myths You
            </h3>
            <p className="text-lg font-semibold ">Need to Stop</p>
            <p className="text-lg font-semibold mb-6"> Believing</p>

            <p className="text-gray-600 text-sm mb-6">
              Think keyword stuffing and meta tags are the secret to ranking?
              Discover the truth behind common SEO misconceptions and learn what
              really drives results.
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
                <button className=" font-medium flex items-center cursor-pointer">
                  Read article
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" sm:border-r border-b sm:border-b-0">
          <div className="p-6">
            <h3 className="text-lg font-semibold leading-none">
              Maximizing ROI
            </h3>
            <p className="text-lg font-semibold "> with Social Media</p>
            <p className="text-lg font-semibold mb-6"> Advertising</p>
            <p className="text-gray-600 text-sm mb-6">
              Social media ads are more than just boosted posts. Explore proven
              strategies for crafting campaigns that engage audiences and
              deliver measurable returns. Read article
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
                <button className=" font-medium flex items-center cursor-pointer">
                  Read article
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="p-6">
            <h3 className="text-lg font-semibold">How Content</h3>
            <p className="text-lg font-semibold ">Marketing Fuels</p>
            <p className="text-lg font-semibold mb-6">Long-Term Growth</p>
            <p className="text-gray-600 text-sm mb-6">
              Content isnt just king-its the foundation of sustainable business
              growth. Find out how blogs, videos, and more can build trust and
              drive conversions. Read article
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
                <button className=" font-medium flex items-center cursor-pointer">
                  Read article
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" sm:border-t  border-t sm:border-r">
          <div className="p-6">
            <h3 className="text-lg font-semibold">The Art of A/B </h3>
            <p className="text-lg font-semibold ">Testing: Perfecting </p>
            <p className="text-lg font-semibold mb-6">Your Campaigns</p>
            <p className="text-gray-600 text-sm mb-6">
              From headlines to call-to- actions, small tweaks can make a big
              difference. Learn how to use A/B testing to refine your marketing
              strategies.
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
                <button className=" font-medium flex items-center cursor-pointer">
                  Read article
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" sm:border-r sm:border-t border-t">
          <div className="p-6">
            <h3 className="text-lg font-semibold">Understanding</h3>
            <p className="text-lg font-semibold "> Googles Latest </p>
            <p className="text-lg font-semibold mb-6">Algorithm Update</p>
            <p className="text-gray-600 text-sm mb-6">
              Search rankings change constantly-stay ahead by learning about the
              latest Google update and its impact on your SEO strategy
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
                <button className=" font-medium flex items-center cursor-pointer">
                  Read article
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" sm:border-t border-t">
          <div className="p-6">
            <h3 className="text-lg font-semibold">5 Ways Al is</h3>
            <p className="text-lg font-semibold "> Changing Digital </p>
            <p className="text-lg font-semibold mb-6">Marketing</p>
            <p className="text-gray-600 text-sm mb-6">
              Through content optimization and targeted keyword strategy, we
              helped a healthcare provider rank on the first page for critical
              services.
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
                <button className=" font-medium flex items-center cursor-pointer">
                  Read article
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
