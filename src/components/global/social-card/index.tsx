import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

type Props = {
  platform: string;
  link: string;
  icon: JSX.Element;
};

function SocialCard({ platform, link, icon }: Props) {
  return (
    <Link href={link}>
      <div className="w-52 h-52 space-y-5 rounded-lg flex items-center justify-center flex-col bg-gray-800">
        <div>{icon}</div>
        <p>{platform}</p>
      </div>
    </Link>
  );
}

export default SocialCard;
