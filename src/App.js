import "./index.css"
import React from "react";
import {createRoot} from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {

    return(
        <div>
            <Header/>
            <Body/>
        </div>
    )
}


const root = createRoot(document.getElementById("root"));

root.render(<App/>);



/**
 * componnet structure : 
 * - header component -> logo, nav items
 * - body component -> search input, card container 
 * - footer component -> footer links
 * - card container -> cards
 */