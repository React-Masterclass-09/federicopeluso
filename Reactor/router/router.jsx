import { createBrowserRouter } from "react-router-dom";
import routes from "../routes/routes";
import Layout from "../components/Layout";
import Homepage, { gamesLoader } from "../views/Homepage";
import GenreView, { gamesGenreLoader } from "../views/GenreView"


const router = createBrowserRouter ([
    {
        path: routes.home,
        element:<Layout />,
        children:[
            {  
                path: routes.home,
                element:<Homepage />, 
                loader: gamesLoader

            },
            {
                path: routes.genre,
                element: <GenreView />,
                loader: gamesGenreLoader
            }
        ]
    }
])
export default  router ; 