const HeroSection = () => {

    return (
        <div className="relative h-[calc(100vh-7rem)] flex items-center">
            <div className="font-orbitron font-bold flex-1 sm:ml-24 p-4">
                <div className="text-accent-500">hello, I am</div>
                <div className="text-white text-6xl">anurag kumar</div>
                <div className="max-w-[40ch] text-gray-600 my-6">
                    I work as a <span className="text-white">web designer and developer</span>. I enjoy creating unique <span className="text-white">UI / UX designs</span>.
                </div>
                <button className="bg-accent-500 p-6 text-white cursor-pointer hover:bg-accent-400 cutout-1">
                    Download Resume
                </button>
            </div>
            <div className="lg:relative opacity-50 lg:opacity-100 lg:z-0 lg:translate-x-0 lg:translate-y-0 lg:left-0 lg:top-0 h-full flex-1 overflow-hidden w-screen sm:w-full -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
