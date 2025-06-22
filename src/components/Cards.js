import React from "react";
import Card from "./Card";

const Cards = ({courses}) => {
    function getCourses(){
        let allCourses = [];
        Object.values(courses).forEach((courseArray) => {
            courseArray.forEach((courseData) => {
                allCourses.push(courseData);
            });
        });
        return allCourses;
    }
    
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
               getCourses().map((course)=>{
                return <Card key={course.id} course={course}></Card>
               }) 
            }
        </div>
    )
}

export default Cards;