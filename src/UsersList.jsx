import axios from "axios";
import React from "react";
import './App.css'
import pencil from './assets/img/lapiz.png'
import garbage from './assets/img/boton-eliminar.png'

const UsersList = ({ usersList, selectUser,getUsers, openModal1 }) => {

const usersListOrd = usersList.sort((a, b) => a.first_name.localeCompare(b.first_name)

)
const deleteUser=(user)=>{

  axios.delete(`https://users-crud.academlo.tech/users/${user.id}/`)
  .then(()=> getUsers())
}

  return (
    <div className="containerList">
      <ul className="ulList">
        {usersListOrd.map((user) => (
         
          <li className="list" key={user.email}>
            <ul className="dates">
              <li>
              {user.first_name}, {user.last_name}
              </li>
            
      
              <li>
             
                {user.email}
              </li>
              <li>
                
                {user.birthday}
              </li>
              </ul>
            <div className="buttons">
            <button onClick={()=>selectUser(user)} ><img className="pencil" src={pencil} alt="" /></button>
            <button onClick={()=> deleteUser(user)}><img className="garbage" src={garbage} alt="" /></button></div>
          </li>
        ))}
      </ul>
      
    </div>
  );
}; 

export default UsersList;
