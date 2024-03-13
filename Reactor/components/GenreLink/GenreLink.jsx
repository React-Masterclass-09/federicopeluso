import { Link } from "react-router-dom";
import classes from './GenreLink.module.css'

export default function GenreLink({genre}){
    return (
        <li key={genre.id}>
            <Link to={`genre/${genre.slug}`}  className={' ' +classes.custom_genre_link}>{genre.name}</Link></li>
    )
}