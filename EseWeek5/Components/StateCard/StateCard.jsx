import   classes from '../Header/Header.module.css'

export default function StateCard({post, removePost}){
    const getId = (id) =>{
        console.log(id);
         
    } 
 
    return (
        <>
            <div className="card"  >
              <img  className={"card-img-top"+classes['header']}/>
              <div className="card-body">

                <h5 className="card-title">{post.title}</h5>
                <p className="card-text lead">id: {post.id}</p>
                <p className="card-text lead">{post.description}</p>
                <a href="#" className="btn btn-primary" onClick={() => removePost(post.id)}>Rimuovi</a>
              </div>
            </div>
        </>
    )
}