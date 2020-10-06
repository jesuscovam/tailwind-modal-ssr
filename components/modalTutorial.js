import React, {useState} from 'react';
import {FiX} from 'react-icons/fi'
import {FcGoogle} from 'react-icons/fc'
import { SiFacebook, SiApple } from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'
import ModalLogin from './modalLogin'
import Modal from './modal'

const ModalTutorial = () => {
  const [modal, setModal] = useState(false)
  const toggleModal = () => setModal(val => !val)
  return (
    <div className='p-10'>
      <button onClick={toggleModal} className='px-4 py-2 rounded shadow bg-pink-500 text-white focus:outline-none'>toggle modal</button>

      <ModalLogin modal={modal} toggleModal={toggleModal} />
    </div>
  );
}

export default ModalTutorial;
