import react, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";



export default function UserComponent({user, setUser}){
    const history = useHistory();

    const DeleteUser = (index)=>{
        const EraseList = user.filter((person, Id)=>person.Id !== index)
        setUser (EraseList)
    }
    return(
        <BaseApp
            title="Dash Board"
            styles="header">
            <div className="parent">
                {user.map((person, index)=>(
                    <div key = {index} className="child">
                        <h1>{person.Name}</h1>
                        <p>Email : {person.Email}</p>
                        <p>Batch : {person.Batch}</p>
                        <p>Exp : {person.Experience}</p>
                        <button className="btn-edit btn"
                        onClick={()=>history.push(`/edit/${person.Id}`)}>Edit</button>

                        <button className="btn-add btn"
                        onClick={()=>history.push(`/view/${index}`)}>View</button>

                        <button className="btn-del btn"
                        onClick={()=>DeleteUser(person.Id)}>Del</button>
                    </div>
                ))}
            </div>      
      </BaseApp>
    )
}