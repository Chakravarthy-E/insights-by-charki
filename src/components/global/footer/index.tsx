import React from "react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

function Footer() {
  return (
    <footer>
      <div className=" border-t py-6 flex flex-col lg:flex-row md:flex-row sm:flex-col xs:flex-col items-start justify-between space-y-6 lg:space-y-0 md:space-y-0 sm:space-y-6 font-outfit">
        <div className="lg:w-1/2 md:w-1/2 w-full">
          <p className="text-justify">
            Hello 👋, I&apos;m Chakravarthy, a software developer based in
            Bangalore. In my free time, I work on{" "}
            <strong>Insights By Chakri</strong>, a project aimed at building the
            kind of resource I wish I had when I first started out as a
            developer.
          </p>
        </div>

        <div className="flex flex-col space-y-2  items-start w-full lg:w-auto md:w-auto">
          <strong className="text-lg">Follow Me</strong>
          <a
            href="https://www.linkedin.com/in/chakravarthy-e"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <LinkedInLogoIcon /> <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Chakravarthy-E/"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <GitHubLogoIcon /> <span>GitHub</span>
          </a>
          <a
            href="https://x.com/Chakravarthy__7"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <TwitterLogoIcon /> <span>Twitter</span>
          </a>
        </div>
      </div>
      <p className="lg:text-center md:text-center sm:text-start xs:text-center font-raleway text-muted-foreground">
        ©2024 Chakravarthy E. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
