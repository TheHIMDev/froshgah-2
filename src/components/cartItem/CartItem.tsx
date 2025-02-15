
import Button from '../button/Button'

function CartItem() {
  return (
    <div className='mt-10 flex flex-row-reverse shadow rounded-r-sm'>
      <img 
        className='rounded-r-sm w-50'
        src='https://media.istockphoto.com/id/2163019014/photo/tecnology-world-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=W-I-6efsWmXOzcesfxZD9yPTtM66gRvqNTjAZ9YBtpI='
        alt=''
      />

      <div className='mr-4 w-40 text-right p-2 '>
        <h3>عنوان محصول</h3>
        <div className='flex justify-between mt-10'>
            <Button className=' rounded w-20 ' variant='first'>Remove</Button>
            <Button className=' rounded w-5' variant='seconed'>+</Button>
            <span>{2}</span>
            <Button className=' rounded w-5' variant='seconed'>-</Button>
            
        </div>
        
      </div>

    </div>
  )
}

export default CartItem
