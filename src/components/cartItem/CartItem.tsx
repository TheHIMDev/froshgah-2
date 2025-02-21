
import { useEffect, useState } from 'react';
import {  useShoppingCartContext } from '../../context/useShoppingCartContext'
import Button from '../button/Button'
import { Product as Iproduct} from '../../Type/servers';
import { getProduct } from '../../sevices/api';
import { Link } from 'react-router-dom';

interface Icartitem {
  id: number | string ,
  qty: number
}



function CartItem({id,qty}:Icartitem) {

  const [product , setProduct] = useState<Iproduct>()

  useEffect(()=> {
    getProduct(id).then(res => setProduct(res))
  },[])

  const {handleIncreaseProductQty , handleDecreasProductQty ,handelRemoveProductQty}= useShoppingCartContext();
  return (
    
    <div className='mt-10 flex flex-row-reverse shadow rounded-r-sm'>

    <Link to={`/product/${id}`}>
      <img 
        className='rounded-r-sm w-50'
        src='https://media.istockphoto.com/id/2163019014/photo/tecnology-world-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=W-I-6efsWmXOzcesfxZD9yPTtM66gRvqNTjAZ9YBtpI='
        alt=''
      />
    </Link>
      

      <div className='mr-4 w-40 text-right p-2 '>
        <h3>{product?.title} </h3>
        <div className='flex justify-between mt-10'>
            <Button className=' cursor-pointer rounded w-20 ' variant='first' onClick={()=> {handelRemoveProductQty(id)}}>Remove</Button>
            <Button className=' cursor-pointer rounded w-5' variant='seconed' onClick={()=> {handleIncreaseProductQty(id)}}>+</Button>
            <span>{qty}</span>
            <Button className=' cursor-pointer rounded w-5' variant='seconed' onClick={()=> {handleDecreasProductQty(id)}}>-</Button>
            
        </div>
        
      </div>

    </div>
  )
}

export default CartItem
