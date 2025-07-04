import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import Container from "../../components/Container/Container";
import { useEffect, useState } from "react";
import { getProduct } from "../../sevices/api";
import { Product as Iproduct } from "../../Type/servers";
import { useShoppingCartContext } from "../../context/useShoppingCartContext";



function Product() {

  const param = useParams<{id : string}>()

  const [product , setProduct] = useState<Iproduct>()

  const {handleIncreaseProductQty , getProductQty ,handleDecreasProductQty, cartItems , handelRemoveProductQty} = useShoppingCartContext();

  
  

  useEffect(()=> {
    getProduct(param.id as string).then(res => setProduct(res))
  },[])

  return (
    <div>
      <Container>
        <div className="flex flex-col-reverse sm:h-80 mt-10 sm:grid sm:grid-cols-12 shadow rounded-[10px]">
            <div className="col-span-9 p-5 text-right gap-4 flex  flex-col ">
                <h1>{product?.title} </h1>
                <div className="gap-4 flex  flex-col">
                    <p>  قیمت : {product?.price}</p>
                    <p>{product?.description}</p>
                </div>
            </div>

            <div className=" flex gap-5 flex-col sm:col-span-3 bg-sky-50  rounded-r-[10px] p-6">
                <img className="w-full object-cover h-40 rounded-[10px]" src={product?.src} alt="" />
                {
                  getProductQty(param.id as string) === 0 ? (<Button className="rounded cursor-pointer" style={{padding:"0.5rem"}} variant="seconed" onClick={()=> {handleIncreaseProductQty(param.id as string)}} > add </Button> )
                  : (
                    <div className="flex gap-2 flex-col">
                      <div className="flex justify-between">
                      <Button className="rounded cursor-pointer w-10" style={{padding:"0.5rem"}} variant="seconed" onClick={()=> {handleIncreaseProductQty(param.id as string)}} > + </Button>
                        <span>{getProductQty(param.id as string)}</span>  
                      <Button className="rounded cursor-pointer w-10" style={{padding:"0.5rem"}} variant="seconed" onClick={()=> {handleDecreasProductQty(param.id as string)}} > - </Button>
                    
                      </div>
                      <div className="">
                        <Button className="rounded cursor-pointer bg-red-700 p-2 text-stone-50 w-full"  onClick={()=> {handelRemoveProductQty(param.id as string)}}>Remove</Button>
                      </div>
                    </div>
                    
                    
                  )
                  
                }
                
               
                
            </div>

            
        </div>
      </Container>
    </div>
  )
}

export default Product;
