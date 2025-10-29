import React from "react";

const Shimmer = () =>{

    const dummyItems = 15;
    const shimerCards = [];

    for(let i = 0; i<=dummyItems; i++){
        shimerCards.push(
            <div key={i} className="border rounded-md p-3 flex flex-col justify-center items-center border-slate-300">
                <div className="h-48 w-48  p-0.5 bg-slate-400"></div>
                <div className="mt-3 gap-1 flex flex-col justify-between items-center">
                    <div className="rounded-3xl bg-slate-400 h-2 w-48"></div>
                    <div className="rounded-3xl bg-slate-400 h-2 w-48"></div>
                    <div className="rounded-3xl bg-slate-400 h-2 w-48"></div>
                </div>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-4 gap-4 p-3 mx-2">
            {shimerCards}
        </div>
    )
}

export default Shimmer;