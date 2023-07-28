import React from "react";

function About({image, about}){
const defaultPic="https://via.placeholder.com/215";
   return (
        <aside>
            <img 
            src={image||defaultPic} 
            alt="blog logo"
            />
            <p>{about}</p>
        </aside>
    )

}
export default About