import { FaCircleCheck } from "react-icons/fa6";
import { FaCircleExclamation } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import React, { useState, useEffect } from 'react';

export const Banner = ({text}) => {
  const [variant, setVariant] = useState('warning');
  const [isVisible, setIsVisible] = useState(true);

  const alertVariations = {
    success: {
      border: 'border-green-600',
      bg: 'bg-green-100',
      text: 'text-green-600',
      icon: <FaCircleCheck size={24} />,
    },
    warning: {
      border: 'border-yellow-600',
      bg: 'bg-yellow-100',
      text: 'text-yellow-600',
      icon: <FaCircleExclamation size={24} />,
    },
    error: {
      border: 'border-red-600',
      bg: 'bg-red-100',
      text: 'text-red-600',
      icon: <FaTimesCircle size={24} />,
    },
  };

  const currentAlert = alertVariations[variant];
  const hideBanner = () => {
    setIsVisible(false);
  };
  useEffect(() => {
    let timeoutId;
    if (isVisible) {
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
    return () => clearTimeout(timeoutId);
  }, [isVisible]);


  return (
    <div>
      <h2>Banner</h2>
      
        <div 
         style={{
          transform: `translateY(${isVisible ? '0%' : '-100%'})`,
          transition: '0.3s',
          opacity: isVisible ? 1 : 0,
          heigt: isVisible ? '10vh' : 0,
        }}
        className={`alert ${currentAlert.border} ${currentAlert.bg} ${currentAlert.text} `}>
          <div className={`w-full flex justify-center items-center border-2 ${currentAlert.border} ${currentAlert.bg} py-4 text-xl font-semibold ${currentAlert.text}`}>
            <div className="flex items-center">
              {currentAlert.icon}
              <p className="ml-3">{text}</p>
            </div>
            <div className="absolute right-0 mr-9">
              <button onClick={hideBanner}>
                <RxCross2 size={24} className="" />
              </button>
            </div>
          </div>
        </div>
      
    </div>
  );
};
