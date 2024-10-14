import React from "react";
import { ArticleTypes } from ".";
import Link from "next/link";

interface ArticleProps {
  article: ArticleTypes;
}

function ArticleCard({ article }: ArticleProps) {
  return (
    <div key={article.slug} className=" space-y-2 opacity-80 hover:opacity-100">
      <Link href={`/${article.category}/${article.slug}`}>
        <p className="text-2xl font-semibold underline decoration-purple-700 font-outfit">
          {article.title}
        </p>
      </Link>
      <p className="text-muted-foreground font-raleway">
        {article.description}
      </p>
      <Link href={`/${article.category}/${article.slug}`}>
        <p className="font-semibold font-outfit">Read more → </p>
      </Link>
    </div>
  );
}

export default ArticleCard;
