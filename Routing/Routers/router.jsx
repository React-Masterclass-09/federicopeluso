
import { createBrowserRouter } from 'react-router-dom';

import Homepage , { loaderPosts } from '../Views/Homepage';
import Info from '../Views/Info';
import Detail , { loaderPost } from '../Views/Detail';
import Layout from '../Components/Layout.jsx';
import Card from '../Components/Card/Card.jsx';



const router = createBrowserRouter ([
    {
        path:'/',
        element:<Layout />,
        children:[
            { path:'/', element:<Homepage/>, loader: loaderPosts },
            { path:'/info', element:<Info/> },
            { path:'/detail/:id', element:<Detail/>, loader: loaderPost }
        ]
    }
]
)


export default  router ; 