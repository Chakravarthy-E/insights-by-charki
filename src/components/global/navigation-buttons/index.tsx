"use client";
import { Button } from "@/components/ui/button";
import { StepBack, StepForward } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

function NavigationButtons() {
  const router = useRouter();
  return (
    <div className="w-full flex items-center justify-between">
      <Button onClick={() => router.back()}>
        <StepBack />
      </Button>
      <Button onClick={() => router.forward()}>
        <StepForward />
      </Button>
    </div>
  );
}

export default NavigationButtons;
