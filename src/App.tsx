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
              <Route path="/" element={<Products />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/cart" element={<Cart />}/>
              <Route path="/product/:id" element={<Product />}/>
            </Routes>

          <Footer/>
      </Router>
    </>
  )
}

export default App
