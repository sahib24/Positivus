"use client";
import React from "react";

import OurInpact from "@/components/OurInpact";
import Ourjourney from "@/components/Ourjourney";
import Together from "@/components/Together";
import CoreValues from "@/components/CoreValues";
import Atpositivus from "@/components/Atpositivus";
import JoinOurTeam from "@/components/JoinOurTeam";
import Awards from "@/components/Awards";

export default function AboutUs() {
  return (
    <div>
      <Together />
      <OurInpact />
      <Ourjourney />
      <CoreValues />
      <Atpositivus />
      <Awards />
      <JoinOurTeam />
    </div>
  );
}
