import { useState } from 'react'

export default function Button({title, op}){
    
    
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState([1,2,3]);
    
//    const  incDiUno = () =>{   return ( op == 'diff')?setCounter(counter-1):setCounter(counter+1)}
const  incDiUno = () =>{   return ( op == 'diff')?setCounter(counter+1):setCounter(counter-1)}

const  incDiUno2 = () =>{
    setCounter( (prev) => [...prev,4])
}
    return(
    <>
    <p>{counter}</p>
        <button type="button" className="btn btn-primary" onClick={incDiUno}>{title}</button>

        <p>{counter2}</p>
        <button type="button" className="btn btn-primary" onClick={incDiUno2}>{title}</button>
    </>
    )
}