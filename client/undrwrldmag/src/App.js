import { Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';
import Home from './pages/Home'
import { useEffect, useState } from 'react';
// import Comments from './components/Comments';
import { PicturesContext, CommentsContext } from './components/Context'
import axios from 'axios';


function App() {
const [pictures, setPictures] = useState(' ')
const [comments, setComments] = useState(' ')

useEffect(() => {
  const getPictures = async () => {
    const picturesData = await axios.get('http://localhost:3001/pictures')
    setPictures(picturesData.data)
  }
  getPictures()

  const getComments = async () => {
    const commentsData = await axios.get('http://localhost:3001/comments')
    setComments(commentsData.data)
  }
  getComments()
}, [])

console.log(comments, pictures)

  return (
    // <PicturesContext.Provider value = {{pictures, setPictures}}>

    // <CommentsContext.Provider value = {{comments, setComments}}>

   <div className="App">
     {/* <main>
       <Routes>
         <Route path='/pictures' element={<Home />}/>
      </Routes>
    </main>
    </div> */}
<h1> + UNDRWRLD MAG + </h1>

<Home  pictures={pictures}
      comments={comments}/>

</div>

  //  </CommentsContext.Provider> 
  //  </PicturesContext.Provider>
   
  );
}


export default App;
