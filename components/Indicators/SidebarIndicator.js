import {useState,useEffect} from "react";
const maxStrips = 10 ;
const SidebarIndicator = ({inactiveClass="",activeClass=""}) => {
    const [classNames,setClassNames] = useState(new Array(maxStrips).fill(inactiveClass));
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        let clock = setInterval(()=>{
            setCounter(c => (c+1)%(maxStrips+1));
        },1000);
        return () => {clearInterval(clock)}
    },[])

    useEffect(()=>{
        let tempClassNames = new Array(maxStrips).fill(inactiveClass) ;
        for(let i=0;i<counter;i++){
            tempClassNames[i] = activeClass ;
        }
        setClassNames(tempClassNames);
    },[counter])

    return (
        <>
            <path className={classNames[0]||""} d="M112 339.633L120 335.133V355.133L112 360.133V339.633Z" />
            <path className={classNames[1]||""} d="M112 364.591L120 360.091V380.091L112 385.091V364.591Z" />
            <path className={classNames[2]||""} d="M112 390.791L120 386.291V406.291L112 411.291V390.791Z" />
            <path className={classNames[3]||""} d="M112 416.991L120 412.491V432.491L112 437.491V416.991Z" />
            <path className={classNames[4]||""} d="M112 443.191L120 438.691V458.691L112 463.691V443.191Z" />
            <path className={classNames[5]||""} d="M112 469.391L120 464.891V484.891L112 489.891V469.391Z" />
            <path className={classNames[6]||""} d="M112 495.591L120 491.091V511.091L112 516.091V495.591Z" />
            <path className={classNames[7]||""} d="M112 520.548L120 516.048V536.048L112 541.048V520.548Z" />
            <path className={classNames[8]||""} d="M112 546.748L120 542.248V562.248L112 567.248V546.748Z" />
            <path className={classNames[9]||""} d="M112 572.948L120 568.448V588.448L112 593.448V572.948Z" />
        </>
    );
};

export default SidebarIndicator;
