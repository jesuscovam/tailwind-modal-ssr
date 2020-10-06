import React, {useState} from 'react';
import {FiX} from 'react-icons/fi'
import {FcGoogle} from 'react-icons/fc'
import { SiFacebook, SiApple } from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'

const ModalTutorial = () => {
  const [modal, setModal] = useState(false)
  const toggleModal = () => setModal(val => !val)
  return (
    <div>
      <button onClick={toggleModal} className='px-4 py-2 rounded shadow bg-pink-500 text-white focus:outline-none'>toggle modal</button>
      {modal && 
        <div className='absolute z-40 inset-0 opacity-25 bg-black'>
        </div>}

        {modal && 
        <div className='fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50'>
          <div className='relative mx-auto w-auto max-w-2xl'>
            <main className='bg-white p-4 rounded shadow-lg flex flex-col justify-center items-center text-center'>
          <h1 className='text-lg font-bold'>Registrate en Slissto</h1>

          <div className='divide-y divide-gray-900'>
            <section className='mt-10 mb-5 space-y-4 flex flex-col items-center justify-center'>
              <div aria-label='button' className='px-4 py-2 flex justify-between items-center space-x-5 border-gray-800 shadow rounded w-full cursor-pointer'>
                <FcGoogle />
                <p className='text-sm font-light'>Continuar con Google</p>
              </div>
              <div aria-label='button' className='px-4 py-2 flex justify-between items-center space-x-5 border-gray-800 shadow rounded w-full cursor-pointer'>
                <SiFacebook />
                <p className='text-sm font-light'>Continuar con Facebook</p>
              </div>
              <div aria-label='button' className='px-4 py-2 flex justify-between items-center space-x-5 border-gray-800 shadow rounded w-full cursor-pointer'>
                <SiApple />
                <p className='text-sm font-light'>Continuar con Apple</p>
              </div>
            </section>
            <section className='mt-5 pt-5'>
              <div 
                
                aria-label='button' className='px-4 py-2 flex justify-between items-center space-x-5 border-gray-800 shadow rounded w-full cursor-pointer'>
                  <HiOutlineMail />
                  <p className='text-sm font-light'>Continuar con Correo</p>
                </div>
            </section>

          </div>

          <div className='mt-10 flex justify-around text-xs font-light'>
              <p>¿Ya tienes una cuenta?</p>
              <button className='ml-2 font-bold'>Iniciar Sesión</button>
            </div>
        </main>
          </div>
        </div>}
    </div>
  );
}

export default ModalTutorial;
