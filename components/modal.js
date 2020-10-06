import React, {useState} from 'react';
import {FiX} from 'react-icons/fi'
import {FcGoogle} from 'react-icons/fc'
import { SiFacebook, SiApple } from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Modal = ({ isOpen,  children }) => {
  return (
    <div>
      {isOpen && 
        <div className='absolute z-40 inset-0 opacity-25 bg-black'>
        </div>}

        {isOpen && 
        <motion.div initial={{ opacity: 0, y: 0 }} animate={{opacity: 1, y: -50 }}
          className='fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50'>
          <div className='relative mx-auto w-auto max-w-2xl'>
            { children }
          </div>
        </motion.div>}
    </div>
  );
}

export default Modal;
