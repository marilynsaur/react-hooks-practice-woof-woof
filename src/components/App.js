import React, { useEffect, useState } from "react";
import DogCards from "./DogCards";
import DogBar from "./DogBar";


function App() {
  const [items, setItems] = useState([]);
  const [dogInfo, setDogInfo] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((r) => r.json())
      .then((items) => setItems(items));
  }, []);


 console.log(items)

 
  // function onClickEvent(event) {
  //   console.log(event);
  // }
 
  
   
    // ... the rest of Toggle component
  
    const dogItems = items.map(item => 
      <div className="App">
         <div id={item.id}>
             <div id="filter-div">
                 <button id="good-dog-filter">Filter good dogs: OFF</button>
             </div>
             <div id="dog-bar">
                 <span>{item.name}</span>
                 </div>
                 
             </div>
             <div id="dog-summary-container" >
             <h1>DOGGO:</h1>
             <img src={item.image} alt={item.name} />
             <h2>{item.name}</h2>
             <button>Good Dog!</button> 
             </div> 
             </div> );







  



// let dogItems =items.map((item) => 
// <div key={item.id} item={item}>
// <img src={item.image} alt={item.name} />
// <h2>{item.name}</h2>
// <button onClick={handleClick}>{isOn ? "Good Dog!" : "Bad Dog!"}</button>

// </div>
// );


  return (
    <>
   
      <DogBar dogItems={dogItems}/>
      <DogCards dogItems={dogItems}/>

      {/* <div>{dogItems}</div> */}

      
     
     
      
     
     
      </>
      
   );
 }
      
      {/* <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
       
        </div>
      </div> */}
    {/* </div>
    
    
      


// return (
//   
//     <Header />
//     {showForm ? <ToyForm onAddItem={handleAddItem} /> : null}
//     <div className="buttonContainer">
//       <button onClick={handleClick}>Add a Toy</button>
//     </div>
//     <ToyContainer toys={toys}/>
//   </>
// );
// }


{/* <ul className="Items">
{itemsToDisplay.map((item) => (
  <Item key={item.id} item={item} />
))}
</ul> */}



export default App;
