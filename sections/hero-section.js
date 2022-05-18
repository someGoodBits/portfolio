import Loader from "../components/loader";

const HeroSection = () => {
    return (
        <div className="h-[calc(100vh-7rem)] flex items-center">
            <div className="font-orbitron font-bold flex-1 sm:ml-24">
                <div className="text-accent-500">hello, I am</div>
                <div className="text-white text-6xl">anurag kumar</div>
                <div className="max-w-[40ch] text-gray-600 my-6">
                    I work as a <span className="text-white">web designer and developer</span>. I enjoy creating unique <span className="text-white">UI / UX designs</span>.
                </div>
                <button className="bg-accent-500 p-6 text-white cursor-pointer hover:bg-accent-400 cutout-1">
                    Download Resume
                </button>
            </div>
            <div className="flex-1">
                
            </div>
        </div>
    );
};

export default HeroSection;
