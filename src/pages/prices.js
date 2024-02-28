import { Exterior } from "../components/exterior"
import { Extras } from "../components/extras"
import { Footer } from "../components/footer"
import { Interior } from "../components/interior"
import { Maintanance } from "../components/maintanance"
import { Packages } from "../components/packages"

export const Prices = () => {
    return(
        <div className='w-full h-auto pt-24 '>
            <Maintanance />
            <Packages />
            <Interior />
            <Exterior />
            <div className=" w-full border-2 border-black overflow-hidden h-60 bg-black gap-6 mt-10 mb-10 flex flex-col justify-center items-center">
                <h3 className="text-white text-md main2 w-1/4 text-center">For all SUVs (5+ seats) each package or detail will be an additional $10. For all pickup trucks, each package or detail will be an additional $15.</h3>
                <h3 className="text-white text-md main2 w-1/4 text-center">*Please note these are starting prices and prices may increase upon vehicle inspection.*</h3>
            </div>
            <Extras />
            <Footer />
        </div>
    )
}