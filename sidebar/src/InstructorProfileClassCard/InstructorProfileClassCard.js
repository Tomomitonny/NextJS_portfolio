import { FaMapMarkerAlt } from "react-icons/fa";

import { CardTag} from "../CardTag/CardTag"

export const InstructorProfileClassCard = () => {
  
  return (
    <div>
        <div
          className="body border border-gray-300 max-w-[709px] h-[128px] flex flex-row px-6 py-3.5 shadow-md">
          <div
            className="my-auto">
            <p 
              className="text-sm text-gray-500 font-semibold">
                MAR
            </p>
            <p 
              className="text-4xl mt-1">
                11
            </p>
            <p 
              className="text-xl mt-1">
                10:00-11:00
            </p>
            
            </div>
          <div
            className="flex flex-col text-left ml-8 my-auto">
                <h3
                  className="text-xl mt-0 font-bold leading-0"
                  >Lesson Title
                </h3>
                <div
                className="flex flex-row items-center text-xl mt-2 font-light">
                <FaMapMarkerAlt size={20} className="mr-2 text-gray-500"/>
                Shinjuku,Tokyo
              </div>
          </div>
          <div
            className="flex flex-row ml-auto">

                <div
                  className="ml-auto mt-auto text-right">
                      <div className="text-base pb-0.5 text-red-800 font-bold">
                        4spot left
                      </div>
                      <div className="text-xl text-white font-bold bg-black mt-5 px-5 py-2 border rounded-md">
                        Reserve
                      </div>
                </div>
          </div>
        </div>
      
                
    </div>
    
    
  )
}


