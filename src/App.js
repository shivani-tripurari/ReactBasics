import "./index.css"
import React,{lazy, Suspense} from "react";
import {createRoot} from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
// import Careers from "./components/Careers";
import Restaurant from "./components/Restaurant";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";

//lazy-loading/ dynamic import
const Careers = lazy(()=>import("./components/Careers"));

const App = () => {

    
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}


const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/about",
                element : <About/>
            },
            {
                path : "/careers",
                element : <Suspense fallback={<Shimmer/>}>
                            <Careers/>
                          </Suspense>
            },
            {
                path : "/restaurant/:resID",
                element : <Restaurant/>
            }
        ],
        errorElement : <Error/>
    }
])

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);



/**
 * componnet structure : 
 * - header component -> logo, nav items
 * - body component -> search input, card container 
 * - footer component -> footer links
 * - card container -> cards
 */