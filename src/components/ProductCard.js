import React from "react";


 export default function ProductCard(props){
    return(
        <div className ='card'>
        <div className = "product-image-container" >
         <img src = {props.imagesrc}/>
         <h2>{props.name}</h2>
         <p>{props.name}</p>
         <p>{props.description}</p>
         </div>
       </div>
    );
 }