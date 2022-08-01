import { useRef } from 'react'
import HexSubMenu from '../submenu'

import CodeIcon from '../../public/icons/code.svg'
import CSSIcon from '../../public/icons/css.svg'
import DBIcon from '../../public/icons/db.svg'
import JSIcon from '../../public/icons/js.svg'
import ToolsIcon from '../../public/icons/tools.svg'

import CPPIcon from '../../public/icons/cpp.svg'
import PythonIcon from '../../public/icons/python.svg'
import JavascriptIcon from '../../public/icons/javascript.svg'

import TailwindIcon from '../../public/icons/tailwind.svg'
import SassIcon from '../../public/icons/sass.svg'
import BootstrapIcon from '../../public/icons/bootstrap.svg'


import ReactIcon from '../../public/icons/react.svg';
import NextIcon from '../../public/icons/nextjs.svg';
import ExpressIcon from '../../public/icons/express.svg';
import NodeIcon from '../../public/icons/nodejs.svg';

import MySqlIcon from '../../public/icons/mysql.svg';
import FirebaseIcon from '../../public/icons/firebase.svg';
import MongoDBIcon from '../../public/icons/mongodb.svg';

import VSCodeIcon from '../../public/icons/vscode.svg';
import FigmaIcon from '../../public/icons/figma.svg';
import GitIcon from '../../public/icons/git.svg';
import PostmanIcon from '../../public/icons/postman.svg';




const SkillsSection = () => {

    const languagesSubMenuRef = useRef();
    const jsSubMenuRef = useRef();
    const cssSubMenuRef = useRef();
    const dbSubMenuRef = useRef();
    const toolsSubMenuRef = useRef();

    function hideMenu(menuRef){
        if(!menuRef.current) return ;
        menuRef.current.style.display = "none" ;
        menuRef.current.open = false ;
    }

    function hideAllMenu(ignoreList=[]){
        hideMenu(languagesSubMenuRef);
        hideMenu(jsSubMenuRef);
        hideMenu(cssSubMenuRef);
        hideMenu(dbSubMenuRef);
        hideMenu(toolsSubMenuRef);
    }

    function showMenu(menuRef){
        hideAllMenu();
        if(!menuRef.current) return ;
        menuRef.current.style.display = "block" ;
        menuRef.current.open = true ;
    }

    function toggleSubMenu(menuRef){
        if(!menuRef.current) return ;
        if(menuRef.current.open)
            hideMenu(menuRef);
        else
            showMenu(menuRef);
    }

    return (
        <div className="relative items-center">
            <h1 className="text-5xl font-orbitron text-white font-bold">
                <span className="text-accent-500 font-code">./</span>skills
            </h1>
            <div className="flex items-center justify-center">
                <div className="honeycomb">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div onClick={()=>toggleSubMenu(languagesSubMenuRef)} onMouseEnter={()=>showMenu(languagesSubMenuRef)} onMouseLeave={()=>hideMenu(languagesSubMenuRef)} className="hex flex items-center justify-center overflow-hidden" data-id="5">
                            <div className="flex flex-col items-center space-y-4">
                                <CodeIcon className="w-1/3 h-1/3"/>
                                <span className='text-white font-code text-xl hidden lg:block'>LANGUAGES</span>
                            </div>
                        </div>
                        <div onClick={()=>toggleSubMenu(cssSubMenuRef)} onMouseEnter={()=>showMenu(cssSubMenuRef)} onMouseLeave={()=>hideMenu(cssSubMenuRef)} className="hex flex items-center justify-center overflow-hidden" data-id="6">
                            <div className="flex flex-col items-center space-y-4">
                                <CSSIcon className="w-1/3 h-1/3"/>
                                <span className='text-white font-code text-xl hidden lg:block'>CSS</span>
                            </div>
                        </div>
                        <div onClick={()=>toggleSubMenu(jsSubMenuRef)} onMouseEnter={()=>showMenu(jsSubMenuRef)} onMouseLeave={()=>hideMenu(jsSubMenuRef)} className="hex flex items-center justify-center overflow-hidden" data-id="9">
                            <div className="flex flex-col items-center space-y-4">
                                <JSIcon className="w-1/3 h-1/3"/>
                                <span className='text-white font-code text-xl hidden lg:block'>JS</span>
                            </div>
                        </div>
                        <div onClick={()=>toggleSubMenu(dbSubMenuRef)} onMouseEnter={()=>showMenu(dbSubMenuRef)} onMouseLeave={()=>hideMenu(dbSubMenuRef)} className="hex flex items-center justify-center overflow-hidden" data-id="10">
                            <div className="flex flex-col items-center space-y-4">
                                <DBIcon className="w-1/3 h-1/3"/>
                                <span className='text-white font-code text-xl hidden lg:block'>DATABASES</span>
                            </div>
                        </div>
                        <div onClick={()=>toggleSubMenu(toolsSubMenuRef)} onMouseEnter={()=>showMenu(toolsSubMenuRef)} onMouseLeave={()=>hideMenu(toolsSubMenuRef)} className="hex flex items-center justify-center overflow-hidden" data-id="11">
                            <div className="flex flex-col items-center space-y-4">
                                <ToolsIcon className="w-1/3 h-1/3"/>
                                <span className='text-white font-code text-xl hidden lg:block'>TOOLS</span>
                            </div>
                        </div>
                    </div>
                    {/* SUB MENU FOR LANGUAGES */}
                    <HexSubMenu key={"LANG"} passRef={languagesSubMenuRef} items={[
                        {id:1,icon:CPPIcon,name:"C/C++"},
                        {id:2,icon:PythonIcon,name:"Python"},
                        {id:4,icon:JavascriptIcon,name:"JavaScript"},
                    ]}/>
                    
                    {/* SUB MENU FOR CSS FRAMEWORKS */}
                    <HexSubMenu key={"CSS"} passRef={cssSubMenuRef} items={[
                        {id:2,icon:TailwindIcon,name:"Tailwind CSS"},
                        {id:3,icon:BootstrapIcon,name:"Bootstrap"},
                        {id:7,icon:SassIcon,name:"SASS"},
                    ]}/>
                    
                    {/* SUB MENU FOR JS FRAMEWORKS */}
                    <HexSubMenu key={"JS"} passRef={jsSubMenuRef} items={[
                        {id:4,icon:ReactIcon,name:"ReactJS"},
                        {id:8,icon:NextIcon,name:"NextJS"},
                        {id:13,icon:NodeIcon,name:"NodeJS"},
                        {id:14,icon:ExpressIcon,name:"ExpressJS"},
                    ]}/>

                    {/* SUB MENU FOR DATABASES */}
                    <HexSubMenu key={"DB"} passRef={dbSubMenuRef} items={[
                        {id:14,icon:FirebaseIcon,name:"Firebase"},
                        {id:15,icon:MongoDBIcon,name:"MongoDB"},
                        {id:16,icon:MySqlIcon,name:"MySQL"},
                    ]}/>

                    {/* SUB MENU FOR TOOLS */}
                    <HexSubMenu key={"TOOLS"} passRef={toolsSubMenuRef} items={[
                        {id:7,icon:VSCodeIcon,name:"VS Code"},
                        {id:12,icon:FigmaIcon,name:"Figma"},
                        {id:15,icon:PostmanIcon,name:"Postman"},
                        {id:16,icon:GitIcon,name:"Git"},
                    ]}/>
                </div>
            </div>
        </div>
    );
}
 
export default SkillsSection;