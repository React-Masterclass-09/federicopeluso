
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import List from "../components/List/List";


export default function GenreView(){
    
    
    const games = useLoaderData();

    const {slug} = useParams();
    return (
        <>
        <Header title={slug} subtitle='ciao' games={games}/>
        <List games={games} />
        </>
    )
}


// Prima chiamata per tutti i giochi
export async function gamesGenreLoader({params}){
    const API_KEY = import.meta.env.VITE_API_KEY;
    const promise = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&genres=${params.slug}`);
    const json = await promise.json();
    return json.results;
}