import React from "react";
import { ArticleTypes } from ".";
import Link from "next/link";
import { format } from "date-fns";

interface ArticleProps {
  article: ArticleTypes;
}

function ArticleCard({ article }: ArticleProps) {
  return (
    <Link href={`/${article.category}/${article.slug}`}>
      <div
        key={article.slug}
        className=" opacity-80 hover:opacity-100 transition-opacity duration-300 group "
      >
        <p
          className="text-lg sm:text-xl md:text-2xl font-semibold font-outfit group-hover:text-blue-500"
          id="title"
        >
          {article.title}{" "}
          <span className="text-sm font-outfit text-muted-foreground">
            {article?.createdAt
              ? format(new Date(article?.createdAt), "dd-MMMM-yyyy")
              : "N/A"}
          </span>
        </p>
        <p className="text-sm sm:text-base text-muted-foreground font-raleway">
          {article.description}
        </p>
      </div>
    </Link>
  );
}

export default ArticleCard;
