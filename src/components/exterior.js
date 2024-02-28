export const Exterior = () => {
    return(
        <div className=" w-full overflow-hidden pl-20 pr-20 pb-10 mt-12 h-auto w-full">
            <h1 className="text-4xl main2">Exterior Only</h1>
            <div className="pt-8 flex flex-col gap-10 xl:gap-0 xl:flex-row justify-between ">
                <div className="flex flex-col gap-4">
                    <h3 className="main2 text-2xl underline">Basic Wash</h3>
                    <h4 className="main2 text-xl italic">Starting at $30*</h4>
                    <ul className="main2 text-lg flex flex-col gap-2">
                        <li>• Foam Wash</li>
                        <li>• Wheel and Tire Clean</li>
                        <li>• Tire Shine</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="main2 text-2xl underline">Elite Wash</h3>
                    <h4 className="main2 text-xl italic">Starting at $45*</h4>
                    <ul className="main2 text-lg flex flex-col gap-2">
                        <li>• Foam and Contact Wash</li>
                        <li>• Wheel and Tire Clean</li>
                        <li>• Tire Shine</li>
                        <li>• Trim Restoration</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="main2 text-2xl underline">Premium Wash</h3>
                    <h4 className="main2 text-xl italic">Starting at $70*</h4>
                    <ul className="main2 text-lg flex flex-col gap-2">
                        <li>• Foam and Contact Wash</li>
                        <li>• Deep Wheel and Tire Clean</li>
                        <li>• Tire Shine</li>
                        <li>• Trim Restoration</li>
                        <li>• Ceramic Spray on Windows and Wheels</li>
                        <li>• Spray on Wax</li>
                        <li>• Hand Dry</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}