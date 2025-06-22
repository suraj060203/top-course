import React from "react";
import { FcLike } from "react-icons/fc";
const Card = ({course})=>{
    return(
        <div>h
            <div>
                <img src={course.image.url} alt="skill"></img>
                <div>
                    <button>
                        <FcLike />
                    </button>
                </div>
            </div>
            <div>
                <p>{course.title}</p>
                <p>{course.description}</p>
            </div>

        </div>
    )
}

export default Card;