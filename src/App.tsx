
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Store from './pages/store/Store'
import Layout from './components/layout/layout'

function App() {
  

  return (
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
         <Route path='/store' element={<Store/>}></Route>
       </Routes>
      </Layout>

  )
}

export default App
