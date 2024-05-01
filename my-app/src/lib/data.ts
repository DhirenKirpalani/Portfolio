import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import tictactoe from "@/assets/Tic-Tac-Toe.png";
import restaurant from "@/assets/restaurant.jpg";
import socialmedia from "@/assets/socialmedia.png";
import ecommerce from "@/assets/ecommerce.png";
import fitness from "@/assets/fitness.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Tic-Tac-Toe Game",
    description:
      "A web based real-time tic-tac-toe game with game rooms and game statistics.",
    tags: ["Express.js", "React", "React Context", "Tailwind", "PostgreSQL", "Firebase"],
    imageUrl: tictactoe,
  },
  {
    title: "Restaurant Web App",
    description:
      "A web based application to display restaurant menu and make orders. It also has an admin panel to manage the menu.",
    tags: ["Express.js", "React", "Redux", "PostgreSQL", "Tailwind", "Jest", "AWS"],
    imageUrl: restaurant,
  },
  {
    title: "Social Media App",
    description:
      "A mobile based application where users can share, comment and like posts.",
    tags: ["React Native", "Redis", "Expo", "GraphQL", "Apollo Server", "Apollo Client", "MongoDB"],
    imageUrl: socialmedia,
  },
  {
    title: "E-Commerce Web App",
    description:
      "A web based application where users can search products, add and remove products from wishlist.",
    tags: ["TypeScript", "Next.js", "MongoDB"],
    imageUrl: ecommerce,
  },
  {
    title: "Fitness App",
    description:
      "A mobile based application with personalized workout contents, analytics and social media features.",
    tags: ["Express.js", "React Native", "Expo", "MongoDB", "Jest", "AWS"],
    imageUrl: fitness,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "MySQL",
  "Framer Motion",
] as const;