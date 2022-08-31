import Image from "next/image";

const ExperienceCard = ({ logo = "", title = "", desc = "", duration = "", reverse = false }) => {
    if (reverse === true) {
        return (
            <div className="flex overflow-hidden py-16 items-center">
                <div className="flex-1 hidden lg:block text-right">
                    <span className="font-orbitron font-bold text-2xl text-white uppercase">{duration}</span>
                </div>
                <div className="flex-0 relative mx-16">
                    <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rotate-45 bg-gray-700 border-4 border-gray-700">
                        <div className="w-full h-full border-4 border-gray-800 border-solid bg-accent-500"></div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-[50rem] bg-gray-700"></div>
                </div>
                <div className="flex-1 flex items-center">
                    <div className="flex-shrink-0 w-24 h-24">
                        <Image src={logo} alt={title} />
                    </div>
                    <div className="ml-4">
                        <div className="font-orbitron font-bold text-3xl text-white">{title}</div>
                        <span className="lg:hidden font-orbitron font-bold text-gray-600 uppercase">{duration}</span>
                        <div className="font-orbitron text-neutral-400">{desc}</div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex overflow-hidden py-16 items-center">
                <div className="flex-1 flex items-center order-2">
                    <div className="lg:mr-4 text-left lg:text-right order-2">
                        <div className="font-orbitron font-bold text-3xl text-white">{title}</div>
                        <span className="lg:hidden font-orbitron font-bold text-gray-600 uppercase">{duration}</span>
                        <div className="font-orbitron text-neutral-400">{desc}</div>
                    </div>
                    <div className="flex-shrink-0 w-24 h-24 order-1 lg:order-3 mr-4 lg:mr-0">
                        <Image src={logo} alt={title} />
                    </div>
                </div>
                <div className="flex-0 relative mx-16 order-1 lg:order-3">
                    <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rotate-45 bg-gray-700 border-4 border-gray-700">
                        <div className="w-full h-full border-4 border-gray-800 border-solid bg-accent-500"></div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-[50rem] bg-gray-700"></div>
                </div>
                <div className="flex-1 hidden lg:block order-4">
                    <span className="font-orbitron font-bold text-2xl text-white uppercase">{duration}</span>
                </div>
            </div>
        );
    }
};

export default ExperienceCard;
