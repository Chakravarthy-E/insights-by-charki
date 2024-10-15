import NavigationButtons from "@/components/global/navigation-buttons";
import React from "react";

function CollectionsLayout({ children }: { children: React.ReactNode }) {
  return <div className="py-10">{children}</div>;
}

export default CollectionsLayout;
