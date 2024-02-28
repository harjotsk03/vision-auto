import React, { useState, useEffect } from 'react';
import image2 from '../images/image2.webp';

export const OurCustomers = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [addLineClass, setAddLineClass] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 900) {
      setAddLineClass(true);
    }
  }, [scrollPosition]);

  return (
    <div className="p-0 h-96 w-90 bg-black bg-opacity-15 xl:w-full xl:h-auto flex items-center">
      <img className='hidden xl:flex xl:w-2/4' src={image2} alt="Image" />
      <div className="xl:w-2/6 xl:ml-auto xl:mr-auto">
        <h1 className="main2 text-black text-3xl pl-12 xl:pl-5 xl:text-3xl xl:tracking-widest">OUR NUMBERS</h1>
        <div className='block xl:flex'>
          <div>
            <h1 className="main2 text-black text-3xl pl-12 xl:pl-5 pt-10 xl:text-2xl xl:tracking-widest">200+</h1>
            <p className="pl-12 xl:pl-5 pt-0 pr-10 main2 text-black text-sm leading-7 xl:text-base xl:leading-10">VEHICLES DETAILED</p>
            <div className={`hidden xl:block  bg-black ${addLineClass ? 'line3' : ''} ml-12 xl:ml-5 w-1/6 `}></div>
            <div className='hidden xl:block  bg-black bg-opacity-60 ml-12 xl:ml-5 w-5/6 h-0.5'></div>
          </div>
          <div>
            <h1 className="main2 text-black text-3xl pl-12 xl:pl-5 pt-10 xl:text-2xl xl:tracking-widest">5 STAR</h1>
            <p className="pl-12 xl:pl-5 pt-0 pr-10 main2 text-black text-sm leading-7 xl:text-base xl:leading-10">RATING ON GOOGLE</p>
            <div className={`hidden xl:block bg-black ${addLineClass ? 'line4' : ''} ml-12 xl:ml-5 w-1/6 `}></div>
            <div className='hidden xl:block  bg-black bg-opacity-60 ml-12 xl:ml-5 w-5/6 h-0.5'></div>
          </div>
        </div>
      </div>
    </div>
  );
};
