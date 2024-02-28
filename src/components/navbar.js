import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/visionLogo.webp';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(false); // Close the navbar whenever the location changes
    }, [location]);

    return (
        <div className="bg-black h-24 fixed z-10 flex justify-between items-center w-full">
            <div className="sm: hidden md:flex items-center">
                <img className='w-24 ml-12' src={logo} alt="Logo" />
            </div>
            <div id='navBar' className='hidden md:flex justify-end mr-10 items-center'>
                <Link to="/" className='navBtn text-white mx-4'>Home</Link>
                <Link to="/prices" className='navBtn text-white mx-4'>Prices</Link>
                <Link to="/reviews" className='navBtn text-white mx-4'>Reviews</Link>
                <Link to="/about" className='navBtn text-white mx-4'>About</Link>
                <Link to="/contact" className='navBtn text-white mx-4'>Contact Us</Link>
                <Link to="/book-now" className='text-white mx-4'>
                    <button className='bg-white border-2 border-white text-black hover:bg-transparent hover:border-white hover:text-white text-black font-bold rounded px-4 py-0.5 transition-all duration-500 ease-in-out'>
                        Book Now
                    </button>
                </Link>
            </div>
            <div className="md:hidden flex items-center justify-between p-6 w-full">
                <img className='w-20 ' src={logo} alt="Logo" />
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg className= "h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="main2 md:hidden absolute top-24 left-0 right-0 pb-10 bg-black text-white flex flex-col items-end pr-4 gap-2">
                    <Link to="/" className=' text-white mx-4'>Home</Link>
                    <Link to="/prices" className=' text-white mx-4'>Prices</Link>
                    <Link to="/reviews" className=' text-white mx-4'>Reviews</Link>
                    <Link to="/about" className=' text-white mx-4'>About</Link>
                    <Link to="/book-now" className='text-white mx-4'>
                        <button className=' bg-transparent border-0 border-white text-white hover:bg-transparent hover:border-white hover:text-white font-bold rounded transition-all duration-500 ease-in-out'>
                            Book Now
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};
