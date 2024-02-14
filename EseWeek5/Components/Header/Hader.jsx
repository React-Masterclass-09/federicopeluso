import Button from "../Button/Button.jsx"
import classes from './Header.module.css'
import { useState } from 'react'

export default  function Header() {
    const [counter,setCounter] =  useState(0);

    return (
        <>
        <div className="container-fluid">
            <div className="col-12 col-md-6 d-flex align-item-center justify-content-center">
                <h1> Gestione ToDo list</h1>
            </div>    
            <div className={"col-12 col-md-6" + classes.header+"!important"} >
                <Button  title='Agg1'  counter={counter} setCounter={setCounter}/>
            </div>
        </div>
        </>
    )
}