
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import Account from './Pages/Account'
import Singlepro from './Pages/Singlepro'
import Navbar from './Pages/Navbar'
import { useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
    const [spro , setSpro] = useState([])
    const [cart , setCart] = useState([])
    const [phead , setPhead] = useState('')
    const [user , setUser] = useState (0)
    // const [hsf , setHsf] = useState()

  AOS.init();

  return (
 <>
    <BrowserRouter>
    <Navbar cart={cart} setCart={setCart}/>
    <Routes>

      <Route>
        <Route index element={<Home spro={spro} setSpro={setSpro}  phead={phead} setPhead={setPhead}/>}></Route>
        <Route path='/shop' element={<Shop spro={spro} setSpro={setSpro} phead={phead} setPhead={setPhead} />}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} user={user} setUser={setUser}/>}></Route>
        <Route path='/account' element={<Account user={user} setUser={setUser}/>}></Route>
        <Route path='/propage' element={<Singlepro spro={spro} setSpro={setSpro} cart={cart} setCart={setCart} phead={phead} setPhead={setPhead}/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
 </>
  )
}

export default App
