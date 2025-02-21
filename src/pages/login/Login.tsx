import React from 'react'
import Container from '../../components/Container/Container'
import { useShoppingCartContext } from '../../context/useShoppingCartContext'

export default function Login() {
    const { handelIsLogin} = useShoppingCartContext()
  return (
    <div>
      <Container >
        <div className=' flex justify-center'>
        <div className='shadow rounded h-100 mt-20 p-5 flex flex-col gap-8 w-110'>
            <h3>Login</h3>
            <div className='flex flex-col gap-2'>
                <label htmlFor="">UserName</label>
                <input type="text" className='bg-indigo-50 rounded p-1 w-100' />
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor="">Password</label>
                <input type="password" className='bg-indigo-50 rounded p-1 w-100' />
            </div>

            <button className='p-2 text-blue-50 bg-emerald-600 rounded w-100 cursor-pointer ' onClick={()=> handelIsLogin() }>Login</button>
        </div>
        </div>
        
      </Container>
    </div>
  )
}
