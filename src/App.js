import React from "react";
import reviews from "./data";
import Testimonials from "./components/Testtimonial";


const App = () => {
  return (
  <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-red-100 py-12">
    <div className="text-center">
      <h1 className="text-4xl font-bold">
        Our Testimonials
      </h1>
      <div className="bg-red-400  h-[4px] w-[1/5] mt-1 mx-auto">
      </div>
      
        <Testimonials reviews={reviews}/>
        
    </div>
  </div>
 );
};

export default App;
