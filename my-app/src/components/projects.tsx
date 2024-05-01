"use client"

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  // const { ref, inView } = useInView({
  //   threshold: 0.5,
  // });
  //   const { setActiveSection, timeOfLastClicked } = useActiveSectionContext();

  //   useEffect(() => {
  //       if(inView && Date.now() - timeOfLastClicked > 1000) {
  //           setActiveSection("Projects")
  //       }
  //   }, [inView, setActiveSection, timeOfLastClicked])
    
  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
        <SectionHeading heading="My projects"/>
        <div>
            {
                projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                    <Project {...project}/> 
                    </React.Fragment>
                ))
            }
        </div>
    </section>
  );
}