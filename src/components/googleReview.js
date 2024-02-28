import star from '../images/star.png';

export const GoogleReview = () => {
    return(
        <div className="pt-36 px-8 h-auto flex flex-col">
                <h1 className="text-5xl main2 ml-auto mr-auto mb-10">REVIEWS</h1>
                <div className="ml-auto flex flex-col mr-auto">
                    <h3 className="main2 text-2xl w-1/2 text-center ml-auto mr-auto">We currently hold a 5-star rating on Google and have had lots of positive feedback from our clients and customers.</h3>
                    <div className='flex mt-4 flex-row ml-auto mr-auto gap-4'>
                        <img className='hover w-10' src={star}></img>
                        <img className='hover w-10' src={star}></img>
                        <img className='hover w-10' src={star}></img>
                        <img className='hover w-10' src={star}></img>
                        <img className='hover w-10' src={star}></img>
                    </div>
                </div>
        </div>
    )
}