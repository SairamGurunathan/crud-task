import React from "react";
import { useHistory } from "react-router-dom";

export default function Nopage(){
    const history = useHistory()
    return(
        <div>
            <h1>!404 ERROR PAGE</h1>
            <p>Please Click Home to go back</p>
            <button
            onClick={()=>history.push('/')}>Home</button>
        </div>
    )
}