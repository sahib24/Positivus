"use client";
import React from "react";

import Navigating from "@/components/Navigating";
import Autoicons from "@/components/Autoicons";
import Services from "@/components/Services";
import LetsMake from "@/components/LetsMake";
import CaseStudies from "@/components/CaseStudies";
import OurWorking from "@/components/OurWorking";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <div>
      <Navigating />
      <Autoicons />
      <Services />
      <LetsMake />
      <CaseStudies />
      <OurWorking />
      <Team />
      <Testimonials />
      <ContactUs />
    </div>
  );
}
