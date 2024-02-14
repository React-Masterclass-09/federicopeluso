import { useState } from 'react'

import Button from "../Button/Button.jsx"

export default function Header(){

    return(
    <>
    
    <header className="navbar navbar-expand-md navbar-dark bd-navbar">
        <Button title='Clicca qui decr' op='diff'   />
        <Button title='Clicca qui inc'  op='add'   />
 
    </header>
    
    </>
    )
}