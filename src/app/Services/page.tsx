"use client";
import React from "react";
import Expert from "@/components/Expert";
import Back from "@/components/Back";
import HowWeWork from "@/components/HowWeWork";
import CaseStudies from "@/components/CaseStudies";
import OurOther from "@/components/OurOther";
import Ready from "@/components/Ready";
export default function Home() {
  return (
    <div>
      <Expert />
      <Back />
      <HowWeWork />
      <CaseStudies />
      <OurOther />
      <Ready />
    </div>
  );
}
