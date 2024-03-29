import { useEffect, useRef, useState } from "react";
import gsap, { Power1 } from "gsap";

const Loader = () => {
    const pathRef = useRef();
    const [totalLength, setTotalLength] = useState(100);

    useEffect(() => {
        let l = pathRef.current.getTotalLength();
        setTotalLength(l);

        gsap.to(pathRef.current,{
            strokeDashoffset: (l+10) ,
            duration : 2,
            repeat : -1,
            ease : Power1.easeOut
        });
    }, []);

    return (
        <div className="fixed w-screen h-screen top-0 left-0 z-[100] bg-gray-900">
            <div className="w-full h-full flex items-center justify-center">
                <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        ref={pathRef}
                        d="M47.9328 35.4115L59.2417 54.0925H41.6265L24.0113 24.9943L32.8189 10.4454L50.434 10.4454L24.0109 54.0925H6.39624L23.9727 25.0508"
                        strokeWidth="5"
                        strokeLinecap="square"
                        className="stroke-accent-500"
                        fill="none"
                        style={{
                            strokeDasharray : `${ totalLength} ${2*totalLength}`,
                            strokeDashoffset: `${-totalLength}`,
                        }}
                    />
                </svg>
            </div>
        </div>
    );
};

export default Loader;
