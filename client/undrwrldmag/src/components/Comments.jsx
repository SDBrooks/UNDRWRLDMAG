import React from "react";

export default function Comments(props) {
    return (
        <div className="comment">
            <h3> {props.name}</h3>
            <h4> {props.description} </h4>
        </div>
    )
}