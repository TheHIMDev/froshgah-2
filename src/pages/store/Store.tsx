import Container from "../../components/Container/Container";
import ProductItem from "../../components/productItem/ProductItem";

function Store() {
    return (
        <div>
            <Container>
                <h1 className="text-right mt-5"> جدیدترین محصولات</h1>

                <div className="grid grid-cols-4 gap-4 mt-6 ">
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>
            </Container>
            
           
        </div>
    )
}

export default Store ;