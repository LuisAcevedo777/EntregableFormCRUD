import React from 'react';
import Modal from './Modal.jsx'
import { useModal } from './useModal.jsx';
import './Modal.css'

const Modals = () => {

  

        const[isOpenModal1, openModal1, closeModal1]=useModal(false)
    
    return (
        <div>
           <h2>Modales</h2> 
           <button className='buttonModal1' onClick={openModal1}>Modal 1</button>
           <Modal isOpen={isOpenModal1} closeModal1={closeModal1}>
<h1>hola</h1>
           </Modal>
        </div>
    );
};

export default Modals;