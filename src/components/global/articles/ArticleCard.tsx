import React from "react";
import { ArticleTypes } from ".";
import Link from "next/link";

interface ArticleProps {
  article: ArticleTypes;
}

function ArticleCard({ article }: ArticleProps) {
  return (
    <div
      key={article.slug}
      className="space-y-2 opacity-80 hover:opacity-100 transition-opacity duration-300"
    >
      <Link href={`/${article.category}/${article.slug}`}>
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold underline decoration-purple-700 font-outfit">
          {article.title}
        </p>
      </Link>
      <p className="text-sm sm:text-base text-muted-foreground font-raleway">
        {article.description}
      </p>
      <Link href={`/${article.category}/${article.slug}`}>
        <p className="text-sm sm:text-base font-semibold font-outfit">
          Read more →
        </p>
      </Link>
    </div>
  );
}

export default ArticleCard;
