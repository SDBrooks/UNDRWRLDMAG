import React from "react";
import axios from "axios";
import Pictures from "../components/Pictures";
import Comments from '../components/Comments'
import { useState, useEffect } from 'react'

const Home = (props) => {
    
     console.log(props.comments)
   
    if (props.pictures && props.comments)
     return (
        <div>
         {/* <h1> Home </h1> */}
            <div>
                 {props.pictures.map((picture) => (
            <Pictures 
            coverArt = {picture.coverArt}
            description = {picture.description}/>
                 ))}
                 {props.comments.map((comment) => (
                     <Comments 
                     name = {comment.name}
                     description = {comment.description}/>
                 ))}
                
                {/* <h5>{props.pictures}</h5>
                <h6>{props.comments}</h6> */}
                {/* <img classname="home-image" src={props.pictures.coverArt} alt="null"/> */}
            </div>
                
                 
        
                </div>
    )
    };

    export default Home;

        {/* {picture !== undefined &&
            <div>
                <img className="feed-image" src={picture.image}/>
                <h5> {picture.description}</h5>

                </div>
                } */}

                 // console.log(props)
    // console.log(props.pictures)
   
    // make variable called pictures props.pictures
    // take pictures, keep in useState
    //have useEffect to set state, every time it loads to set state to of pictures




    // const [pictures, setPictures] = useState()

    // useEffect(() => {
    //     let pictures 
    //     const handlePictures = async () => {
    //         const pictures = await getPictures()
    //         setPictures(data)
    //       }
    //       handlePictures()
        // const setPictures = async () => {
        //     const picturesData = await axios.get('http://localhost:3001/pictures')
        //     setPictures(picturesData.data)
        //   }
        //   setPictures()
       
        // const getPictures = await axios.set('http://localhost:3001')
        // setPictures()
    // })

    // <h3> {pictures.coverArt} </h3>
    {/* <h3> {props.description} </h3> */}
    {/* <h4> {props.comments} </h4> */}

    {/* <div className="container-grid"> */}
{/*                    
       <h4> {props.coverArt}</h4>
       <h5> {props.description}</h5> */}
       
       