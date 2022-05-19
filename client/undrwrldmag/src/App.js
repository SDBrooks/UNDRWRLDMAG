import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Pictures from './components/Pictures';
import Comments from './components/Comments';


const BASE_URL = 'http://localhost:3001'

function App(props) {
let { id } = useParams()
const [pictures, setPictures] = useState()
const [comments, setComments] = useState()
const [formValues, setFormValues] = useState({ name: '', description: '' }) 
const [creating, setCreating] = useState()
const [updating, setUpdating] = useState()

const makeComment = (e, id) => {
  e.preventDefault();
  setCreating(id)
}

const makeUpdate = (e, id) => {
  e.preventDefault();
  setUpdating(id)
}

const handleChange = (e) => {
  setFormValues({ ...formValues, [e.target.name]: e.target.value })
}

const handleSubmit = (e) => {
  e.preventDefault(); 
  createComment(formValues)  
  setFormValues({ name: '', description: '' })
  setCreating(false)
}
const handleSubmitUp = (e, id) => {
  e.preventDefault(); 
  updateComment(e, id, formValues)  
  setFormValues({ name: '', description: '' })
  setUpdating(false)
}

useEffect(() => {
  
  const getPictures = async () => {

    const picturesData = await axios.get('http://localhost:3001/pictures')
    setPictures(picturesData.data)
  }
  getPictures();

  const getComments = async () => {

    const commentsData = await axios.get('http://localhost:3001/comments')
    setComments(commentsData.data)
  }
  getComments()
}, [])
// console.log(comments, pictures)

// CRUD FUNCTIONALITY 

const createComment = async (comments) => {
  //e.preventDefault();
  await axios.post(`${BASE_URL}/comments/create`, comments)
}

const getAllComments = async (e) => {
  e.preventDefault();
  const res = await axios.get(`${BASE_URL}/comments`);
  setComments(res.data.comments)

// }, [])
}

const updateComment = async (e, id, comments) => {
  e.preventDefault();
  axios.put(`${BASE_URL}/comments/${id}`, comments)
}

const deleteComment = async (e, id) => {
  // e.preventDefault();
  await axios.delete(`${BASE_URL}/comments/${id}`)
  window.location.reload();
};

// CRUD FUNCTIONALITY

return (
   <div className="App">
      
      <h1> + UNDRWRLD MAG + </h1>
      
      <div>

{ pictures && comments &&
  <div className="cover-art-card">
     {pictures.map((picture) => (
       <div>
<Pictures 
coverArt = {picture.coverArt}
description = {picture.description}/>
<button name='makecomment' onClick={(e) => makeComment(e, picture._id)}> Add Comment </button>
{creating == picture._id && <div className='form'>
        <form onSubmit={handleSubmit}>

        
        <input 
        type="text"
        name="name"
        onChange={handleChange}
        value={formValues.name}/>
        
        <input 
        type="text"
        name="description"
        onChange={handleChange}
        value={formValues.description}/>

        <button type='submit'> Submit </button>
        
      </form> 
     
      </div>}
</div>
     ))}
     <div className="comments">
     {comments.map((comment) => (
       <div>
       <Comments 
         name = {comment.name}
         description = {comment.description}/>
         
        { updating == comment._id &&  <form onSubmit={(e) => handleSubmitUp(e, comment._id)}>

        
        <input 
        type="text"
        name="name"
        onChange={handleChange}
        value={formValues.name}/>
        
        <input 
        type="text"
        name="description"
        onChange={handleChange}
        value={formValues.description}/>

        <button type='submit'> Submit </button>
        
      </form> 
}
      <div className='buttons'>

      <button name='update-comment' onClick={(e) => makeUpdate(e, comment._id)}> Edit Comment </button>
      
      <button name='delete-comment' onClick={(e) => deleteComment(e, comment._id)}> Delete Comment </button>
      </div>
      </div>
     ))}

  </div>
</div>}
</div>
      
    

</div>
   
  );
}


export default App;

