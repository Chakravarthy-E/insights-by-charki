"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import React from "react";

type TBreadCrumbProps = {
  homeElement: React.ReactNode;
  separator?: React.ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const CustomBreadCrumb = ({
  homeElement,
  separator = <SlashIcon className="h-4 w-4 text-muted-foreground" />,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks = true,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <Breadcrumb className={cn("flex items-center flex-wrap", containerClasses)}>
      <BreadcrumbItem>
        <BreadcrumbLink
          href="/"
          className={cn("text-muted-foreground hover:underline", listClasses)}
        >
          {homeElement}
        </BreadcrumbLink>
      </BreadcrumbItem>

      {pathNames.length > 0 && (
        <BreadcrumbSeparator className="list-none">
          {separator}
        </BreadcrumbSeparator>
      )}

      {pathNames.map((link, index) => {
        const href = `/${pathNames
          .slice(0, index + 1)
          .join("/")
          .toLocaleLowerCase()}`;
        const isActive = paths === href;
        const itemClasses = isActive
          ? cn("text-primary font-semibold", activeClasses)
          : cn("text-muted-foreground hover:underline", listClasses);
        const itemLink = capitalizeLinks
          ? link.charAt(0).toUpperCase() + link.slice(1)
          : link;

        return (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink href={href} className={itemClasses}>
                {itemLink}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {pathNames.length !== index + 1 && (
              <BreadcrumbSeparator className="list-none">
                {separator}
              </BreadcrumbSeparator>
            )}
          </React.Fragment>
        );
      })}
    </Breadcrumb>
  );
};

export default CustomBreadCrumb;
