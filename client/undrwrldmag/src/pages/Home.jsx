import axios from "axios";
import { useEffect } from "react";

const Home = (props) => {

    console.log(props)
    console.log(props.pictures)

    return (
        <div>
            <h1> Home </h1>
            {/* {picture !== undefined &&
            <div>
                <img className="feed-image" src={picture.image}/>
                <h5> {picture.description}</h5>

                </div>
                } */}
        </div>
    )
    };

    export default Home;
