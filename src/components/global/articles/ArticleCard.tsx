import React from "react";
import { ArticleTypes } from ".";
import Link from "next/link";
import { format } from "date-fns";

interface ArticleProps {
  article: ArticleTypes;
}

function ArticleCard({ article }: ArticleProps) {
  return (
    <Link href={`/collections/${article.category}/${article.slug}`}>
      <div
        key={article.slug}
        className=" opacity-80 hover:opacity-100 transition-opacity duration-300 group bg-gray-800 px-4 py-2 relative overflow-hidden block lg:h-60 md:h-60"
      >
        <p
          className="text-lg sm:text-xl md:text-2xl font-semibold font-outfit group-hover:text-blue-500"
          id="title"
        >
          {article.title}{" "}
        </p>
        <p className="text-sm sm:text-base text-muted-foreground font-raleway lg:line-clamp-4">
          {article.description}
        </p>
        <p className="text-sm font-outfit text-foreground">
          {article?.createdAt
            ? format(new Date(article?.createdAt), "dd-MMMM-yyyy")
            : "N/A"}
        </p>
      </div>
    </Link>
  );
}

export default ArticleCard;
