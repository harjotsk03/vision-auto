import { Link } from 'react-router-dom';
import image3 from '../images/image3.webp';

export const Maintanance = () => {
    return(
        <div className='h-screen w-full overflow-hidden'>
            <div className='relative flex xl:justify-start mt-8 xl:mt-0'>
                <img className='hidden xl:flex absolute  w-2/3 ml-20 mt-16' src={image3}></img>
                <div>
                    <div className='w-10/12 right-8 absolute flex flex-col justify-around xl:w-6/12 xl:right-20 xl:top-28 xl:p-14 xl:pl-16 bg-gray-100 heightMaintain'>
                        <div>
                            <h1 className='text-4xl ml-4 xl:ml-0 xl:text-5xl main2 xl:mb-4'>Monthly</h1>
                            <h1 className='text-4xl ml-4 xl:ml-0 xl:text-5xl main2'>Maintanance</h1>
                        </div>
                        <p className='w-4/5 ml-5 xl:ml-0 main2 xl:text-lg'>We offer a monthly maintenance package for any vehicle. After the initial premium package detail you are eligible for monthly scheduled details at the rate of starting $50 (does not includes extras, or additional fee for trucks and SUV's).</p>
                        <Link to="/book-now"><button className='ml-5 xl:ml-0 buttonPrimary xl:mt-14'>Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}