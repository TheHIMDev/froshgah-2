import React from 'react'
import { useShoppingCartContext } from '../../context/useShoppingCartContext'
import { Navigate, Outlet } from 'react-router-dom'

function PrivetRout() {
    const {isLogin} = useShoppingCartContext()
  return (
    <div>
      {isLogin ? <Outlet/> : <Navigate to="/login"/>}
    </div>
  )
}

export default PrivetRout
