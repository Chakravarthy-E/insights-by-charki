import React from "react";
import { ArticleTypes } from ".";
import Link from "next/link";

interface ArticleProps {
  article: ArticleTypes;
}

function ArticleCard({ article }: ArticleProps) {
  return (
    <div key={article._id} className=" space-y-2">
      <Link href={`/${article.category}/${article._id}`}>
        <p className="text-2xl font-semibold hover:underline decoration-purple-700 font-outfit">
          {article.title}
        </p>
      </Link>
      <p className="text-muted-foreground font-raleway">
        {article.description}
      </p>
      <Link href={`/${article.category}/${article._id}`}>
        <p className="font-semibold font-outfit">Read more → </p>
      </Link>
    </div>
  );
}

export default ArticleCard;
