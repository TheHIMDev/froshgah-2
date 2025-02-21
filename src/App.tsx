
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Store from './pages/store/Store'
import Layout from './components/layout/Layout'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import { useShoppingCartContext } from './context/useShoppingCartContext'
import PrivetRout from './components/privetRout/PrivetRout'
import Login from './pages/login/Login'


function App() {

  const {isLogin} = useShoppingCartContext();
  return (
      
      
        <Layout>
          <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/store' element={<Store/>}></Route>
          <Route path='/login' element={isLogin ? <Navigate to="/"/> : <Login/>}></Route>
          <Route element={<PrivetRout/>}>
            <Route path='/cart' element={<Cart/>}></Route>
          </Route>
          <Route path='/product/:id' element={<Product/>}> </Route>
          </Routes>
        </Layout>
  
      

  )
}

export default App
