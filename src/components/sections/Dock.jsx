


import React from "react";
import { FloatingDock } from "@/components/ui/FloatingDock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandFramer,
  IconBrandReact,
  IconBrandFirebase,
  IconBrandDocker,
  IconBrandFigma,
} from "@tabler/icons-react";

import {
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiFirebase,
  SiLinux,
  SiGnubash,
  SiCplusplus,
} from "react-icons/si";

export function Dock() {
 const links = [
    {
      title: "Next.js",
      icon: (
        <IconBrandNextjs className="h-12 w-12 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://nextjs.org/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "Node.js",
      icon: <IconBrandNodejs className="h-12 w-12 text-green-500" />,
      href: "https://nodejs.org/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "TypeScript",
      icon: <IconBrandTypescript className="h-12 w-12 text-[#3178c6]" />,
      href: "https://www.typescriptlang.org/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "JavaScript",
      icon: <IconBrandJavascript className="h-12 w-12 text-yellow-400" />,
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "Tailwind CSS",
      icon: <IconBrandTailwind className="h-12 w-12 text-sky-400" />,
      href: "https://tailwindcss.com/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    
    {
      title: "React Native",
      icon: <IconBrandReact className="h-12 w-12 text-cyan-400" />,
      href: "https://reactnative.dev/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "MongoDB",
      icon: <SiMongodb className="h-12 w-12 text-green-600" />,
      href: "https://www.mongodb.com/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "PostgreSQL",
      icon: <SiPostgresql className="h-12 w-12 text-blue-600" />,
      href: "https://www.postgresql.org/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "Firebase",
      icon: <SiFirebase className="h-12 w-12 text-yellow-500" />,
      href: "https://firebase.google.com/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "Redis",
      icon: <SiRedis className="h-12 w-12 text-red-500" />,
      href: "https://redis.io/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "Docker",
      icon: <IconBrandDocker className="h-12 w-12 text-sky-500" />,
      href: "https://www.docker.com/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  
    {
      title: "Bash",
      icon: <SiGnubash className="h-12 w-12 text-gray-700 dark:text-white" />,
      href: "https://www.gnu.org/software/bash/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "Figma",
      icon: <IconBrandFigma className="h-12 w-12 text-pink-500" />,
      href: "https://www.figma.com/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "C++",
      icon: <SiCplusplus className="h-12 w-12 text-blue-600" />,
      href: "https://isocpp.org/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-12 w-12 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/yourusername",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-12 w-12 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://linkedin.com/in/yourprofile",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-12 w-12 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://twitter.com/yourhandle",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-12 w-12 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://facebook.com/yourusername",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-12 w-12 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://instagram.com/yourusername",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full h-[70rem] md:h-55 bg-transparent">
      <FloatingDock
        items={links}
        desktopClassName="max-w-6xl w-full justify-center"
        mobileClassName="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
      />
    </div>
  );
}
