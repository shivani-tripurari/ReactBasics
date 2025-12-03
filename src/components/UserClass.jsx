import React from "react";

class UserClass extends React.Component {

    constructor(props){

        //we use a reserved keyword super to recieve all props
        super(props);
        console.log("what parent sent", props);


        // state is a big object that will contain all state variables
        this.state = {
            count : 0
        }
    }

    render()
    {

        const {name, location, bio} = this.props;
        const {count} = this.state;

        //handler functions
        const handleClick = () => {
            this.setState({
                count : this.state.count+1
            })
        }

        return(
            <div className="border border-red-700 rounded-md p-3 flex flex-col justify-start items-start w-80 h-80">
                <h1>{name}</h1>
                <h2>{location}</h2>
                <h2>{bio
                    }</h2>
                <p>Votes : {count}</p>
                <button className="font-bold text-amber-50 rounded p-1 bg-red-700" onClick={()=>handleClick()}>Upvote</button>
            </div>
        )
    }
}

export default UserClass;