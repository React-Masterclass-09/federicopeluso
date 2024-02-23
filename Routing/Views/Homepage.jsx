import { useLoaderData  } from "react-router-dom";
import Card from "../Components/Card/Card";


export default  function Homepage() {
    const posts = useLoaderData();
    
return (    
    <>
    <h1>Homepage</h1>
    <div className="container px-4 py-5" id="custom-cards">
    <h2 className="pb-2 border-bottom">Elenco posts</h2>
        <div className="row ">
    {
        posts.map( (el,i) => { return ( <Card key={i} post={el}></Card> ) } )
    }
    </div>
    </div>
    
    </>
)
}



export   async function loaderPosts(){
    const promise = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const json = await promise.json();
    return json ;
}

 