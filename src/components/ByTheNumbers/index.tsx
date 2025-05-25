export default function StatsSection() {
  return (
    <div className="custom-container py-6 px-4 md:px-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
        By the Numbers: Facts About PPC and Organic Marketing
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4 col-span-1   shadow-sm p-6 rounded-xl border-[2px] border-b-4">
          <p className="text-gray-500 text-sm">Businesses earn an average of</p>
          <p className="text-2xl font-bold text-gray-900 my-1">
            $2 for every $1 spent
          </p>
          <p className="text-sm text-gray-600">on PPC advertising.</p>
        </div>

        <div className="md:col-span-8 col-span-1 bg-[#B9FF66] rounded-xl p-6">
          <p className="text-xl font-bold text-black mb-1 ">41% of clicks</p>
          <p className="text-md text-black w-[480px]">
            on search engines go to the top three organic results, showing the
            importance of ranking highly.
          </p>
        </div>

        <div className="md:col-span-8 col-span-1 bg-[#F3F3F3] rounded-xl p-6">
          <p className="text-sm text-black ">
            Content marketing costs{"  "}
            <span className="text-[24px] font-bold">
              62% less than paid ads
            </span>
          </p>

          <p className="text-sm text-black">
            but generates{" "}
            <span className="font-bold text-[24px]">3x as many leads</span>
          </p>
        </div>

        <div className="md:col-span-4 col-span-1 bg-black rounded-xl p-6">
          <p className="text-sm text-white">Organic search drives</p>
          <p className="text-2xl font-bold my-1 text-white">
            <span className="text-[#B9FF66]">53%</span> of all website traffic,
          </p>

          <p className="text-sm text-white">
            making it the largest single source of traffic.
          </p>
        </div>
      </div>
    </div>
  );
}
