import React, { useState } from 'react';
import { TiWarningOutline } from 'react-icons/ti';

const DeletePhotoModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null; 
  }

  return (
    
  <div>
    <div
      className='fixed flex bg-black bg-opacity-50 w-full h-full'>
        <div
          className='flex flex-col mx-auto my-auto bg-white w-[371px] h-[365ox] rounded-xl px-10 py-4 space-y-8'>
            <div
              className='w-fit bg-red-100 rounded-full mx-auto py-auto'>
                <TiWarningOutline size={40} color='red' className="m-[10px]"/>
            </div>
            <div
              className='w-[290px] mt-8  text-center'>
                <p
                  className="text-2xl font-bold">
                    Delete this Photo?
                  </p>
                <p
                  className="mt-2 text-2xl whitespace-pre-line">
                    The photo can’t be recovered once you delete it. 
                  </p>

            </div>
            <div
              className='flex flex-col space-y-6'>
                
                <button
                  className="h-10 py-auto bg-red-600 text-white px-4 py-2 rounded-md text-base font-bold"
                  >
                    Delete
                </button>


                <button
                  class="h-10 py-auto bg-white text-black-500 border border-black px-4 py-2 rounded-md text-base font-bold"
                  onClick={onClose}>
                  Cancel
                </button>

            </div>
            
        </div>
    </div>      
  </div>

  );
};

const AboutPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div>
        <button onClick={openModal}>Click</button>
      </div>
      <DeletePhotoModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default AboutPage;