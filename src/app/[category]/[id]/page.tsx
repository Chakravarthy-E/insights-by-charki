"use client";

import { useFetchArticle } from "@/hooks/article";
import React from "react";
import Head from "next/head";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

function Article({ params }: Props) {
  const id = params.id;
  const { data, isLoading, error, isError } = useFetchArticle(id);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading....
      </div>
    );
  }

  if (isError) {
    notFound();
  }

  return (
    <>
      <Head>
        <title>{data?.title}</title>
        <meta name="description" content={data?.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <article className="py-10 space-y-4">
        <h1 className="font-outfit text-3xl">{data?.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: data?.content || "" }}
          className="font-raleway prose-h3:text-xl prose-h3:text-violet-600 prose-pre:bg-gray-900 text-muted-foreground text-justify prose max-w-none 
          prose-ol:text-gray-500 prose-strong:text-gray-400 prose-pre:language-javascript prose-code:text-violet-500 prose-code:font-outfit prose-code:tracking-normal"
        />
      </article>
    </>
  );
}

export default Article;
