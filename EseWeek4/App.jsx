import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Articoli from './Components/Articoli/Articoli'
import Footer from './Components/Footer/Footer'

// props : propietà che un componente padre può mandare a componente figlio 
// objname , sraà disponibile in Nav, in nav viene preso come oggetto con tutti gli attributi aggiunti in <NAvbar />

export default  function App() {
 
// useState hook -> gestiste lo state di un dato , return array(el, callback)
  return (
    <>
    <div className='container'>
    <Header />
        <Navbar  />
        <section className="container my-5 bg-danger">Hello Word</section>
        <Articoli />
        
    <Footer />
    </div>
    </>
  )
}


