export const Interior = () => {
    return(
        <div className=" w-full overflow-hidden pl-20 pr-20 pb-10 mt-12 h-auto ">
            <h1 className="text-4xl main2">Interior Only</h1>
            <div className="pt-8 flex flex-col gap-10 xl:gap-0 xl:flex-row justify-between">
                <div className="flex flex-col gap-4">
                    <h3 className="main2 text-2xl underline">Basic Clean</h3>
                    <h4 className="main2 text-xl italic">Starting at $35*</h4>
                    <ul className="main2 text-lg flex flex-col gap-2">
                        <li>• Basic Vaccum</li>
                        <li>• Basic Wipe Down</li>
                        <li>• Leather Cleaned</li>
                        <li>• Windows Inside & Out</li>
                        <li>• Door Jams</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="main2 text-2xl underline">Elite Clean</h3>
                    <h4 className="main2 text-xl italic">Starting at $50*</h4>
                    <ul className="main2 text-lg flex flex-col gap-2">
                        <li>• Full Vaccum</li>
                        <li>• Complete Wipe Down</li>
                        <li>• Leather Cleaned</li>
                        <li>• Trunk Vaccumed and Cleaed</li>
                        <li>• Windows Inside & Out</li>
                        <li>• Door Jams</li>
                        <li>• Interior Protectant</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="main2 text-2xl underline">Premium Clean</h3>
                    <h4 className="main2 text-xl italic">Starting at $80*</h4>
                    <ul className="main2 text-lg flex flex-col gap-2">
                        <li>• Full Vaccum</li>
                        <li>• Complete Wipe Down</li>
                        <li>• Leather Cleaned and Conditioned</li>
                        <li>• Windows Inside & Out</li>
                        <li>• Plastic and Trim Restoration</li>
                        <li>• Interior Protectant</li>
                        <li>• Steam Clean</li>
                        <li>• Trunk Vaccumed and Cleaned</li>
                        <li>• Door Jams</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}