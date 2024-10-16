import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="">
      <div className="container mx-auto">{children}</div>
    </main>
  );
}

export default DashboardLayout;
