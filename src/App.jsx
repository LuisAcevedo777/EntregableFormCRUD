import axios from "axios";
import React, { useEffect, useState } from "react";
import UsersForm from "./UsersForm";
import UsersList from "./UsersList";
import "./App.css";
import Modal from './components/Modal.jsx'
import { useModal } from './components/useModal.jsx';
import './components/Modal.css'



function App() {
  const [usersList, setUsersList] = useState([]);
const[userSelected, setUserSelected]= useState(null)
const[isOpenModal1, openModal1, closeModal1]=useModal(true)
const[isOpenModal2, openModal2, closeModal2]=useModal(false)
const[isOpenModal3, openModal3, closeModal3]=useModal(false)
const[isOpenModal4, openModal4, closeModal4]=useModal(false)

  useEffect(() => {
    axios.get("https://users-crud.academlo.tech/users/")
      .then((res) => setUsersList(res.data));
  }, []);

  const getUsers = () => {
    axios.get("https://users-crud.academlo.tech/users/")
      .then((res) => setUsersList(res.data));
  };


const selectUser=(user)=>{

  setUserSelected(user)
  openModal1()
}
console.log(userSelected);

  return (
    <div className="App" >
 <section> 
<div>
          
           
           <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
           <UsersForm open3={openModal4} open2={openModal3} open={openModal2} getUsers={getUsers} userSelected={userSelected} selectUser={selectUser}/>
           </Modal>
           <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
            <p className="pone">Tu contacto ha sido  <br /> ACTUALIZADO!</p>
           </Modal>
           <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
            <p className="ptwo">Tu contacto ha sido <br/> CREADO CORRECTAMENTE!!</p>
           </Modal>
           <Modal isOpen={isOpenModal4} closeModal={closeModal4}>

            
           </Modal>
        </div>
     
      
      <UsersList openModal1={openModal1} usersList={usersList} selectUser={selectUser} getUsers={getUsers}/>
      <button onClick={openModal1} className='open'>open form</button>
      </section>
    </div> 
  );
}

export default App;