import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseApp({title, styles, children}){
    const history = useHistory();
    return(
        <div>
            <div className="nav-bar {styles}">
            <div className="title">{title}</div>
                {/* <h1 className="profile">PROFILE DATA</h1> */}
                <div className="home">
                <button className="btn btn-home"
                onClick={()=>history.push("/")}>Home</button>
                <button className="btn btn-adduser "
                onClick={()=>history.push("/adduser")}>Add User</button>
                </div>
                </div>
            
            <div className="content">{children}</div>
            <footer>
                Contact US
                <div>E-Mail : </div>
                <div>Mobile : </div>
            </footer>
        </div>
        
    )
}