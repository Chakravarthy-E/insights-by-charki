import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import { ArticleTypes } from "@/app/(dashboard)/page";

interface ArticleProps {
  article: ArticleTypes;
}

function ArticleCard({ article }: ArticleProps) {
  return (
    <Link href={`/${article.category}/${article.slug}`}>
      <div
        key={article.slug}
        className=" opacity-80 hover:opacity-100 transition-opacity duration-300 group bg-gray-800 px-6 py-3 relative overflow-hidden block lg:h-60 md:h-60 rounded-tl-3xl rounded-br-3xl border hover:border-blue-500"
      >
        <p
          className="text-lg sm:text-xl md:text-2xl font-semibold font-noto "
          id="title"
        >
          {article.title}{" "}
        </p>
        <p className="text-sm sm:text-base text-muted-foreground font-noto lg:line-clamp-4">
          {article.description}
        </p>
        <p className="text-sm font-noto text-foreground">
          {article?.createdAt
            ? format(new Date(article?.createdAt), "dd-MMMM-yyyy")
            : "N/A"}
        </p>
      </div>
    </Link>
  );
}

export default ArticleCard;
