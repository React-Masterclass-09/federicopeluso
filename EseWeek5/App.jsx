import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Hader'
import Sezione from './Components/Sezione/Sezione'
export default  function App() {
    return (
        <>
        <div className='container'>
            <Navbar />
            <Header />
            <Sezione />
        </div>
        </>
    )

}
 