import React from "react";
import {useState} from "react";



const Test = () => {
const [text , setText] = useState("");

return(
    <div>
        <input 
        onChange={(event)=> {
            setText(event.target.value);
        }}
        />

        <h1> {text} </h1>

    </div>
);

};

export default Test
