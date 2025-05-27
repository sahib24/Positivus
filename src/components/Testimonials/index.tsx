"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const slides = [
  {
    description:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
  {
    description:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
  {
    description:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
  {
    description:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
];

export default function Testimonials() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="custom-container py-12">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-12">
        <span className="bg-[#B9FF66] text-black font-bold text-2xl sm:text-3xl px-3 py-1 rounded self-center sm:self-start w-max">
          Testimonials
        </span>
        <p className="text-base sm:text-lg text-black max-w-full sm:max-w-[500px] text-center sm:text-left">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>

      <div className="bg-black py-12 rounded-4xl relative">
        {isClient ? (
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1.5}
            centeredSlides={true}
            loop={true}
            speed={1000}
            autoplay={{ delay: 3000 }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              renderBullet: (_index, className) =>
                `<span class="${className} custom-bullet"></span>`,
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            className="testimonial"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center text-[17px] mb-16 border border-[#B9FF66] rounded-3xl bg-black py-6">
                  <div className="text-center max-w-[500px] mx-auto px-4">
                    <p className="text-base sm:text-lg text-white">
                      {slide.description}
                    </p>
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-[17px] text-[#B9FF66]">{slide.name}</h3>
                    <p className="text-gray-300">{slide.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-white text-center py-12">
            Loading testimonials...
          </p>
        )}

        <div className="mt-[-3rem] flex justify-center z-10 relative">
          <div className="flex items-center gap-4">
            <div className="custom-prev arrow-button text-white cursor-pointer text-xl">
              <FaArrowLeft />
            </div>
            <div className="custom-pagination flex gap-2" />
            <div className="custom-next arrow-button text-white cursor-pointer text-xl">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
