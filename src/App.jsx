import React from 'react'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
// import About from './pages/About'
import Product from './pages/Product'
import Service from './pages/Service'
import Contact from './pages/Contact'
import More from './pages/More'
import Footer from './component/Footer'
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/Bags-Website' Component={Home}/>
        <Route path='/product' Component={Product}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/service' Component={Service}/>
        <Route path='/more' Component={More}/>
      </Routes>
      {/* <Footer/> */}
    </Router>
  )
}

export default App