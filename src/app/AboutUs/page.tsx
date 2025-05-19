"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import OurInpact from "@/components/OurInpact";
import Ourjourney from "@/components/Ourjourney";
import Together from "@/components/Together";
import CoreValues from "@/components/CoreValues";
import Atpositivus from "@/components/Atpositivus";
// import OurWorking from "@/components/OurWorking";
// import Team from "@/components/Team";
// import Testimonials from "@/components/Testimonials";
// import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function AboutUs() {
  return (
    <div>
      <Navbar />
      <Together />
      <OurInpact />
      <Ourjourney />
      <CoreValues />
      <Atpositivus />
      <Footer />
    </div>
  );
}
