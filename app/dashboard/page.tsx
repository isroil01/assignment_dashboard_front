"use client";
import EmissionsComparisonChart from "@/components/dasgboard/emission-chart";
import OverviewCard from "@/components/dasgboard/overview-card";
import React from "react";

export default function Page() {
  return (
    <div>
      <OverviewCard />
      <div>
        <EmissionsComparisonChart />
      </div>
    </div>
  );
}
