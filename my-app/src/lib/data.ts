import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import tictactoe from "@/assets/Tic-Tac-Toe.png";
import restaurant from "@/assets/restaurant.jpg";
import socialmedia from "@/assets/socialmedia.jpg";
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
    title: "Graduated Hacktiv8 Bootcamp",
    location: "Jakarta, Indonesia",
    description:
      "I have learned about full-stack web and mobile development. I also learned about software engineering principles and best practices.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Product Operations Analyst - Aspire Financial Technologies",
    location: "Jakarta, Indonesia",
    description:
      "I created automation tools to improve the efficiency of the operations team. I also worked on data analysis and reporting to help the product team make data-driven decisions.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  }
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
  "Vite.js",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "Sequelize",
  "PostgreSQL",
  "MySQL",
  "Socket.io",
  "Framer Motion",
] as const;