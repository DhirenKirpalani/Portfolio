"use client"

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.section 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40">
            <SectionHeading heading="About me"/>
            <p className="mb-3">
            After graduating with a degree in{" "}
        <span className="font-medium">Business Administration</span>, I decided to pursue my
        passion for programming. I enrolled in a programming bootcamp and learned{" "}
        <span className="font-medium">full-stack development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. I am proficient in{" "}
        <span className="font-medium">
          Node.js, Express.js, React, React Native, Next.js, TypeScript, SQL and MongoDB
        </span>. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
            </p>
        </motion.section>
    );
}