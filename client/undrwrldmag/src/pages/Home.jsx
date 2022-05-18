import React from "react";
import axios from "axios";
import Pictures from "../components/Pictures";
import Comments from '../components/Comments'
import '../components/style/Home.css'
import { useState, useEffect } from 'react'

const Home = (props) => {
    
     console.log(props.comments)
     
    if (props.pictures && props.comments)

     return (
        <div>

            <div className="cover-art-card">
                 {props.pictures.map((picture) => (
            <Pictures 
            coverArt = {picture.coverArt}
            description = {picture.description}/>
                 ))}
                 <div className="comments">
                 {props.comments.map((comment) => (
                     <Comments 
                     name = {comment.name}
                     description = {comment.description}/>
                 ))}
              </div>
            </div>
         </div>
    )
    };
    

    export default Home;
