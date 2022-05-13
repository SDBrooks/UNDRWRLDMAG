import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Pictures from './components/Pictures';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home'

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

  return (
   <div className="App">
      <h1> + UNDRWRLD MAG + </h1>
      <Home  pictures={pictures}
      comments={comments}/> 
    {/* {setPictures.map((pictures => {
      return <Home pictures = {pictures} comments = {comments}/>
    }))} */}
    


</div>
   
  );
}


export default App;

