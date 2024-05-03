import { links } from "./data";

export type SectionName = typeof links[number]["name"];

export type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};

export type ActiveSectionType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClicked: number;
    setTimeOfLastClicked: React.Dispatch<React.SetStateAction<number>>;
};