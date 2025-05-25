"use client";

import Link from "next/link";
import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const MenuBar = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const pathname = usePathname();

  return (
    <div className="custom-container mt-8">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center text-white">
          <Link href="/">
            <Image
              src="/navbar.png"
              alt="Nexcent Logo"
              width={120}
              height={55}
              quality={100}
            />
          </Link>
        </div>

        <div className="hidden md:flex flex-1 justify-end items-center gap-6">
          <Link
            href="/AboutUs"
            className="text-D_Grey text-[10px] md:text-[15px] group"
          >
            About us
            <p
              className={`h-[1.5px] bg-black transition-all duration-300 ${
                pathname === "/AboutUs" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></p>
          </Link>

          <Link
            href="/Services"
            className="text-D_Grey text-[10px] md:text-[15px] group"
          >
            Services
            <p
              className={`h-[1.5px] bg-black transition-all duration-300 ${
                pathname === "/Services" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></p>
          </Link>

          <Link
            href="/Usecases"
            className="text-D_Grey text-[10px] md:text-[15px] group"
          >
            Use Cases
            <p
              className={`h-[1.5px] bg-black transition-all duration-300 ${
                pathname === "/Usecases" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></p>
          </Link>

          <Link
            href="/Pricing"
            className="text-D_Grey text-[10px] md:text-[15px] group"
          >
            Pricing
            <p
              className={`h-[1.5px] bg-black transition-all duration-300 ${
                pathname === "/Pricing" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></p>
          </Link>

          <Link
            href="/Blog"
            className="text-D_Grey text-[10px] md:text-[15px] group"
          >
            Blog
            <p
              className={`h-[1.5px] bg-black transition-all duration-300 ${
                pathname === "/Blog" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></p>
          </Link>

          <Link
            href="/Quote"
            className="hidden md:block group bg-Primary px-2 py-2 rounded border border-black hover:bg-[#B9FF66] cursor-pointer"
          >
            <p className="text-[10px] md:text-[15px] text-center">
              Request a quote
            </p>
            <p
              className={`h-[1.5px] bg-black transition-all duration-300 ${
                pathname === "/Quote" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></p>
          </Link>
        </div>

        <button
          className="md:hidden text-gray-800 cursor-pointer"
          onClick={MenuBar}
        >
          <RiMenuFill size={24} />
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 cursor-pointer"
          onClick={closeMenu}
        />
      )}

      <div
        className={`lg:hidden flex flex-col text-center justify-center gap-5 py-10 px-20 fixed top-0 left-0 h-screen z-50 bg-[#B9FF66] w-80 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-center space-x-2 mb-4">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/navbar.png"
              alt="Positivus Logo"
              width={100}
              height={100}
              className="h-8 w-24"
            />
          </Link>
        </div>

        <Link
          href="/AboutUs"
          onClick={closeMenu}
          className="text-D_Grey text-[15px] font-medium group"
        >
          About us
          <p
            className={`h-[1.5px] bg-black transition-all duration-300 ${
              pathname === "/AboutUs" ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></p>
        </Link>

        <Link
          href="/Services"
          onClick={closeMenu}
          className="text-D_Grey text-[15px] font-medium group"
        >
          Services
          <p
            className={`h-[1.5px] bg-black transition-all duration-300 ${
              pathname === "/Services" ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></p>
        </Link>

        <Link
          href="/Usecases"
          onClick={closeMenu}
          className="text-D_Grey text-[15px] font-medium group"
        >
          Use Cases
          <p
            className={`h-[1.5px] bg-black transition-all duration-300 ${
              pathname === "/Usecases" ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></p>
        </Link>

        <Link
          href="/Pricing"
          onClick={closeMenu}
          className="text-D_Grey text-[15px] font-medium group"
        >
          Pricing
          <p
            className={`h-[1.5px] bg-black transition-all duration-300 ${
              pathname === "/Pricing" ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></p>
        </Link>

        <Link
          href="/Blog"
          onClick={closeMenu}
          className="text-D_Grey text-[15px] font-medium group"
        >
          Blog
          <p
            className={`h-[1.5px] bg-black transition-all duration-300 ${
              pathname === "/Blog" ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></p>
        </Link>

        <Link
          href="/Quote"
          onClick={closeMenu}
          className="text-D_Grey text-[15px] font-medium group flex flex-col items-center border border-black py-2 rounded hover:bg-white"
        >
          Request a quote
          <p
            className={`h-[1.5px] bg-black transition-all duration-300 ${
              pathname === "/Quote" ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></p>
        </Link>
      </div>
    </div>
  );
}
