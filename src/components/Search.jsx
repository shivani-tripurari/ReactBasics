import React, {useState, useEffect} from "react";

const Search = (props) => {

    const {searchProp} = props;
    //local states
    const [searchText, setSearchText] = useState("");

    //handler function
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

    const handleSearchBtn = () => {
        console.log("search btn clicked");
        searchProp(searchText);
    }

    console.log("user typed : ", searchText);

    return(
        <div className="w-full flex justify-center gap-3 items-center mb-9">
            <input
                type="text"
                className="w-2/5 border border-slate-300 rounded-md p-3 m-1"
                placeholder="What do you wanna eat ?"
                value={searchText}
                onChange={(e)=>handleSearch(e)}
            />
            <button 
                onClick={()=>handleSearchBtn()}
                className="rounded-md font-bold text-amber-100 p-3 bg-red-800"
            >
                Search
            </button>
        </div>
    )
}

export default Search;


/**
 * search functionality : 
 * - user types in input
 * - UI gets updated with the typed text
 */
 