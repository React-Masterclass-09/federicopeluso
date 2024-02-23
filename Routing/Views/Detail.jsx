import { useLoaderData } from "react-router-dom";

export default  function Detail() {
    const post = useLoaderData();
    return (    
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Dettaglio</h1>
                </div>
            </div>
            <div className="row content-justify-center">
                <div className="col12 col-md-8">
                     {post.title}
                </div>
            </div>
        </div>
    )
}

export async function loaderPost({ params }){
    const post = await getPost( params.id );
    return post;
}

async function getPost( id ){
    const promise = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const json = await promise.json();
    
    return json ;
}