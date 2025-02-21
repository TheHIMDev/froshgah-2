
import Container from '../../components/Container/Container'
import Button from '../../components/button/Button'
import CartItem from '../../components/cartItem/CartItem'
import { useShoppingCartContext } from '../../context/useShoppingCartContext'


function Cart() {

  
  const {cartItems} = useShoppingCartContext()
  

  return (
    <div className=''>
      <Container>
        <div>
          {
            cartItems.map((item)=> <CartItem {...item}/>)
          }

        </div>

        <div className=' flex mt-4  text-right flex-row-reverse justify-between shadow p-5'>
            <p>قیمت کل : 100</p>
            <p>  تخقیف شما : 10</p>
            <p>  قیمت نهایی : 80</p>
        </div>

        <Button className='flex mt-4 self-end p-4 bg-green-600 rounded text-stone-50'> ثبت نهایی</Button>
        
      </Container>
    </div>

  )
}

export default Cart
