import SocialCard from "@/components/global/social-card";
import { Github, Linkedin, Twitter } from "lucide-react";
import React from "react";

function About() {
  return (
    <div className="font-outfit space-y-5">
      <h1 className="text-5xl tracking-wide">
        Hi there! I&apos;m <span className="text-blue-500"> Chakravarthy</span>
      </h1>
      <p>
        I began my journey in web development with a passion for building
        dynamic, user-friendly applications. Over time, I&apos;ve honed my
        skills, specializing in front-end technologies like React.js and
        Next.js, and deepened my understanding of data structures and
        algorithms.
      </p>
      <p>
        Now, I’m focused on creating scalable, high-performance web solutions,
        and I’m always eager to learn and grow in this ever-evolving field.
      </p>

      <div className="flex flex-wrap gap-3">
        <SocialCard
          icon={<Linkedin className="dark:text-blue-500" />}
          link="https://www.linkedin.com/in/chakravarthy-e/"
          platform="LinkedIn"
        />
        <SocialCard
          icon={<Github className="dark:text-blue-500 text-3xl" />}
          link="https://github.com/Chakravarthy-E/"
          platform="GitHub"
        />
        <SocialCard
          icon={<Twitter className="dark:text-blue-500 text-3xl" />}
          link="https://x.com/Chakravarthy__7"
          platform="Twitter"
        />
      </div>
    </div>
  );
}

export default About;
