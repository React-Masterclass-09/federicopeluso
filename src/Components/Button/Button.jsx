import { useState } from 'react'

export default function Button({title, op}){
    
    
    const [counter, setCounter] = useState('');
    
//    const  incDiUno = () =>{   return ( op == 'diff')?setCounter(counter-1):setCounter(counter+1)}
const  incDiUno = () =>{   return ( op == 'diff')?setCounter('xxx'):setCounter('yyy')}
    return(
    <>
    <p>{counter}</p>
    <button type="button" className="btn btn-primary" onClick={incDiUno}>{title}</button>
    </>
    )
}