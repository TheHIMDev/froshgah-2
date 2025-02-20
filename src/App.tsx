
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Store from './pages/store/Store'
import Layout from './components/layout/Layout'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import { ShopingCartProvider } from './context/useShoppingCartContext'


function App() {

  return (
      
      <ShopingCartProvider>
        <Layout>
          <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/store' element={<Store/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/product/:id' element={<Product/>}> </Route>
          </Routes>
        </Layout>
      </ShopingCartProvider>
      

  )
}

export default App
