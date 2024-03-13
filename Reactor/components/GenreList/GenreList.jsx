import GenreLink from "../GenreLink/GenreLink"


export default function GenreList({geners}){
    
    return (
        <div>
        {geners && geners.results.map( genre =>  {
            return(
                <GenreLink genre={genre} key={genre.id}/>
            )
        })
        } 
        </div>
    )
}