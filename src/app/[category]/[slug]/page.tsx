"use client";

import { useFetchArticle } from "@/hooks/article";
import React, { useEffect } from "react";
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
  const slug = params.slug;
  const { data, isLoading, error, isError } = useFetchArticle(slug);

  useEffect(() => {
    if (data?.title) {
      document.title = data?.title;
    } else {
      document.title = "IBC";
    }
  }, [data?.title]);

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

      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          Loading....
        </div>
      ) : (
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
            className="font-noto prose-h3:text-lg sm:prose-h3:text-xl lg:prose-h3:text-2xl prose-h3:text-violet-300 prose-pre:dark:bg-gray-900 text-muted-foreground text-justify prose max-w-none 
           prose-strong:text-violet-300 prose-strong:font-bold prose-pre:language-javascript prose-code:text-black prose-code:font-mono prose-code:tracking-normal prose-pre:bg-gray-400 prose-code:dark:text-white
           prose-h2:text-violet-400"
          />

          <p className="text-sm sm:text-base text-end font-outfit">
            last updated:{" "}
            {data?.updatedAt
              ? format(new Date(data?.updatedAt), "dd-MMMM-yyyy")
              : "N/A"}
          </p>
        </article>
      )}
    </>
  );
}

export default Article;
