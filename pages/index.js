import { useRef, useState } from "react";
import useTimeout from "../hooks/useTimeout";

import Header from "../components/Header";
import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/sections/HeroSection";
import SkillSection from "../components/sections/SkillSection";
import ExperienceSection from "../components/sections/ExperienceSection";

export const SECTIONS = {
    HERO_SECTION : 0,
    SKILL_SECTION : 1,
    EXPERIENCE_SECTION : 2,
    PROJECTS_SECTION: 3,
    CONTACT_SECTIONS: 4
}

export default function Home() {

    const [isLoaderVisible, setIsLoaderVisible] = useState(true);
    const HeroSectionRef = useRef();
    const SkillsSectionRef = useRef();
    const ExperienceSectionRef = useRef();
    const ProjectsRef = useRef();
    const ContactRef = useRef();

    function scrollToSection(sectionRef){
        switch(sectionRef){
            case SECTIONS.HERO_SECTION : HeroSectionRef.current?.scrollIntoView({behavior: 'smooth'}); return;
            case SECTIONS.SKILL_SECTION : SkillsSectionRef.current?.scrollIntoView({behavior: 'smooth'}); return;
            case SECTIONS.EXPERIENCE_SECTION : ExperienceSectionRef.current?.scrollIntoView({behavior: 'smooth'}); return;
            case SECTIONS.PROJECTS_SECTION : ProjectsRef.current?.scrollIntoView({behavior: 'smooth'}); return;
            case SECTIONS.CONTACT_SECTIONS : ContactRef.current?.scrollIntoView({behavior: 'smooth'}); return;
            default: return;
        }
    }

    useTimeout(()=>{
        setIsLoaderVisible(false);
    },2000);

    return (
        <>
            { isLoaderVisible && <Loader /> }

            <div className="fixed top-0 z-50 backdrop-blur-md w-full sm:ml-[6.25rem] sm:w-[calc(100%-6.25rem)]">
                <div className="container mx-auto px-3">
                    <Header scrollToSection={scrollToSection} />
                </div>
            </div>

            <div className="hidden sm:block w-[6.25rem] flex-grow-0 flex-shrink-0">
                <Sidebar />
            </div>

            <div className="sm:ml-[6.25rem] overflow-hidden h-full">
                <div ref={HeroSectionRef} className="container mx-auto px-3 pt-[6.25rem]">
                    <HeroSection />
                </div>
                <div ref={SkillsSectionRef} className="container mx-auto px-3 pt-[6.25rem]">
                    <SkillSection />
                </div>
                <div ref={ExperienceSectionRef} className="container mx-auto px-3 pt-[6.25rem]">
                    <ExperienceSection />
                </div>
                <div className="container mx-auto px-3 pt-[6.25rem]">
                    <div>
                        <div className="text-3xl text-white text-center p-64">Website Under Construction</div>
                    </div>
                </div>
            </div>
        </>
    );
}
