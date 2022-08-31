import { useState } from "react";
import useTimeout from "../hooks/useTimeout";

import Header from "../components/Header";
import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";
import HeroSection from "../components/sections/HeroSection";
import SkillSection from "../components/sections/SkillSection";
import ExperienceSection from "../components/sections/ExperienceSection";

export default function Home() {

    const [isLoaderVisible, setIsLoaderVisible] = useState(true);

    useTimeout(()=>{
        setIsLoaderVisible(false);
    },2000);

    return (
        <>
            { isLoaderVisible && <Loader /> }

            <div className="fixed top-0 w-full sm:ml-[6.25rem] sm:w-[calc(100%-6.25rem)]">
                <div className="container mx-auto px-3">
                    <Header />
                </div>
            </div>

            <div className="hidden sm:block w-[6.25rem] flex-grow-0 flex-shrink-0">
                <Sidebar />
            </div>

            <div className="sm:ml-[6.25rem] overflow-hidden h-full">
                <div className="container mx-auto px-3 pt-[6.25rem]">
                    <HeroSection />
                </div>
                <div className="container mx-auto px-3 pt-[6.25rem]">
                    <SkillSection />
                </div>
                <div className="container mx-auto px-3 pt-[6.25rem]">
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
