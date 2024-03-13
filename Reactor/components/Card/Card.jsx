import classes from './Card.module.css'
export default function Card({game}){
    return (
        <div className="col-12 col-md-3">
            <div className={classes.card_custom}>
                <img src={game.background_image} loading='lazy' alt='immagine gioco' className={'img-fluid '  + classes.card_img }/>
                <p className={'text-secondaryC ' + classes.card_text}>{game.name}</p>
            </div>
        </div>
     )
}
