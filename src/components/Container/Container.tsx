interface Icontiner {
    children : React.ReactNode
}

function Container( {children} : Icontiner ) {
    return (
        <div className="container mx-auto px-10">
            {children}
        </div>
    )
}

export default Container ;