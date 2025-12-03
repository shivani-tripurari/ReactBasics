import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    //local states
    const [onlineStatus, setOnlineStatus] = useState(true);

    //will use the eventListener only once to check if online
    useEffect(()=>{
        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        })
    }, [])

    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        })
    }, [])

    //return boolean value
    return onlineStatus;
}

export default useOnlineStatus;


/**
 * approach : 
 * - think about the contract : 
 *      - input -> no need to get an input from the component , we will use event listener inline
 *      - output -> return true/false (onlineStatus)
 */