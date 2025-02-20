import { Link} from "react-router-dom";
import Container from "../Container/Container";
import { useShoppingCartContext } from "../../context/useShoppingCartContext";

function Navbar() {
    const {cartQty} = useShoppingCartContext()
    return (
        <>
            <div className="flex items-center h-18 border-b drop-shadow-[4_50px_35px_rgba(0,0,0,0.25)] " >
                <Container>

                    <div className="flex justify-between  flex-row-reverse  ">
                        <ul className="flex flex-row-reverse   ">
                            <li className="ml-4 "><Link  to="/"> خانه</Link></li>
                            <li className="ml-4 "><Link  to="/store">  فروشگاه</Link></li>
                        </ul>

                        <div className="relative">
                            <Link to={"/cart"}>
                                <img className="w-8 h-8" src="https://img.icons8.com/ios/50/shopping-bag--v1.png" alt="shopping-bag--v1"/>
                                <span className="absolute w-6 h-6 bg-green-500 flex justify-center  items-center rounded-full text-stone-50 top-0 -right-3">{cartQty !== 0 ? cartQty : null }</span>
                            </Link>
                            
                        </div>
                    </div>

                </Container>

            </div>
        </>
    )
}

export default Navbar ;