
import Button from "../Button/Button.jsx"
import ButtonA from "../ButtonA/ButtonA.jsx"
export default function Card(props){
    
    return(
<>
<div className="row" key='1'>
    {props.animals.map( el =>{
        return ( 
            <ButtonA  key={el.id} el={el}/>
        )
        }
    )}
</div>
</>
    )
    
}