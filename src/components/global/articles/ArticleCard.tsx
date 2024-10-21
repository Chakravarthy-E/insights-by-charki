import React from "react";
import Link from "next/link";
import { format } from "date-fns";

export interface ArticleTypes {
  article: {
    _id: string;
    title: string;
    description?: string;
    content: string;
    likes: number;
    category: string;
    published: boolean;
    isFeatured: boolean;
    slug: string;
    createdAt: string;
  };
}

function ArticleCard({ article }: ArticleTypes) {
  return (
    <Link href={`/${article.category}/${article.slug}`}>
      <div
        key={article.slug}
        title={article.title}
        className=" opacity-80 hover:opacity-100  group bg-gray-800 px-6 py-3 relative overflow-hidden block lg:h-52 md:h-60 rounded-tl-xl rounded-br-xl border hover:border-blue-500 transition-all duration-300 ease-in-out"
      >
        <p
          className="text-lg sm:text-xl md:text-2xl font-semibold font-noto lg:line-clamp-2 "
          id="title"
        >
          {article.title}
        </p>
        {article.description && (
          <p className="text-sm sm:text-base text-muted-foreground md:line-clamp-4 font-noto lg:line-clamp-4">
            {article?.description}
          </p>
        )}
        <p className="text-sm font-noto text-foreground my-2">
          {article?.createdAt
            ? format(new Date(article?.createdAt), "dd-MMMM-yyyy")
            : "N/A"}
        </p>
      </div>
    </Link>
  );
}

export default ArticleCard;
