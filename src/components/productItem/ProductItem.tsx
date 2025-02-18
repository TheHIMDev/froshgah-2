import { Product } from "../../Type/servers"

type productItem = Product ;

function ProductItem({title,src,description,price}:productItem ) {
  return (
    <div className='shadow rounded pb-2'>
      <img className='rounded-t' src={src}/>
      <div className='flex justify-between flex-col p-4'>
        <div className='flex justify-between flex-row-reverse'>
            <h3>{title} </h3>
            <span>{price}$</span>
        </div>
        

        <div className='mt-6 text-right'>
           <p className='line-clamp-1'> {description}</p>
        </div>

      </div>
    </div>
  )
}

export default ProductItem
