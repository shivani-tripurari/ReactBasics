import React from "react";
// import { useRouteError } from "react-router-dom";

const Error = () => {

    // const err = useRouteError();
    // console.log(err);

    return(
        <div className="flex justify-center items-center mt-10">
            <h1 className="text-7xl text-red-700 font-bold">Oops ! Something went wrong</h1>
        </div>
    )
}

export default Error