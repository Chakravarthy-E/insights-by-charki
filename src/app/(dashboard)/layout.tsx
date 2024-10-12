import Navbar from "@/components/global/navbar";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}

export default DashboardLayout;
