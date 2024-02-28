import { Link } from "react-router-dom"

export const Footer = () => {
    return(
        <footer className=" bg-black w-full overflow-hidden bg-opacity-85 text-white py-14 xl:px-20">
            <div className="w-full flex flex-col xl:flex-row justify-between items-center">
                <div className="flex mb-4 xl:mb-0 gap-14">
                    <div className="hidden xl:flex xl:flex-col text-left">
                        <Link className="main2 navBtn text-sm m-1" to="/prices">Prices</Link>
                        <Link className="main2 navBtn text-sm m-1" to="/reviews">Reviews</Link>
                        <Link className="main2 navBtn text-sm m-1" to="/about">About</Link>
                        <Link className="main2 navBtn text-sm m-1" to="/about">Book Now</Link>
                    </div>
                    <div>
                        <h1 className="main2 mb-4">Sign up to news and updates.</h1>
                        <div className="flex flex-col">
                            <label className="mb-2">Email</label>
                            <div>
                                <input className="xl:w-64  p-2" />
                                <button className="main2 bg-black p-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="ml-7 xl:text-right">
                    <h4 className="main2  xl:text-sm">Tel - (778) 809-1405</h4>
                    <h4 className="main2 xl:text-sm">Email - visionauto.detaling@gmail.com</h4>
                    <a href="https://www.instagram.com/visionautodetailing/" target="_blank"><h4 className="main2 text-sm navBtn mb-4">Instagram - @visionautodetailing</h4></a>
                    <h1 className="text-md main2 xl:mb-1">© Vision Auto Detailing 2024</h1>
                </div>
                
                
            </div>
        </footer>
    )
}
