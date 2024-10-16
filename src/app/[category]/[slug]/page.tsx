"use client";

import { useFetchArticle } from "@/hooks/article";
import React from "react";
import Head from "next/head";
import { notFound, usePathname } from "next/navigation";
import { format } from "date-fns";
import SocialShare from "@/components/global/social-share";

type Props = {
  params: {
    slug: string;
  };
};

function Article({ params }: Props) {
  const pathName = usePathname();
  console.log(pathName);
  const slug = params.slug;
  console.log(slug);
  const { data, isLoading, error, isError } = useFetchArticle(slug);

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
        <title>{data?.title ? data?.title : "IBC"}</title>
        <meta name="description" content={data?.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <article className="py-8 px-4 sm:py-8 sm:px-6 lg:py-8 lg:px-8 space-y-6">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-4">
          <h1 className="font-outfit text-2xl sm:text-3xl lg:text-4xl">
            {data?.title}
          </h1>
          <SocialShare
            url={`https://insights-by-charki.vercel.app${pathName}`}
            title={data?.title}
          />
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: data?.content || "" }}
          className="font-raleway prose-h3:text-lg sm:prose-h3:text-xl lg:prose-h3:text-2xl prose-h3:text-violet-600 prose-pre:dark:bg-gray-900 text-muted-foreground text-justify prose max-w-none 
          prose-ol:text-gray-500 prose-strong:text-violet-500 prose-pre:language-javascript prose-code:text-black prose-code:font-mono prose-code:tracking-normal prose-pre:bg-gray-400 prose-code:dark:text-white"
        />

        <p className="text-sm sm:text-base text-end font-outfit">
          last updated:{" "}
          {data?.updatedAt
            ? format(new Date(data?.updatedAt), "dd-MMMM-yyyy")
            : "N/A"}
        </p>
      </article>
    </>
  );
}

export default Article;
