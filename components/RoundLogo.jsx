const RoundLogo = () => {
    return (
        <div
            className="w-full h-full relative rounded-full flex items-center justify-center"
        >
            <svg
                className="w-[80%] rounded-full bg-[hsl(221,17%,16%)]"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M47.6702 16.1583L35.1592 36.8249L39.5986 44.1583H46.1647L41.3042 36.1293L43.6713 32.2192L53.3204 48.1583H37.2858L32.7921 40.735L28.298 48.1583H12.2638L25.3941 26.4686L31.6357 16.1583L47.6702 16.1583ZM27.142 31.4018L19.4195 44.1583H25.9853L30.425 36.8249L27.142 31.4018ZM29.5091 27.4916L32.7921 32.9147L40.5145 20.1583L33.9485 20.1583L29.5091 27.4916Z"
                    fill="#FFF"
                />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+4px)] h-[calc(100%+4px)]">
                <div className="absolute w-full h-full border-[3px] rounded-full border-slate-600"></div>
                <div
                    className="w-full h-full border-[3px] rounded-full border-transparent border-t-accent-500 border-b-accent-500 animate-spin"
                    style={{ animationDuration: "5s" }}
                ></div>
            </div>
        </div>
    );
};

export default RoundLogo;
