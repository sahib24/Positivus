"use client";
import React from "react";
import Proven from "@/components/Proven";
import Featured from "@/components/Featured";
import AllSuccess from "@/components/AllSuccess";
import Testimonials from "@/components/Testimonials";
import JoinOurTeam from "@/components/JoinOurTeam";

export default function Home() {
  return (
    <div>
      <Proven />
      <Featured />
      <AllSuccess />
      <Testimonials />
      <JoinOurTeam />
    </div>
  );
}
