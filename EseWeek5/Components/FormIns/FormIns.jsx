 

export default function FormIns({handleTitle, handleDescription, handlePosts, title, description}) {

    return(
        <form onSubmit={handlePosts}>
          <div className="mb-3">
            <label htmlFor="Titolo" className="form-label">Titolo</label>
            <input name="title" value={title} onChange={handleTitle} type="text" id="title"  className="form-control"   aria-describedby="emailHelp" />
           </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Descrizione</label>
            <textarea name="description" value={description} onChange={handleDescription} className="form-control"  id="description" />
          </div>
 
          <button type="submit"  className="btn btn-primary">Conferma</button>
        </form>
    )
}