import sleekSitesLogo from "../../assets/sleeksites.png";
import nalndaLogo from "../../assets/nalnda.png";
import connectofiLogo from "../../assets/connectofi.png";
import ExperienceCard from "../ExperienceCard";

const ExperienceSection = () => {
    return (
        <div className="relative items-center">
            <h1 className="text-5xl font-orbitron text-white font-bold">
                <span className="text-accent-500 font-code">./</span>Experience
            </h1>
            <div className="relative max-w-[80rem] mx-auto mt-16 py-32">
                <ExperienceCard
                    logo={sleekSitesLogo}
                    title="SleekSites"
                    desc="Worked as a Frontend React Developer and built modern looking webapps for clients with ReactJS, Bootstrap 5, Firebase "
                    duration="AUG 2021 - JAN 2022"
                />

                <ExperienceCard
                    logo={connectofiLogo}
                    reverse={true}
                    title="ConnectoFi"
                    desc="Designing and developing a platform for students to find interships"
                    duration="FEB 2022 - APR 2022"
                />

                <ExperienceCard
                    logo={nalndaLogo}
                    title="Nalnda"
                    desc="Nalnda is a decentralized marketplace for NFT based eBooks. I was involved in designing, creating, and integrating the frontend of a WEB3 application with blockchain."
                    duration="MAY 2022 - JUL 2022"
                />
            </div>
        </div>
    );
};

export default ExperienceSection;
