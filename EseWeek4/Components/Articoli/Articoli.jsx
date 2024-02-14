
import Button from "../Button/Button.jsx"
import Card from '../Card/Card'
import CardA from '../CardA/CardA'
export default function Articoli(){
    const animals = [
        {
            id: 0,
            name: "Leone",
            available: true,
            url: "https://picsum.photos/200"
        },
        {
            id: 1,
            name: "Tigre",
            available: false,
            url: "https://picsum.photos/201"
        },
        {
            id: 2,
            name: "Zebra",
            available: true,
            url: "https://picsum.photos/202"
        },
        {
            id: 3,
            name: "Orso",
            available: false,
            url: "https://picsum.photos/203"
        },
        {
            id: 4,
            name: "Giraffa",
            available: true,
            url: "https://picsum.photos/203"
        },
    ];

   const AV =  animals.filter( (el) => { return el.available===true } );
   const NAV = animals.filter( (el) => { return el.available!==true } );

    return(
        <>
<div className="card text-left" >
  <div className="card-body">
    <h5 className="card-title">Sezione Articoli</h5>
    <p className="card-text"  >E' la sezione interessante</p>
    
    </div>
</div>

<Card  animals={animals}/>
<CardA  animals={AV} op='AV' myid='ButtAVId' title='Available' />
<CardA  animals={NAV} op='NAV' myid='ButtNAVId' title='Not Available'/>
</>
    )
    
}