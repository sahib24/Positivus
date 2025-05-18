"use client";
import Link from "next/link";
import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const MenuBar = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="custom-container mt-8">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center text-white">
          <Image
            src="/navbar.png"
            alt="Nexcent Logo"
            width={120}
            height={55}
            quality={100}
          />
        </div>

        <div className="hidden md:flex flex-1 justify-end items-center gap-6">
          <Link
            href="#"
            className="text-D_Grey text-[10px] md:text-[15px] cursor-pointer group"
          >
            About us
            <p className="w-0 h-[1.5px] bg-black group-hover:w-full transition-all duration-300"></p>
          </Link>
          <Link
            href="#"
            className="text-D_Grey text-[10px] md:text-[15px] group"
          >
            Services
            <p className="w-0 h-[1.5px] bg-black group-hover:w-full transition-all duration-300"></p>
          </Link>
          <Link
            href="#"
            className="text-D_Grey text-[10px] md:text-[15px] group"
          >
            Use Cases
            <p className="w-0 h-[1.5px] bg-black group-hover:w-full transition-all duration-300"></p>
          </Link>
          <Link
            href="#"
            className="text-D_Grey text-[10px] md:text-[15px] group"
          >
            Pricing
            <p className="w-0 h-[1.5px] bg-black group-hover:w-full transition-all duration-300"></p>
          </Link>
          <Link
            href="#"
            className="text-D_Grey text-[10px] md:text-[15px] group"
          >
            Pricing
            <p className="w-0 h-[1.5px] bg-black group-hover:w-full transition-all duration-300"></p>
          </Link>

          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-Primary px-2 py-2 rounded border border-black hover:bg-[#B9FF66] cursor-pointer">
              <p className="flex items-center   text-[10px] md:text-[15px]">
                Request a quote
              </p>
            </button>
          </div>
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
          <Image
            src="/navbar.png"
            alt="Nexcent Logo"
            width={100}
            height={100}
            className="h-8 w-24"
          />
        </div>

        <Link href="/" onClick={closeMenu}>
          <button className="text-D_Grey text-[15px] cursor-pointer group">
            About us
            <p className="w-0 h-[1.5px] bg-black group-hover:w-full transition-all duration-300"></p>
          </button>
        </Link>
        <Link href="/aboutus" onClick={closeMenu}>
          <button className="text-D_Grey text-[15px] cursor-pointer group">
            Services
            <p className="w-0 h-[1.5px] bg-black group-hover:w-full transition-all duration-300"></p>
          </button>
        </Link>
        <Link href="/services" onClick={closeMenu}>
          <button className="text-D_Grey text-[15px] cursor-pointer group">
            Use Cases
            <p className="w-0 h-[1.5px] bg-black group-hover:w-full transition-all duration-300"></p>
          </button>
        </Link>
        <Link href="/gallery" onClick={closeMenu}>
          <button className="text-D_Grey text-[15px] cursor-pointer group">
            Pricing
            <p className="w-0 h-[1.5px] bg-black group-hover:w-full transition-all duration-300"></p>
          </button>
        </Link>
        <Link href="/enquiry" onClick={closeMenu}>
          <button className="text-D_Grey text-[15px] cursor-pointer group">
            Blog
            <p className="w-0 h-[1.5px] bg-black group-hover:w-full transition-all duration-300"></p>
          </button>
        </Link>

        <button className="flex justify-center items-center py-2 rounded border border-black cursor-pointer hover:bg-white text-[15px]">
          Request a quote
        </button>
      </div>
    </div>
  );
}
