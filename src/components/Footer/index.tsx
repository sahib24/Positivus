import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="custom-container mt-10">
      <footer className="bg-[#191A23] text-white px-6 md:px-20 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Image
              src="/footer.png"
              alt="Nexcent Logo"
              width={100}
              height={100}
              className="h-6 w-30"
            />
          </div>

          <div className="flex flex-col md:flex-row md:justify-center gap-3 md:gap-6 text-sm">
            <Link href="#" className="underline">
              About us
            </Link>
            <Link href="#" className="underline">
              Services
            </Link>
            <Link href="#" className="underline">
              Use Cases
            </Link>
            <Link href="#" className="underline">
              Pricing
            </Link>
            <Link href="#" className="underline">
              Blog
            </Link>
          </div>
        </div>

        <div className=" p-4 rounded-md">
          <div>
            <span className="inline-block bg-[#B9FF66] text-black text-sm font-semibold px-3 py-1 rounded mb-2">
              Contact us:
            </span>
            <p className="text-sm">Email: info@positivus.com</p>
            <p className="text-sm">Phone: 555-567-8801</p>
            <p className="text-sm">
              Address: 1234 Main St <br />
              Moonstone City, Stardust State 12345
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-2 bg-[#292A32]">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#B9FF66] text-black font-semibold px-4 py-2 rounded hover:bg-lime-300 transition"
            >
              Subscribe to news
            </button>
          </form>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="#" className="hover:underline mt-2 md:mt-0">
            Privacy Policy
          </a>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#">
              <i className="fab fa-linkedin-in text-white"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook text-white"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter text-white"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
