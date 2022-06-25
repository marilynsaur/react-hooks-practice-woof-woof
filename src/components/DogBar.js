import React, { useEffect, useState } from "react";
import DogCards from "./DogCards";


function DogBar({dogItems}) {
    console.log(dogItems)
    // const [isOn, setIsOn] = useState(false);
    

 

    // function handleClick(e) {
    //     setDogInfo(e)
    //     setIsOn((isOn) => !isOn);
    // }

    // let dogItems = items.map((dog) =>
    //     <div id="dog-bar" dog={dog} key={dog.id}>
    //         <span name={dog} onClick={() => handleClick(dog)}>{dog.name}</span>

    //     </div >
    // );
    // console.log(item)
    return (
        <>
        
                 <span>{dogItems.name}</span>
                



             
        </>
        
    );
}

{/* <div className="App">
       <div id="filter-div">
         <button id="good-dog-filter">Filter good dogs: OFF</button>
       </div>
       <div id="dog-bar"><span>{item.name}</span>
       </div>  */}

export default DogBar;

{/* // return (
//     <div>
//       <button onClick={onClick}>Click me</button>
//       {showText ? <Text /> : null}
//     </div>
//   );
// }

// const Text = () => <div>You clicked the button!</div>; */}