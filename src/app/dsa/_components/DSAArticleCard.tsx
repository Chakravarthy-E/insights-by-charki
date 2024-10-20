import React from "react";
import Link from "next/link";
import { format } from "date-fns";

export interface DsaArticleTypes {
  article: {
    _id: string;
    title: string;
    content: string;
    likes: number;
    category: string;
    published: boolean;
    isFeatured: boolean;
    slug: string;
    createdAt: string;
  };
}

function DSAArticleCard({ article }: DsaArticleTypes) {
  return (
    <Link href={`/dsa/${article.category}/${article.slug}`}>
      <div
        key={article.slug}
        title={article.title}
        className=" opacity-80 hover:opacity-100  group bg-gray-800 px-6 py-3 relative overflow-hidden block  rounded-tl-xl rounded-br-xl border hover:border-blue-500 transition-all duration-300 ease-in-out"
      >
        <p
          className="text-lg sm:text-xl md:text-2xl font-semibold font-noto lg:line-clamp-2 "
          id="title"
        >
          {article.title}
        </p>
        <p className="text-sm text-muted-foreground font-raleway capitalize">
          {article.category}
        </p>
        <p className="text-sm font-noto text-foreground my-2">
          {article?.createdAt
            ? format(new Date(article?.createdAt), "dd-MMMM-yyyy")
            : "N/A"}
        </p>
      </div>
    </Link>
  );
}

export default DSAArticleCard;
