import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser';
import UserComponent from './Components/UserComp';
import Viewuser from './Components/ViewUser';
import { data } from "./Data/Data";
import { useState } from 'react';
import Nopage from './Components/Nopage';
import EditUser from './Components/EditUser';

function App() {
  const [user, setUser] = useState(data)
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <UserComponent 
          user = {user}
          setUser = {setUser}/>
        </Route>
        <Route path={"/adduser"}>
          <AddUser
          user = {user}
          setUser = {setUser}/>
        </Route>
        <Route path={"/view/:id"}>
          <Viewuser 
          user = {user}
          setUser = {setUser}/>
        </Route>
        <Route path={"/edit/:id"}>
        <EditUser
        user = {user}
        setUser = {setUser}/>
        </Route>
        <Route path={"/students"}>
          <Redirect path="/"/>
        </Route>
        <Route path={'**'}>
          <Nopage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
