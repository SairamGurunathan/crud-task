import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../Core/Base";

export default function AddUser({user, setUser}){
  const history = useHistory()
  const [Id, setId] = useState('')
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Batch, setBatch] = useState('')
  const [Experience, setExperience] = useState('')

  const addNewUser = ()=>{
    const newUser = {
      Id,
      Name,
      Email,
      Batch,
      Experience
    }
    setUser([...user, newUser])
    history.push('/')
  }
  return (
    <BaseApp 
    title="Add New User" 
    styles="header">

      <div className="add-tag">

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

        <button className="btn-adduser btn"
        onClick={addNewUser}
        >Add User</button>
      </div>
    </BaseApp>
  );
}
