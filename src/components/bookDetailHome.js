import { Form } from "./Form";
import image1 from '../images/imaage1.avif';

export const BookDetailHome = () => {
    return(
        <div className=" h-auto w-90 pb-10 xl:pb-0 bg-black overflow-hidden xl:w-full xl:auto flex items-center">
            <div className="bookHome flex-col items-center justify-start pt-3 pl-10">
                <h1 className="text-white main2 text-3xl ml-3 xl:ml-12 uppercase">Book a Detail</h1>
                <p className="text-white main2 text-sm ml-3.5 mt-1 xl:ml-12 xl:mt-0 md:inline-block">Fill out the form  <br className="md:hidden"/> <span className="">to book your detail <span className="italic"><br></br><br></br>Bookings will be for the upcoming <span className="main">2 weeks.</span></span></span><br></br>Appointments may take up to 3 hours.</p>
                <Form />
            </div>
            <img className='hidden ml-auto xl:flex xl:w-2/4' src={image1} alt="Image" />
            
        </div>
    )
}