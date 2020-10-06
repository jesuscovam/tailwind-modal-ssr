import React, {useState} from 'react';

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
            <div className='bg-white w-full rounded shadow-lg'>

            <span>Id culpa ex veniam officia deserunt consectetur sint amet commodo amet ex. Consectetur aliqua magna voluptate pariatur do officia proident. Laborum voluptate incididunt non ullamco ut consequat laborum. Mollit qui id irure enim quis nostrud dolor occaecat sunt qui aliqua voluptate. Officia labore in quis laboris labore elit duis qui fugiat amet. Laborum id exercitation culpa aliquip anim irure ad mollit.</span>
            <button className='rounded px-4 py-2 shadow bg-red-500 text-white' onClick={toggleModal}>Close</button>
            </div>
          </div>
        </div>}
    </div>
  );
}

export default ModalTutorial;
