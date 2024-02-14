
import { useState } from "react"
import Button from "../Button/Button.jsx"
import ButtonA from "../ButtonA/ButtonA.jsx"
import Card from "../Card/Card.jsx"

export default function CardA(props){
    const[ mycard, setMycard ] = useState('');
    const setAv = () =>{  
        //document.getElementById
        //const el = document.querySelector("#"+{props.myid});
        setMycard(props.animals.map( (el) => {
            return (
                <ButtonA key={el.id} el={el}/>
            )
        }));
    } 
    return(
<>
<button type="button" className="btn btn-primary" onClick={setAv}>{props.title}</button>
<div id={props.myid} >{mycard}</div>
</>
    )
    
}