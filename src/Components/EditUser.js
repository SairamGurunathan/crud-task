import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../Core/Base";

export default function EditUser({user, setUser}) {
  const history = useHistory()
  const [Id, setId] = useState('')
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Batch, setBatch] = useState('')
  const [Experience, setExperience] = useState('')

  const {id} = useParams();
  const userSelect = user.find((person)=>person.Id === id)
//   console.log(userSelect)
    useEffect(()=>{
        setId(userSelect.Id)
        setName(userSelect.Name)
        setEmail(userSelect.Email)
        setBatch(userSelect.Batch)
        setExperience(userSelect.Experience)
    },[]);

    const updateUser = ()=>{
        const editIndex = user.findIndex((person) => person.Id === id)
        const editedData = {
            Id,
            Name,
            Email,
            Batch,
            Experience
        }
        user[editIndex] = editedData;
        setUser([...user]);
        //console.log(user[editIndex] = editedData)
        history.push("/") 
    }

  return (
    <BaseApp 
    title="Edit New User" 
    styles="header">

      <div className="edit-tag">

          <input placeholder="ID"
          value = {Id}
          onChange = {(event)=>setId(event.target.value)}/>
        
          <input placeholder="Name"
          value = {Name} 
          onChange = {(event)=>setName(event.target.value)}/>
    
          <input placeholder="Email"
          value = {Email} 
          onChange = {(event)=>setEmail(event.target.value)}/>
    
          <input placeholder="Batch"
          value = {Batch} 
          onChange = {(event)=>setBatch(event.target.value)}/>
 
          <input placeholder="EXP"
          value = {Experience} 
          onChange = {(event)=>setExperience(event.target.value)}/>
          <br/>

        <button className="btn-update btn"
        onClick={updateUser}
        >Update</button>
      </div>
    </BaseApp>
  );
}
