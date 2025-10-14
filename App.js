        import React from "react";
        import {createRoot} from "react-dom/client"




        //React.createElement -> creates a js object
        // after rendering this to DOM, -> becomes html element
        // const heading = React.createElement("h1", {id:"heading",className:"font-bold, text-red-300"}, "created h1 element");
        const heading = <h1>Jsx heading🚀</h1>
        console.log("heading 10 ", heading);
        //this heading is jsx element not react element (because its not a funtion that returns jsx)

        //functional components
        const Hero = () => {
            return(
                <div>
                    {heading}
                    <h1>This is Hero section</h1>
                    <p>hero...</p>
                </div>
            )
        }

        const root = createRoot(document.getElementById("root"));
        console.log("root 12 ", root);
        root.render(<Hero/>);
