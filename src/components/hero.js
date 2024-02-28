import { Link } from "react-router-dom";

export const Hero = () => {
    return (
        <div id='backgroundImg' className="h-screen flex justify-center items-center w-full">
            <div className="z-0 flex flex-col justify-center items-center">
                <h1 className='main2 text-xl xl:text-3xl lg:text-4xl xl:text-3xl flex justify-center text-center mt-10 xl:mt-20 mb-2 xl:mb-4 text-white z-0'>Welcome to Vision Auto Detailing</h1>
                <h1 id="heroTitle" className='text-5xl xl:text-8xl lg:text-7xl xl:text-8xl font-medium flex justify-center text-center mb-2 xl:mb-4 text-white z-0'>Mobile Auto</h1>
                <h1 id="heroTitle" className='text-5xl xl:text-8xl lg:text-7xl xl:text-8xl font-medium flex justify-center text-center mb-4 xl:mb-8 text-white z-0'>Detailing</h1>
                <h4 className="heroTitle2 text-sm xl:text-xl lg:text-2xl xl:text-3xl text-white mb-4 xl:mb-6">Transforming Vehicles, One Detail at a Time.</h4>
                <div>
                    <Link to="/book-now" className='text-white mx-4'>
                        <button className='main bg-white border-2 border-white text-black text-black font-bold rounded px-4 py-1 text-xs xl:text-base xl:px-8 xl:py-2 transition-all duration-500 ease-in-out xl:hover:bg-transparent xl:hover:border-white xl:hover:text-white xl:hover:font-bold'>
                            Book Now
                        </button>
                    </Link>
                    <Link to="/prices" className='text-white mx-4'>
                        <button className='main bg-transparent border-2 border-white text-white text-black font-bold rounded px-4 py-1 text-xs xl:text-base xl:px-8 xl:py-2 transition-all duration-500 ease-in-out xl:hover:bg-white xl:hover:border-white xl:hover:text-black xl:hover:font-bold'>
                            Pricing
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
