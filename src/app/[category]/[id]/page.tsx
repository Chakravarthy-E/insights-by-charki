"use client";

import { useFetchArticle } from "@/hooks/article";
import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

type Props = {
  params: {
    id: string;
  };
};

function Article({ params }: Props) {
  const id = params.id;

  const { data, isLoading } = useFetchArticle(id);

  useEffect(() => {
    if (data?.content) {
      Prism.highlightAll();
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading....
      </div>
    );
  }

  return (
    <article className="py-10 space-y-4">
      <h1 className="font-outfit text-3xl">{data?.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: data?.content || "" }}
        className="font-raleway prose-h3:text-xl prose-h3:text-violet-600 prose-pre:bg-slate-500 text-muted-foreground  text-justify prose max-w-none 
         prose-ol:text-gray-500 prose-strong:text-gray-400 prose-code:text-violet-500
        "
      />
    </article>
  );
}

export default Article;
