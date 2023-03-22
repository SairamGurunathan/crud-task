import React from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Core/Base";

export default function Viewuser({user, setUser}){
  const history = useHistory();
    const {id} = useParams()
    const person = user[id]

    return(
      <BaseApp  
      title="View User Data"
      styles="header">
          <div className="child">
                        <h1>{person.Name}</h1>
                        <p>Email : {person.Email}</p>
                        <p>Batch : {person.Batch}</p>
                        <p>Exp : {person.Experience}</p>
                        <button className="btn btn-back"
                        onClick={()=>history.push('/')}>Back</button>
                    </div>
      </BaseApp>
    )
}