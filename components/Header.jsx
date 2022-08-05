import HeaderNavItem from "./HeaderNavItem";

const Header = () => {
    return (
        <header className="relative w-full h-[6.25rem] flex justify-between items-center">
            <div className="text-3xl font-orbitron font-black">
                <span className="text-accent-500">&gt;</span>
                <span className="text-gray-200">goodbits</span>
                <span className="text-gray-500">_</span>
            </div>

            <nav className="flex items-center">
                <ul className="hidden lg:flex text-lg font-orbitron font-normal space-x-4 text-gray-500">
                    <li>
                        <HeaderNavItem label="about" isActive={true} />
                    </li>
                    <li>
                        <HeaderNavItem label="skills" />
                    </li>
                    <li>
                        <HeaderNavItem label="experience" />
                    </li>
                    <li>
                        <HeaderNavItem label="projects" />
                    </li>
                    <li>
                        <HeaderNavItem label="contact" />
                    </li>
                </ul>
                <div className="ml-3 group w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-accent-500 rounded-md">
                    <svg
                        className="w-[60%] fill-gray-500 group-hover:fill-gray-100"
                        viewBox="0 0 32 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0.765503 0.831074H31.0415V4.83107H4.55001L0.765503 0.831074Z" />
                        <path d="M8.33447 10.8311H31.0415V14.8311H12.119L8.33447 10.8311Z" />
                        <path d="M15.9036 20.8311H31.0416V24.8311H19.6881L15.9036 20.8311Z" />
                    </svg>
                </div>
            </nav>
            <div className="absolute bottom-[-10px] w-full overflow-hidden">
                <svg width="1524" height="22" viewBox="0 0 1524 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        className="stroke-gray-800"
                        d="M1523.56 11H876.694L867.179 1H787.232L776.716 11H413.987L403.741 21H293.281L283.035 11H0.562296"
                    />
                    {/* <!----> */}
                    <path className="fill-gray-800" d="M415.252 14.2495L408.501 21H412.425L419.175 14.2495H415.252Z" />
                    <path className="fill-gray-800" d="M422.823 14.2495L416.073 21H419.996L426.746 14.2495H422.823Z" />
                    <path className="fill-gray-800" d="M430.394 14.2495L423.644 21H427.567L434.317 14.2495H430.394Z" />
                    <path className="fill-gray-800" d="M437.965 14.2495L431.215 21H435.138L441.888 14.2495H437.965Z" />
                    <path className="fill-gray-800" d="M445.536 14.2495L438.786 21H442.709L449.46 14.2495H445.536Z" />
                    <path className="fill-gray-800" d="M453.108 14.2495L446.357 21H450.28L457.031 14.2495H453.108Z" />
                    <path className="fill-gray-800" d="M460.679 14.2495L453.928 21H457.851L464.602 14.2495H460.679Z" />
                    <path className="fill-gray-800" d="M468.25 14.2495L461.499 21H465.423L472.173 14.2495H468.25Z" />
                    <path className="fill-gray-800" d="M475.821 14.2495L469.07 21H472.994L479.744 14.2495H475.821Z" />
                    <path className="fill-gray-800" d="M483.392 14.2495L476.642 21H480.565L487.315 14.2495H483.392Z" />
                    <path className="fill-gray-800" d="M490.963 14.2495L484.213 21H488.136L494.886 14.2495H490.963Z" />
                    <path className="fill-gray-800" d="M498.534 14.2495L491.784 21H495.707L502.458 14.2495H498.534Z" />
                    <path className="fill-gray-800" d="M506.105 14.2495L499.355 21H503.278L510.029 14.2495H506.105Z" />
                    <path className="fill-gray-800" d="M513.677 14.2495L506.926 21H510.849L517.6 14.2495H513.677Z" />
                    <path className="fill-gray-800" d="M521.248 14.2495L514.497 21H518.421L525.171 14.2495H521.248Z" />
                    {/* <!----> */}
                    <path className="fill-gray-800" d="M981.852 1L988.603 7.7505H984.679L977.929 1H981.852Z" />
                    <path className="fill-gray-800" d="M974.281 1L981.031 7.7505H977.108L970.358 1H974.281Z" />
                    <path className="fill-gray-800" d="M966.71 1L973.46 7.7505H969.537L962.787 1H966.71Z" />
                    <path className="fill-gray-800" d="M959.139 1L965.889 7.7505H961.966L955.216 1H959.139Z" />
                    <path className="fill-gray-800" d="M951.568 1L958.318 7.7505H954.395L947.644 1H951.568Z" />
                    <path className="fill-gray-800" d="M943.996 1L950.747 7.7505H946.824L940.073 1H943.996Z" />
                    <path className="fill-gray-800" d="M913.712 1L920.462 7.7505H916.539L909.789 1H913.712Z" />
                    <path className="fill-gray-800" d="M936.425 1L943.176 7.7505H939.253L932.502 1H936.425Z" />
                    <path className="fill-gray-800" d="M928.854 1L935.605 7.7505H931.681L924.931 1H928.854Z" />
                    <path className="fill-gray-800" d="M921.283 1L928.034 7.7505H924.11L917.36 1H921.283Z" />
                    <path className="fill-gray-800" d="M906.141 1L912.891 7.7505H908.968L902.218 1H906.141Z" />
                    <path className="fill-gray-800" d="M898.57 1L905.32 7.7505H901.397L894.646 1H898.57Z" />
                    <path className="fill-gray-800" d="M890.998 1L897.749 7.7505H893.826L887.075 1H890.998Z" />
                    <path className="fill-gray-800" d="M883.427 1L890.178 7.7505H886.255L879.504 1H883.427Z" />
                    <path className="fill-gray-800" d="M875.856 1L882.607 7.7505H878.684L871.933 1H875.856Z" />
                </svg>
            </div>
        </header>
    );
};

export default Header;
