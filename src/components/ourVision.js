import image1 from '../images/download.png';
import { useEffect } from 'react';

export const OurVision = () => {
    useEffect(() => {
        const handleScroll = () => {
            const line = document.querySelector('.line-animation');
            if (line) {
                const scrollPosition = window.scrollY;
                const startPosition = -20; // Adjust the start position as needed
      
                // Calculate the new position of the line based on the scroll position
                const newPosition = startPosition + scrollPosition/10;
      
                // Update the transform property to move the line
                line.style.transform = `translateY(${newPosition}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // empty dependency array to run the effect only once after the component mounts
      
    return (
        <div className="h-96 w-90 bg-black xl:w-full xl:h-auto flex items-center">
            <div className="w-0.5 bg-white bg-opacity-60 h-72 mt-8 ml-10 xl:ml-10 xl:h-96 xl:ml-36 xl:w-0.5"></div>
            <div className="w-1 bg-white h-28 mb-24 line-animation "></div>
            <div className="xl:w-2/6 xl:ml-10">
                <h1 className="main2 text-white text-3xl pl-5 pt-10 xl:text-3xl xl:tracking-widest">OUR VISION</h1>
                <p className="ml-6 pt-6 pr-10 main2 text-white text-sm leading-7 xl:text-base xl:leading-10">We value our clients and customers;<br></br> every vehicle is treated with the<br></br> same respect, care and detail as the next. With years of professional<br></br>detailing experience, you can be <br></br>assured that your ride will be <br></br>detailed to the highest standard. </p>
            </div>
            <img className='hidden xl:flex xl:ml-auto xl:w-2/4' src={image1} alt="Image" />
        </div>
    );
};
