// import Info from "./Info"
// import Student from "./Student"
// import Demo from "./Demo"
// import Slide from "./Slide"
// import Count from "./Count"
//import CountApp from "./CountApp"
// import Map from "./Map"
// import Netflix from "./Netflix"
import React from "react";
import Greeting from "./Greeting"; 

// function App() {
//   let user={
//     empnm:"Geeta",
//     salary:20000,
//     destination:"Chennai"
//   }

//   return (
//     <div>
//      <h1 style={{"color":"blue","backgroundColor":"aqua"}}>Welcome to React World..</h1>
//      <Info dp={nm}/>
//      <Student name={nm}/>
//      <Demo empuser={user}/>
//      <Slide/>
//      <Count/>
//      <CountApp/>
//      <Map/>
//      <Netflix/>
//     </div>
//   )
// }

const App = () => {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <Greeting name="Madhura" />
      <Greeting name="Madhura" />
    </div>
  );
};

export default App

// import {createBrowserRouter,RouterProvider}
// function app() {
//   const router=createBrowserRouter([
//     {
//       path:"/about",
//       element:<About/>
//     }
//   ])
// }