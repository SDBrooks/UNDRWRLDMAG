import React from 'react'

export default function Pictures(props) {
    return (
        <div className="picture">
       <img src= {props.coverArt} alt={props.coverArt}/>
        <h4> {props.description} </h4>
    </div>
    )
}