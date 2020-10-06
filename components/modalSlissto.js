import React from 'react';
import Modal from './Modal'
import {FiX} from 'react-icons/fi'
import {FcGoogle} from 'react-icons/fc'
import { SiFacebook, SiApple } from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'

const ModalLogin = ({modal, toggleModal}) => (
  <Modal isOpen={modal}>
        <main className='bg-white py-4 px-5 rounded shadow-lg flex flex-col justify-center items-center text-center'>
          <header className='self-end'>
            <FiX aria-label='cancelar modal' className='cursor-pointer text-black rounded-full p-1 text-xl transition duration-300 hover:bg-gray-600 hover:text-gray-200' onClick={toggleModal}/>
          </header>
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
              <div aria-label='button' className='px-4 py-2 flex justify-between items-center space-x-5 border-gray-800 shadow rounded w-full cursor-pointer'>
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
      </Modal>   
)

export default ModalLogin;
