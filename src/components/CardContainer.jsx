import React, { useEffect, useState } from "react";
import Search from "./Search"
import Card from "./Card";
import Shimmer from "./Shimmer";
import FilterSection from "./FilterSection";
import resData from "../data/mock";
import { DATA_URL } from "../utils/constants";

const CardContainer = () => {


    // const mockData = resData;
    // console.log("mock data ", mockData);

    //local states 
    const [restrData, setRestrData] = useState(null);
    const [fliteredRestr, setFilteredRestr] = useState(restrData);
    const [topRestr, setTopRestr] = useState([]);
    //toggling between top-rated filter btn
    const [isFiltered, setIsFiltered] = useState(false);
    
    useEffect(()=>{
        fetchData();
    }, []);
    
    //fetching data
    const fetchData = async () => {
        const res = await fetch(DATA_URL);
        const data = await res.json();
        
        const finData = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestrData(finData);
        setFilteredRestr(finData);
    }
    
    console.log("restrausts length", restrData?.length, restrData);
    
    
    //handler functions 
    const topRatedFilter = () => {
        setIsFiltered(prev=>!(prev));
        const filteredData = restrData.filter((d)=>{
            return d?.info?.avgRating > 4.1;
        })
        setTopRestr(filteredData);
    }

    console.log("filtered rest list", fliteredRestr);
    const searchFilter = (searchInput) => {
        console.log("inside search input ", searchInput)
        const searchText = restrData.filter((d)=>{
            return d?.info?.name.toLowerCase().includes(searchInput.toLowerCase());
        })
        console.log("search text", searchText)
        if(searchInput===""){
            setFilteredRestr(restrData);
        }
        setFilteredRestr(searchText);
    }


    return(
        <div>
            {/* when restrData is 0 i.e, api is still loading res */}
            {!restrData || restrData?.length === 0 ? (
                <Shimmer/>
            ) : (
                <div>
                    {/* Search component */}
                    <Search searchProp = {searchFilter} />
                    {/* filtering options, sends topRatedFilter function as prop */}
                    <FilterSection topRated = {topRatedFilter} />
                    <div className="grid grid-cols-4 gap-4 p-3 mx-2">
                       {isFiltered ? (
                            topRestr.map((data)=>
                                (
                                    <div key={data.info.id}>
                                        <Card 
                                            resProps = {data}
                                        />
                                    </div>
                                )
                            )
                        ) : (
                            fliteredRestr?.map((data)=>
                                (
                                    <div key={data.info.id}>
                                        <Card 
                                            resProps = {data}
                                        />
                                    </div>
                                )
                            )  
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default CardContainer;
