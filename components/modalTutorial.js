import React, {useState} from 'react';

// import ModalLogin from './modalLogin'
import ModalSlissto from './modalSlissto'

const ModalTutorial = () => {
  const [modal, setModal] = useState(false)
  const toggleModal = () => setModal(val => !val)
  return (
    <div className='p-10'>
      <button onClick={toggleModal} className='px-4 py-2 rounded shadow bg-pink-500 text-white focus:outline-none'>toggle modal</button>

      <ModalSlissto modal={modal} toggleModal={toggleModal} />
    </div>
  );
}

export default ModalTutorial;
