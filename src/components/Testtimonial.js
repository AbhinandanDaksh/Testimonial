import React from 'react'
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from 'react';


const Testimonials = (props) => {
    let reviews = props.reviews;
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(currentIndex);

    function leftShiftHandler() {
        if(currentIndex - 1 < 0) {
            setCurrentIndex(reviews.length - 1);
        }
        else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    function rightShiftHandler() {
        if(currentIndex + 1 >= reviews.length) {
            setCurrentIndex(0);
        }
        else {
            setCurrentIndex(currentIndex+1);
        }

    }

    function surpriseHandler() {
        let randomIndex =  Math.floor(Math.random() * reviews.length);
        setCurrentIndex(randomIndex);
    }

  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 shadow-md hover:shadow-xl rounded-md'>

        <Card review = {reviews[currentIndex]}></Card>
        {/* console.log(review[currentIndex]); */}
     

      <div className='flex text-3xl mt-10 gap-3 text-red-400 font-bold mx-auto'>
        <button 
        onClick={leftShiftHandler}
        className='cursor-pointer hover:text-red-500 '>
            <FiChevronLeft/>
        </button>
        <button 
        onClick={rightShiftHandler}
        className='cursor-pointer hover:text-red-500 '>
            <FiChevronRight/>
        </button>
      </div>

      <div className='mt-6'>
        <button
        onClick={surpriseHandler}
         className='bg-red-400 hover:bg-red-500 transition-all duration-200
        cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
            Surprise Me
        </button>
      </div>
    </div>
  )
}

export default Testimonials