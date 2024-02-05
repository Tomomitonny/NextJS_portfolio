import { FaCircleCheck } from "react-icons/fa6";
import { FaCircleExclamation } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import React, { useState } from 'react';

export const Banner = () => {
  const [variant, setVariant] = useState('warning');
  const [children, setchildren] = useState(variant)


  return (
    <div>
      <h2>Banner</h2>
      <div className={`alert ${variant}`}>
        {variant === 'success' && 
          <div
            className='w-full flex justify-center items-center border-2 border-green-600 bg-green-100 py-4 text-xl font-semibold text-green-600'>
              <div
                className="flex items-center">
                  <FaCircleCheck size={24} />
                  <p
                    className="ml-3">
                      Successfully Created Lesson
                  </p>
              </div>
              <div
                className="absolute right-0 mr-9">
                  <RxCross2 size={24} className=""/>
              </div>
          </div>
        }
        {variant === 'warning' && 
          <div
            className='w-full flex justify-center items-center border-2 border-yellow-600 bg-yellow-100 py-4 text-xl font-semibold text-yellow-600'>
              <div
                className="flex items-center">
                  <FaCircleExclamation size={24} />
                  <p
                    className="ml-3">
                      Warning message
                  </p>
              </div>
              <div
                className="absolute right-0 mr-9">
                  <RxCross2 size={24} className=""/>
              </div>
          </div>
        }
        {variant === 'error' && 
          <div
          className='w-full flex justify-center items-center border-2 border-red-600 bg-red-100 py-4 text-xl font-semibold text-red-600'>
            <div
              className="flex items-center">
                <FaTimesCircle size={24} />
                <p
                  className="ml-3">
                    Error message
                </p>
            </div>
            <div
              className="absolute right-0 mr-9">
                <RxCross2 size={24} className=""/>
            </div>
          </div>
        }
      </div>
      
    </div>
  );
};




