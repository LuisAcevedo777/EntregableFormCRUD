import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import mail from "./assets/img/correo-electronico-vacio.png"
import password from "./assets/img/contrasena.png"
import userImg from "./assets/img/usuario.png"
import birth from "./assets/img/cake.jpg"
import './App.css'







const UsersForm = ({ getUsers, userSelected, selectUser, open,open2, open3 }) => {
  const { handleSubmit, register, reset } = useForm();
const emptyUser = {email:'', password:'', first_name:'', last_name:'', birthday:''}

  useEffect(()=>{

reset(userSelected)

if(userSelected !== null){


}else{ reset(emptyUser)}

  },[userSelected])
  const submit = (data) => {
    console.log(data);
    if(userSelected){
      axios.put(`https://users-crud.academlo.tech/users/${userSelected.id}/`,data)
      .then(()=> {getUsers()});
      open()
      selectUser(null)
      
    }else{ 
    axios.post("https://users-crud.academlo.tech/users/", data)
      .then(() =>{
         getUsers()
         open2()
        reset(emptyUser)  
      })
     .catch(error=> console.log(error.response?.data)) 
    }
  };

  return (
    <form className="fromOne" onSubmit={handleSubmit(submit)}>
      <div className="input-container">
        <img src={mail} alt="email" />
        <input placeholder="Email" type="mail" id="email" {...register("email")} />
      </div>
      <div className="input-container">
      <img src={password} alt="password" />
        <input placeholder="Password" type="password" id="password" {...register("password")} />
      </div>

      <div className="inputName">
    
      <img src={userImg} alt="email" />
        <input placeholder="First Name" type="text" id="first" {...register("first_name")} />
     
       
        <input placeholder="Last Name" type="text" id="last" {...register("last_name")} />
      </div>
      <div className="input-container">
       
      <img src={birth} alt="email" />
        <input placeholder="Your Birthday" type="date" id="birthday" {...register("birthday")} />
      </div>
      <button>Upload</button>
    </form>
  );
};

export default UsersForm;

