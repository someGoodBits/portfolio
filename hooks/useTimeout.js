import { useEffect } from "react";

const useTimeout = (callback,delay) => {
    useEffect(()=>{
        const clock = setTimeout(()=>{
            callback();
        },delay)

        return ()=>{
            clearTimeout(clock);
        }
    },[])
}
 
export default useTimeout;