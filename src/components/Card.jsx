import React from "react";
import {BASE_IMG_URL} from "../utils/constants.js";

const Card = (props) => {

    //instead of just using props, we can destructure on fly : const card = ({resName, cusine}) => {}
    // console.log("data sent", props)
    //destructuring
    const{resProps} = props
    //good practice : destructure all keys we want to use
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resProps?.info;


    return(
        <div className="cursor-pointer border rounded-md p-3 flex flex-col justify-center items-center border-slate-300">
            <div className="h-48 w-48  p-0.5">
                <img src={`${BASE_IMG_URL}${cloudinaryImageId}`}
                className="h-full w-full rounded"
                />
            </div>
            <div className="flex flex-col justify-between items-center">
                <h3 className="font-bold">{name}</h3>
                <h3>{cuisines.join(", ")}</h3>
                <div className="flex w-full justify-between items-center">
                    <div className="p-2 rounded-md bg-green-700 text-amber-100">{`${avgRating} ⭐`}</div>
                    <h3 className="font-bold text-sm">{costForTwo}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card;



// passing "props" to "components" is like passing "arguments" to a "function"