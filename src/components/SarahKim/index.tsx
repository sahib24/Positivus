import Image from "next/image";

export default function MarketingComparison() {
  return (
    <div className="custom-container text-black p-4 sm:p-8 font-sans">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 relative">
          <Image
            src="/Team/6.png"
            alt="Sarah Kim"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div>
          <p className="font-semibold text-lg">Sarah Kim</p>
          <p className="text-sm text-gray-600">Content Creator</p>
        </div>
      </div>
      <hr className="border-black mb-6" />
      <div className="max-w-5xl mx-auto">
        <p className="text-lg leading-relaxed mb-6">
          In the ever-evolving digital landscape, businesses are faced with an
          important question: should they invest in pay-per-click (PPC)
          advertising or focus on organic marketing strategies? While both
          approaches have their merits, choosing the right one depends on your
          goals, budget, and timeline. Lets dive into the strengths, challenges,
          and real-world applications of PPC and organic marketing to help you
          make an informed decision.
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          The Challenge of Standing Out Online
        </h2>
        <p className="mb-4 text-gray-800">
          Every day, millions of businesses compete for visibility online,
          making it increasingly difficult to capture the attention of potential
          customers. Organic search results are highly sought after, but earning
          a top spot on Google takes time and consistent effort. Meanwhile, PPC
          ads promise instant visibility but can quickly drain your budget if
          not executed effectively.
        </p>
        <p className="italic text-gray-700 mb-6">
          For small businesses with limited resources, this dilemma can feel
          like an impossible balancing act. Do you play the long game with
          organic strategies or opt for quick wins with PPC?
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          Comparing PPC and Organic Marketing
        </h2>
        <p className="text-gray-800">
          Pay-per-click (PPC) and organic marketing each offer distinct
          advantages and challenges, making them effective for different
          business needs. PPC is designed to deliver immediate results by
          securing top placements on search engines or social media platforms,
          providing businesses with instant visibility. It allows for precise
          targeting based on factors like demographics, behavior, and location,
          offering flexibility to start small and scale as needed. However, PPC
          can become expensive quickly, particularly in competitive industries,
          and its results are short-lived since traffic stops when the campaign
          ends.
        </p>
        <p className="text-gray-800 mt-4">
          In contrast, organic marketing focuses on building a strong,
          sustainable presence through strategies like search engine
          optimization (SEO) and content creation. This approach builds trust
          and credibility over time, delivering consistent traffic without the
          need for ongoing ad spend. While the results can take longer to
          materialize and are less immediate than PPC, organic marketing
          provides long-term benefits that make it a valuable strategy for
          sustained growth.
        </p>
      </div>
    </div>
  );
}
