// import React, { useContext } from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import '../components/Comments'
// import { set } from "mongoose";

// const Crud = () => {
//     let { id } = useParams()
// // const [pictures, setPictures] = useState('')
// const [comments, setComments] = useState('')


// useEffect(() => {
//     const getComments = async () => {
//     // const pictures = await axios.get('http://localhost:3001/pictures')
//     const comments = await axios.get('http://localhost:3001/comments')
//     // setPictures(pictures.data)
//     setComments(comments.data)
// }
//     getComments()
// }, [])

// const addComment = (value) => {
//     comments(value)
// }
// return (
//     <div>

//         <div className="details">

//             <div className="main">
//             <h2> {comments.name} </h2>
//             <h2> {comments.description} </h2>
//             <button onClick={addComment}
//             className="comment-button"> Add Comment </button>

//             </div>
//             </div>

//     </div>
// )

// }




// export default Crud;
