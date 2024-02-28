export const Extras = () => {
    return(
        <div className=" w-full overflow-hidden pl-20 pr-20 pb-10 h-auto w-full">
            <h1 className="text-4xl main2">Add On's</h1>
            <h4 className="text-lg main2 mt-2 mb-2">These are all of the extra add ons we offer to take your detail to the next level.</h4>
            <div className="pt-8 flex flex-col gap-10 xl:gap-0 xl:flex-row justify-between">
                <div className="flex flex-col gap-4">
                    <h3 className="main2 text-2xl underline">Carpet Shampoo</h3>
                    <h4 className="main2 text-xl">Starting at $35*</h4>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="main2 text-2xl underline">Seat Shampoo</h3>
                    <h4 className="main2 text-xl">Starting at $40*</h4>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="main2 text-2xl underline ">Pet Hair Removal</h3>
                    <h4 className="main2 text-xl">Priced Upon Inspection</h4>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="main2 text-2xl underline">Iron Decontamination</h3>
                    <h4 className="main2 text-xl">Starting at $20*</h4>
                </div>
            </div>
        </div>
    )
}