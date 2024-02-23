import { Link } from "react-router-dom";


export default function Card({post}){
    console.log(post.id);
    return (
        <>
       <div className="col-6 col-sm-3 py-2">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"  >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h1 className="">{post.title}</h1>
          </div>
          <ul className="list-unstyled mt-auto">
            <li className="align-items-center">
            <Link  className="btn btn-primary" to={`/detail/${post.id}`}>Dettaglio</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}