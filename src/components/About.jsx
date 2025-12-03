import React from "react"
import UserClass from "./UserClass"

class About extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userData : {}
        }
    }

    //parallel to useEffect 
    async componentDidMount(){
        const USERS_URL = "https://api.github.com/users/shivani-tripurari";
        const res = await fetch(USERS_URL);
        const data = await res.json();

        console.log("api call ", data);

        this.setState({
            userData : data
        })
    }

    render(){

        const {userData} = this.state;
        console.log("user data state", userData);
        return(
        <div className="grid grid-cols-3 m-3 p-4">
            <UserClass name={userData.name} location={userData.location} bio={userData?.bio}/>
        </div>
        )
    }
}

export default About


/**
 * feature : 
 * - display team member info -> by fetching data from github
 * - use class-based components
 */