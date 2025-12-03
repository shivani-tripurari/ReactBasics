import React from "react";
import CardContainer from "./CardContainer";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

    const onlineStatus = useOnlineStatus();

    return(
        <div className="w-screen flex flex-col justify-center items-center">
            {/* cards container */}
            {onlineStatus ? <CardContainer/> : <div><h1 className="text-7xl font-medium text-red-700">Looks like you are offline !</h1></div>}
        </div>
    )
}

export default Body;