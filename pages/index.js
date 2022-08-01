import { useState } from "react";
import Header from "../components/Header";
import Loader from "../components/loader";
import Sidebar from "../components/Sidebar";
import useTimeout from "../hooks/useTimeout";
import HeroSection from "../components/sections/hero-section";
import SkillsSection from "../components/sections/skills-section";

export default function Home() {

    const [isLoaderVisible, setIsLoaderVisible] = useState(true);

    useTimeout(()=>{
        setIsLoaderVisible(false);
    },100);

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

            <div className="sm:ml-[6.25rem]">
                <div className="container mx-auto px-3 pt-[6.25rem]">
                    <HeroSection />
                </div>
                <div className="container mx-auto px-3 pt-[6.25rem]">
                    <SkillsSection   />
                </div>
                <div className="container mx-auto px-3 pt-[6.25rem]">
                    
                </div>
            </div>
        </>
    );
}
