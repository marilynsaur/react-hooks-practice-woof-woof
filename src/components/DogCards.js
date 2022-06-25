import React, { useEffect, useState } from "react";




function DogCards({ dogItems }) {
  console.log(dogItems, "this is dog items")


  return (
    //
    //   <div id="dog-summary-container" >
    //     <h1>DOGGO:</h1>

    //   </div>
    // </div>
    

      <div >
         <div id="dog-summary-container" >
             <h1>DOGGO:</h1>
             <img src={dogItems.image} alt={dogItems.name} />
             <h2>{dogItems.name}</h2>
             <button>Good Dog!</button> 
             </div> 
      </div>
   




  );
}








export default DogCards;