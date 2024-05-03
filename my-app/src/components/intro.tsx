"use client"

import Image from "next/image";
import React from "react";
import ProfileImage from "@/assets/Image.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const {setActiveSection, setTimeOfLastClicked} = useActiveSectionContext();
    // const { ref, inView } = useInView({
    //     threshold: 0.5,
    //   });
    //     const { setActiveSection, timeOfLastClicked } = useActiveSectionContext();
    
    //     useEffect(() => {
    //         if(inView && Date.now() - timeOfLastClicked > 1000) {
    //             setActiveSection("Home")
    //         }
    //     }, [inView, setActiveSection, timeOfLastClicked])
        
    return (
        <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "tween", duration: 0.2 }}
                    >
                        <Image
                            src={ProfileImage}
                            alt="Profile image"
                            className="h-48 w-48 rounded-full object-cover 
                    border-[0.35rem] border-white dark:border-black shadow-xl"
                        />
                    </motion.div>
                    <motion.span className="absolute bottom-5 right-0 text-5xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hi, I'm Dhiren Kirpalani</span>. I'm a{" "}
                <span className="font-bold">full-stack developer</span>.  I'm proficient in{" "}
                <span className="underline">Node.js, Express.js, React, React Native, Next.js, TypeScript, Tailwind, SQL and MongoDB</span>.
                I'm open to full-time opportunities.
            </motion.h1>

            <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            >
                <Link 
                href="#contact"
                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full 
                outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                onClick={() => {
                    setActiveSection("Contact")
                    setTimeOfLastClicked(Date.now())
                }}
                >
                    Contact me here <BsArrowRight className="group-hover:translate-x-1 transition opacity-70"/>
                </Link>

                <a 
                href="/CV - Dhiren Kirpalani.pdf"
                download
                className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full
                outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10">
                    Download CV <HiDownload className="group-hover:translate-y-1 transition opacity-60"/>
                </a>

                <a 
                href="https://www.linkedin.com/in/dhiren-kirpalani-b2a572132/"
                target="_blank"
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full
                focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60">
                    <BsLinkedin />
                </a>
                
                <a 
                href="https://github.com/DhirenKirpalani"
                target="_blank"
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full
                focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60">
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}