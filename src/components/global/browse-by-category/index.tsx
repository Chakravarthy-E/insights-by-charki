import { Button } from "@/components/ui/button";
import React from "react";

function BrowseByCategory() {
  return (
    <div className="my-4">
      <h1 className="uppercase text-3xl tracking-wider font-semibold text-title-color mb-4 font-outfit">
        Browse By Category
      </h1>
      <div className="flex flex-wrap gap-2 py-4">
        <Button variant={"outline"}>HTML</Button>
        <Button variant={"outline"}>CSS</Button>
        <Button variant={"outline"}>JavaScript</Button>
        <Button variant={"outline"}>React</Button>
      </div>
    </div>
  );
}

export default BrowseByCategory;
