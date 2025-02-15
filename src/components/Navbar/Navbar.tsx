import { Link} from "react-router-dom";
import Container from "../Container/Container";

function Navbar() {
    return (
        <>
            <div className="flex items-center h-18 border-b drop-shadow-[4_50px_35px_rgba(0,0,0,0.25)] " >
                <Container>

                    <div className="flex justify-between  flex-row-reverse  ">
                        <ul className="flex flex-row-reverse   ">
                            <li className="ml-4 "><Link  to="/"> خانه</Link></li>
                            <li className="ml-4 "><Link  to="/store">  فروشگاه</Link></li>
                        </ul>

                        <div>
                            <Link to={"/cart"}>
                                <button className="cursor-pointer  p-2 rounded hover:bg-sky-700 hover:text-stone-50"> سبد خرید</button>
                            </Link>
                            
                        </div>
                    </div>

                </Container>


            </div>
        </>
    )
}

export default Navbar ;