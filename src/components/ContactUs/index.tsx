"use client";
import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="custom-container ">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-12 ">
        <span className="bg-[#B9FF66] text-black font-bold text-2xl sm:text-3xl px-3 py-1 rounded self-center sm:self-start w-max">
          Contact Us
        </span>
        <p className="text-base sm:text-lg text-black max-w-full sm:max-w-[500px] text-center sm:text-left">
          Connect with Us: Lets Discuss Your Digital Marketing Needs
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between bg-[#F3F3F3] rounded-lg py-6 mb-8">
        <form className="space-y-4 flex-1 max-w-full md:max-w-md w-full pl-14 pt-10">
          <div className="flex gap-4">
            <div className="flex items-center mb-3">
              <input
                type="radio"
                id="red"
                name="color"
                value="red"
                className="w-4 h-4 text-green-600 bg-[#FFFFFF]"
              />
              <label htmlFor="red" className="ml-2 text-gray-700">
                Say H
              </label>
            </div>
            <div className="flex items-center mb-3">
              <input
                type="radio"
                id="green"
                name="color"
                value="green"
                className="w-4 h-4 text-green-600 focus:ring-green-500 bg-[#FFFFFF] border-gray-300 "
              />
              <label htmlFor="green" className="ml-2 text-gray-700">
                Get a Quote
              </label>
            </div>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border bg-[#FFFFFF] border-gray-300 rounded-md shadow-sm focus:outline-none"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 bg-[#FFFFFF] border border-gray-300 rounded-md shadow-sm focus:outline-none"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full px-3 py-2 border bg-[#FFFFFF] border-gray-300 rounded-md shadow-sm focus:outline-none"
              placeholder="Your Message"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md bg-black text-white font-medium hover:bg-gray-900 transition"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-end items-center max-w-full md:max-w-[300px]">
          <Image
            src="/contact.png"
            alt="Contact visual"
            width={200}
            height={200}
            className="w-fit h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
