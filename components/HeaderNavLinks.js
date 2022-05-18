const HeaderNavLinks = ({ label = "", isActive = false }) => {
    return isActive ? (
        <span className="text-white font-black cursor-pointer">
            <span className="text-accent-500 font-code">./</span>
            {label}
        </span>
    ) : (
        <span className="hover:text-white cursor-pointer">{label}</span>
    );
};

export default HeaderNavLinks;
