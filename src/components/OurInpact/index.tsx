"use client";

export default function OurImpact() {
  return (
    <div className="custom-container sm:px-6 lg:px-8 mb-10">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-3 py-14">
        <span className="bg-[#B9FF66] text-black font-bold text-[24px] sm:text-[30px] px-2 py-1 rounded self-center sm:self-start w-max">
          Our Impact in Numbers
        </span>

        <p className="text-[15px] sm:text-[16px] text-black max-w-full sm:max-w-[500px] flex text-center justify-center sm:text-left">
          A snapshot of the milestones and achievements that drive our success
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 text-center py-6 gap-y-6">
        <div>
          <div className="border-t-2 border-r-2 border-l-2 rounded-tl-2xl rounded-tr-2xl h-8"></div>
          <h3 className="text-3xl font-bold">8+</h3>
          <p className="text-gray-600">Years of Experience</p>
        </div>

        <div>
          <div className="border-t-2 border-r-2 border-l-2 rounded-tl-2xl rounded-tr-2xl h-8"></div>
          <h3 className="text-3xl font-bold">50+</h3>
          <p className="text-gray-600">Experts</p>
        </div>

        <div>
          <div className="border-t-2 border-r-2 border-l-2 rounded-tl-2xl rounded-tr-2xl h-8"></div>
          <h3 className="text-3xl font-bold">100+</h3>
          <p className="text-gray-600">Successful Campaigns</p>
        </div>

        <div>
          <div className="border-t-2 border-r-2 border-l-2 rounded-tl-2xl rounded-tr-2xl h-8"></div>
          <h3 className="text-3xl font-bold">20+</h3>
          <p className="text-gray-600">Industry Awards</p>
        </div>

        <div className="col-span-2 md:col-span-1">
          <div className="border-t-2 border-l-2 border-r-2 rounded-tl-2xl rounded-tr-2xl h-8"></div>
          <h3 className="text-3xl font-bold">500%</h3>
          <p className="text-gray-600">ROI for our clients</p>
        </div>
      </div>
    </div>
  );
}
