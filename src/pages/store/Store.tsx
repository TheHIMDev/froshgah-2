import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { useEffect, useState } from "react";
import { getProducts } from "../../sevices/api";
import { Product } from "../../Type/servers";

function Store() {
    const [products , setProducts] = useState<Product[]>([])

    useEffect(()=>{
        getProducts().then(res => setProducts(res))
    },[])

    return (
        <div>
            <Container>
                <h1 className="text-right mt-5"> جدیدترین محصولات</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6 ">
                    
                    {
                        products.map((item)=>(
                            <Link to={`/product/${item.id}`}>
                                <ProductItem {...item}/>
                            </Link>
                        ))
                    }

                
                    
                </div>
            </Container>
            
           
        </div>
    )
}

export default Store ;