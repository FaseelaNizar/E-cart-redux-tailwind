import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Pnf from './pages/Pnf'
import View from './pages/View'
import Wishlist from './pages/Wishlist'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/wishlist' element={<Wishlist/>} />
      <Route path='/:id/view' element={<View/>} />
      <Route path='/*' element={<Pnf/>} />

    </Routes>
    {/* footer */}
    <Footer/>
    </>
  )
}

export default App
