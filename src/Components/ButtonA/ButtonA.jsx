
export default function ButtonA({el}){
    return(
    <>
        <div className="col-6 col-sm-3 mt-2" key={el.id}>
            <div className="card"  >
                <img className="card-img-top" src={el.url}  alt={el.url} ></img>
                 <div className="card-body"  >
                    <div className="pe-2">
                <p className="card-text">{el.name} </p>
                </div>
              </div>
            </div>
            </div>
    </>
    )
}