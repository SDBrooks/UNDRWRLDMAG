import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Pictures from './components/Pictures';

const BASE_URL = 'http://localhost:3001'

function App() {

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
console.log(comments, pictures)

// CRUD FUNCTIONALITY 

const createComment = async (e) => {
  //e.preventDefault();
  await axios.post(`${BASE_URL}/comments`)
}

const getAllComments = async () => {
  const res = await axios.get(`${BASE_URL}/comments`);
  setComments(res.data.comments)
}

const updateComment = async (e) => {
  e.preventDefault();
  axios.put(`${BASE_URL}/comments/:id${e.id}`)
}

const deleteComment = async (e) => {
  // e.preventDefault();
  await axios.delete(`${BASE_URL}/comments/:id${e.id}`)
  window.location.reload();
};

// CRUD FUNCTIONALITY
  
return (
   <div className="App">
      <h1> + UNDRWRLD MAG + </h1>
      <Home  pictures={pictures}
      comments={comments}/> 
      <div className='buttons'>
      <button name='create-comment' onClick={() => createComment(comments)}> Add Comment </button>
      <button name='view-comments' onClick={() => getAllComments(comments)}> View Comments </button>
      <button name='update-comment' onClick={() => updateComment(comments)}> Edit Comment </button>
      <button name='delete-comment' onClick={() => deleteComment(comments)}> Delete Comment </button>
      </div>

</div>
   
  );
}


export default App;

