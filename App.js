        //creating a h1 tag using React
        //what are we passing to createElement ?
        //1. element name / tag name
        //2. {} -> pass tag's atribute in this object (attributes)
        //3. what we want inside the tag/element (children)
        const heading = React.createElement("h1", {id:"heading"}, "Hello World Using React");

        console.log("heading ", heading);
        //React.createElement is just a javascript object

        //creating a root element 
        const root = ReactDOM.createRoot(document.getElementById("root"));

        //adding the heading to root
        root.render(heading);
        
        //render function converts the js object into HTML element that Browser understands
        
        //creating a nested structure only using React 

        /**
         * <div id="parent">
         *     <div id="node1">
         *         <h1 id="heading1">I'm heading 1</h1>
         *         <h2 id="heading2">I'm heading 2</h2>
         *     </div>
         *     <div id="node2">
         *         <h1 id="heading3">I'm heading 3</h1>
         *         <h2 id="heading4">I'm heading 4</h2>
         *     </div>
         * </div>
         */

        const parent = React.createElement("div", {id:"parent"},[
            React.createElement("div", {id:"node1"}, [
                React.createElement("h1", {id:"heading1"}, "I'm heading 1"),
                React.createElement("h2", {id:"heading2"}, "I'm heading 2")
            ]),
            React.createElement("div", {id:"node2"}, [
                React.createElement("h1", {id:"heading3"}, "I'm heading 3"),
                React.createElement("h2", {id:"heading4"}, "I'm heading 4"),
            ])
        ] );
        console.log("this is parent ", parent);

        root.render(parent);
        