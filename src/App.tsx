import './App.css'
import About from './ui_components/About'
import Footer from './ui_components/Footer'
import Navbar  from './ui_components/Navbar'
import Products from './ui_components/Products'
import Product from './ui_components/Product'
import Contact from './ui_components/Contact'
import Login from './ui_components/Login'
import Cart from './ui_components/Cart'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
          <Navbar/>
            <Routes>
              <Route path="/store-ui/" element={<Products />}/>
              <Route path="/store-ui/about" element={<About />}/>
              <Route path="/store-ui/contact" element={<Contact />}/>
              <Route path="/store-ui/login" element={<Login />}/>
              <Route path="/store-ui/cart" element={<Cart />}/>
              <Route path="/store-ui/product/:id" element={<Product />}/>
            </Routes>

          <Footer/>
      </Router>
    </>
  )
}

export default App
