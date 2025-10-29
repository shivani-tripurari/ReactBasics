import React, {useState} from "react";

const FilterSection = (props) => {

    console.log("what is parent sending", props);
    //handlers

    const onTopRatedClick = () => {
        props.topRated();
    }


    return(
        <div className="flex justify-start items-start p-3 mx-2">
            <button
                className="p-2 border border-red-800 rounded-md text-red-800 font-bold"
                onClick={()=>onTopRatedClick()}
            >
                Top-rated
            </button>
        </div>
    )
}

export default FilterSection;


/**
 * top-rated filter : 
 * - from all restr. listings, only avgRating > 4 should be displayed
 * - gets list of all restr. from parent (data)
 * - using local state - topRestr -> it gets updated with the handlerfunction, with above filter criteria
 * - how do i show it on ui ?
 * 
 */