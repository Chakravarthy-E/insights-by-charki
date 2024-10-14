import React from "react";

function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto py-10">{children}</div>
    </div>
  );
}

export default AboutLayout;
