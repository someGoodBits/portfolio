const HexSubMenu = ({passRef,items=[]}) => {
    return ( 
        <div ref={passRef} className="hidden pointer-events-none absolute top-0 left-0 w-full h-full">
            {
                items.map(item => (
                    <div key={item.id} className="hex flex items-center justify-center overflow-hidden" data-id={item.id}>
                        <div className="flex flex-col items-center space-y-4">
                            <item.icon className="w-1/3 h-1/3"/>
                            <span className='text-white font-code text-xl hidden lg:block'>{item.name}</span>
                        </div>
                    </div>
                ))
            }
        </div> 
    );
}
 
export default HexSubMenu;