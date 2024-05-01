"use client"

import type { ActiveSectionContextProviderProps, ActiveSectionType, SectionName } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

// type ActiveSectionContextProviderProps = {
//     children: React.ReactNode;
// };

// type ActiveSectionType = {
//     activeSection: SectionName;
//     setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
//     timeOfLastClicked: number;
//     setTimeOfLastClicked: React.Dispatch<React.SetStateAction<number>>;
// };

export const ActiveSectionContext = createContext<ActiveSectionType | null>(null);

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClicked, setTimeOfLastClicked] = useState(0)

    return <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection,
        timeOfLastClicked,
        setTimeOfLastClicked
    
    }}>
        {children}
    </ActiveSectionContext.Provider>
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
    if (!context) {
        throw new Error('useActiveSection must be used within an ActiveSectionContextProvider');
    }
    return context;
}