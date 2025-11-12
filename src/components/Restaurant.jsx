import React, { useEffect } from "react";
import { RESTAURANT_URL } from "../utils/constants";
import { BASE_IMG_URL } from "../utils/constants";
import restaurantMenu from "../data/restaurantMenu";

const Restaurant = () => {
    
    // fetching data from api
    // useEffect(()=>{
    //     fetchData();
    // }, []);

    // const fetchData = async() => {
    //     const res = await fetch(RESTAURANT_URL);
    //     console.log("response from api ", res)
    //     // const data = await res.json();
    //     // console.log("data from api ", data);
    // }

    console.log("mock data ",restaurantMenu[0].data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    const basicInfo = restaurantMenu[0].data.cards[2].card.card.info;

    //destructuring
    const {name, avgRating, cuisines, costForTwoMessage, locality, city} = basicInfo
    const restArea = `${locality}, ${city}`;
    const imgURL = `${BASE_IMG_URL}${basicInfo.cloudinaryImageId}`


    const menuArray = restaurantMenu[0].data.cards.find((item)=> item?.groupedCard?.cardGroupMap?.REGULAR?.cards)?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // console.log(restaurantMenu[0].data.cards[4].groupedCard.cardGroupMap);
    // console.log("find index 4 ", restaurantMenu[0].data.cards.find((item)=> item?.groupedCard?.cardGroupMap?.REGULAR?.cards)?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    // console.log("slice", menuArray.slice(3));

    const reqMenuArray = menuArray.filter(
        (item)=>item?.card?.card?.itemCards || item?.card?.card?.categories)
        .flatMap((item)=>{
            const cardItem = item?.card?.card;

            //2 cases -> categories.itemCards & direct itemCards

            if(cardItem?.categories){
                return(cardItem?.categories?.flatMap((item)=>item?.itemCards?.flatMap((prod)=>prod?.card?.info)));
            }
            if(cardItem?.itemCards){
                return(cardItem?.itemCards?.flatMap((item)=>item?.card?.info));
            }
        });

    
        // reduce -> call back function, initial value
    const menuWithTitles = menuArray.filter(
        (item)=>item?.card?.card?.categories || item?.card?.card?.itemCards)
        .reduce((acc,item)=>{
            const cardItem = item?.card?.card
            const title = cardItem?.title;
            
            //two cases : categories.itemCards & direct itemCards

            if(cardItem?.categories){
                //loopingh inside every categories
                acc[title]=cardItem?.categories?.map((category)=>(
                    {
                        title : category?.title,
                        itemInfo : category?.itemCards?.map((item)=>item?.card?.info) || []
                    }
                ))
            }

            if(cardItem?.itemCards){
                acc[title] = [
                    {
                        title : title,
                        itemInfo : cardItem?.itemCards?.map((item)=>item?.card?.info) || []
                    }
                ]
            }

            return acc;

        }, {})

        console.log(menuWithTitles);
        Object.entries(menuWithTitles).map(([key, val])=>{
            console.log(key, val);
        })

    // console.log("reqMenuArray categories", reqMenuArray);

    // const itemWithCategory = menuArray.filter((item)=>item?.card?.card?.categories);
    // const itemWithoutCategy = menuArray.filter((item)=>item?.card?.card?.itemCards);

    // console.log("with category ", itemWithCategory);
    // console.log("without category ", itemWithoutCategy);


    return(
        <div className="h-screen w-90vw p-4 m-3">
            {/* header */}
            <div className="w-full h-1/2 p-4 flex flex-col justify-center items-center">
                <div className="relative flex gap-12 justify-start items-center w-full h-2/3">
                    <div className="w-1/4 h-full">
                        <img 
                            src={imgURL}
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <div className="flex flex-col justify-start items-start gap-1">
                        <h1 className="font-light text-7xl">{name}</h1>
                        <h2 className="font-bold text-2xl p-3">{cuisines.join(", ")}</h2>
                        <div className="flex justify-evenly items-start">
                            <p className="px-3 font-bold text-xl text-red-600">{avgRating}⭐</p>
                            <p className="px-3 font-bold text-xl ">{costForTwoMessage}</p>
                            <p className="px-3 font-bold text-xl ">{restArea}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* menu */}
            <div className="w-full h-full">
                {Object.entries(menuWithTitles).map(([key,val])=>{
                    return(
                        <div>
                            <h2 className="font-bold text-2xl p-3">{key}</h2>
                            {val?.map((item, idx)=>(
                                <div key={idx}>
                                    <h3 className="font-medium text-xl pl-12">{item?.title}</h3>
                                    {item?.itemInfo?.map((prod, idx)=>(
                                        <div  className="pl-20 flex" key={idx}>
                                            <p>{prod?.name} || </p>
                                            <p> Rs.{prod?.price/100 || prod?.defaultPrice/100}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Restaurant;

/**
 * to-do : 
 * - display Title, restaurant info
 * - display menu items
 * - apply veg-only etc etc filters
 * 
 * 
 * fyi : 
 * - menuArray[0] -> filters
 * - menuArray[1] -> recommended
 */