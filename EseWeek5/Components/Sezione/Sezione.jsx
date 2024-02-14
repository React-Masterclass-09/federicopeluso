import { useState } from 'react'
import StateCard from "../StateCard/StateCard.jsx"
import FormIns from "../FormIns/FormIns.jsx"
import Button from '../Button/Button.jsx';



export default  function Sezione() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [posts, setPosts] = useState([{id:1, title : 'Primo Titolo', description: 'Prima Desc'}]);
    const handleTitle = (e) => {
        setTitle (e.target.value);
    }
    const handleDescription = (e) => {
        setDescription (e.target.value);
    }
    const handlePosts = (event) =>{
        event.preventDefault();
     
         let len = posts.length + 1 ;
        setPosts ( (prev,len) => [...prev,{id: ( prev[ 0 ].id+1 ), title,description}]
            //posts.push(arr);
        ) ; 
        setTitle('');
        setDescription('');
    }
    const removePost = (id) =>{
        console.log(id);
    }
    return (
        <>
    
        <div className="container my-5">
            <div className="row">
                <div className="col-12 text-center mb-3">Titolo generale</div>
                <div className="col-12 col-md-6">
                    Form Ins/Upd
                </div>

                <div className="col-12 col md-6">
                    {posts.sort( (a,b)=> b.id - a.id).map( (el,i) => {
                     return  (
                        <StateCard  key={i} post={el} removePost={removePost} />
                     )
                    })}
                    
                    
                </div>
                <div className="col12 col-md-6">
                    <FormIns   handleTitle={handleTitle} handleDescription={handleDescription} handlePosts={handlePosts} title={title} description={description}/>
                </div>
            </div>
        </div>
        </>
    )
}