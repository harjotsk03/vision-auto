import React, { useState } from 'react';
import image1 from '../images/car1.webp';
import image2 from '../images/car2.webp';
import image3 from '../images/car3.webp';

export const CustomerReviews = () => {
    const [currentReview, setCurrentReview] = useState(0);
    const reviews = [
        {
            image: image1,
            text: '"Harjot did a great job on both [my SUV and husband\'s truck] They were very dirty and covered in drool from our dog. Great service and it\'s so nice to have your vehicles detailed in your driveway. Will definitely be booking with him again." - Aleks Powell'
        },
        {
            image: image2,
            text: '"Our car was being detailed after more than a year and we drive around with 2 kids and a dog, so you can imagine the stuff found in the seats and the grooves on the car floor…. But they cleaned it to the level that it seems like a brand new car!" - Shreya and Rishi'
        },
        {
            image: image3,
            text: '“Excellent service for a very reasonable price. Friendly and polite young man was very eager to make sure I was happy with the job.” - Anna Goedman'
        }
    ];

    const nextReview = () => {
        setCurrentReview((currentReview + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentReview((currentReview - 1 + reviews.length) % reviews.length);
    };

    return(
        <div className="h-auto mt-20 mb-20 w-full flex flex-col justify-center">
            <h1 className="main2 text-3xl ml-auto mr-auto mb-4">Customer Reviews</h1>
            <div className='w-3/4 ml-auto mr-auto gap-10'>
                <div className='w-full bg-black bg-opacity-10 flex h-auto py-10 px-14 items-center rounded-xl'>
                    <div className='w-52 h-52 rounded-full flex justify-center items-center overflow-hidden '>
                        <img className='    object-cover' src={reviews[currentReview].image} alt="Centered Image" />
                    </div>
                    <p className='main2 text-lg ml-4 w-8/12'>{reviews[currentReview].text}</p>
                </div>
                <div className="flex justify-center mt-4">
                    <button onClick={prevReview} className="bg-black main2 hover:bg-black hover:bg-opacity-30 text-white hover:text-black font-bold py-2 px-4 mr-2 rounded">
                        Previous
                    </button>
                    <button onClick={nextReview} className="bg-black main2 hover:bg-black hover:bg-opacity-30 text-white hover:text-black font-bold py-2 px-4 ml-2 rounded">
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}
