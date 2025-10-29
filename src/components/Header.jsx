import React, {useState} from "react";

const Header = () => {

    //local states
    const [login, setLogin] = useState(true);

    //handler functions
    const handleLogin = () => {
        setLogin((prev)=>!prev);
    }

    return(
        <div className="flex justify-between items-center p-3">
            <img src="https://i.pinimg.com/1200x/01/f9/c5/01f9c56cd67890bfe1502e4205f77ed4.jpg" className="h-30 w-30"/>
            <div className="flex justify-center items-center">
                <ul className="flex items-center justify-center p-4 gap-6">
                    <li>About</li>
                    <li>Careers</li>
                    <button className="p-1 rounded border-red-800 px-6 font-bold text-red-800">Cart</button>
                    {login ? 
                        (<button 
                            onClick={()=>handleLogin()}
                            className="p-1 cursor-pointer rounded bg-red-800 px-6 font-bold text-amber-100">Login</button>) 
                        : 
                        (<button 
                            onClick={()=>handleLogin()}
                            className="p-1 cursor-pointer rounded bg-red-800 px-6 font-bold text-amber-100">Logout</button>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Header;