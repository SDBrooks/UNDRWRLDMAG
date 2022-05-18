import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Home from './pages/Home';
import Pictures from './components/Pictures';


const BASE_URL = 'http://localhost:3001'

function App() {
let { id } = useParams()
const [pictures, setPictures] = useState('')
const [comments, setComments] = useState('')

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

const createComment = async (e, comments) => {
  //e.preventDefault();
  await axios.post(`${BASE_URL}/comments/create`, e, comments)
}

const getAllComments = async (e) => {
  e.preventDefault();
  const res = await axios.get(`${BASE_URL}/comments`);
  setComments(res.data.comments)
// useEffect(() => {
//   const getComments = comments.find((comments) => comments.id === parseInt(id)
// )
// setComments(getComments)

// }, [])
}

const updateComment = async (e, comments) => {
  e.preventDefault();
  axios.put(`${BASE_URL}/comments/${comments.id}`)
}

const deleteComment = async (e, comments) => {
  // e.preventDefault();
  await axios.delete(`${BASE_URL}/comments/${comments.id}`)
  window.location.reload();
};

// const dummy = {
//    name: "Demo",
//    description: "Test comment",
//    image:"6279a9fe564299e203a90e40"
//   }

// CRUD FUNCTIONALITY
  
return (
   <div className="App">
      <h1> + UNDRWRLD MAG + </h1>
      <Home  pictures={pictures}
      comments={comments}/> 
      <div className='buttons'>
      <button name='create-comment' onClick={(e) => createComment(e, comments)}> Add Comment </button>

      <button name='view-comments' onClick={(e) => getAllComments(e, comments)}> View Comments </button>

      <button name='update-comment' onClick={(e) => updateComment(e, comments)}> Edit Comment </button>
      
      <button name='delete-comment' onClick={(e) => deleteComment(e, comments)}> Delete Comment </button>
      </div>

</div>
   
  );
}


export default App;

