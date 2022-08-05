import RoundLogo from "./RoundLogo";

const Sidebar = ({ width = "6.25rem" }) => {
    return (
        <div className="fixed left-0 top-0 h-screen" style={{ width }}>
            <svg className="w-full" viewBox="0 0 120 1805" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M-3.05176e-05 0.989258H100V114L120 124L120 324L100 334V696L80 706V786L100 796L100 1264L120 1274V1554L100 1564V1804.26L-3.05176e-05 1804.25V0.989258Z"
                    fill="#414858"
                    fillOpacity="0.2"
                />
            </svg>

            <div className="w-[80%] absolute top-0 left-0 h-screen flex flex-col items-center py-3">
                <div className="relative w-full pt-[100%]">
                    <div className="absolute w-full h-full top-0 left-0 p-3">
                        <RoundLogo />
                    </div>
                </div>

                <div className="font-orbitron text-xs text-slate-500 tracking-[8px] font-thin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90">
                    PORTFOLIO
                </div>

                <div className="flex-1"></div>

                <div className="group w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-accent-500 rounded-md">
                    <svg className="stroke-gray-500 group-hover:stroke-gray-100" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <title>settings</title>
                        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
