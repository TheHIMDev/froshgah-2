import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import Container from "../../components/Container/Container";
import { useEffect, useState } from "react";
import { getProduct } from "../../sevices/api";
import { Product as Iroduct } from "../../Type/servers";


function Product() {

  const param = useParams<{id : string}>()

  const [product , setProduct] = useState<Iroduct>()

  useEffect(()=> {
    getProduct(param.id as string).then(res => setProduct(res))
  },[])

  return (
    <div>
      <Container>
        <div className="h-80 mt-10 grid grid-cols-12 shadow rounded-[10px]">
            <div className="col-span-10 p-5 text-right gap-4 flex  flex-col ">
                <h1>{product?.title} </h1>
                <div className="gap-4 flex  flex-col">
                    <p>  قیمت : {product?.price}</p>
                    <p>{product?.description}</p>
                </div>
            </div>

            <div className=" flex gap-5 flex-col col-span-2 bg-sky-50  rounded-r-[10px] p-6">
                <img className="w-50 h-40 rounded-[10px]" src={product?.src} alt="" />
                <Button className="rounded cursor-pointer" style={{padding:"0.5rem"}} variant="seconed" onClick={()=> alert("show")} > add </Button>
            </div>

            
        </div>
      </Container>
    </div>
  )
}

export default Product;
