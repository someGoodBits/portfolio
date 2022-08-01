const Div = ({className,hover,active,sm,md,lg,xl,children,...props}) => {
    return ( <div {...props}>{children}</div> );
}
 
export default Div;