
import { CardTag} from "../card-tag/cardTag"

export const InstructorProfileClassCard = () => {
  
  return (
    <div>
        <div
          className="body border border-gray-300 max-w-[313px] h-[320px] flex flex-col p-4">
          <div
            className="bg-gray-100 border border-black w-[281px] h-[137px] mb-2 rounded-xl resize-none">
          </div>
          <div
            className="flex flex-col text-left mb-6">
              <div
                className="">
                <h3
                  className="text-2xl mt-0 font-bold leading-0"
                  >Lesson Title
                </h3>
                <div className="flex flex-row flex-wrap text-2xl mt-1 gap-x-2 gap-y-1">
                  <CardTag text={'test,text'} />
                  <CardTag text={'test,text'} />
                  <CardTag text={'test,text'} />
                </div>
              </div>
          </div>
          <div
            className="flex flex-row">
          <div
            className="text-left">
                <p className="text-xs font-bold text-gray-400">
                  Next class
                </p>
                <p 
                  className="text-sm text-[#884614] font-bold mt-1"
                  >friday,march 12, 
                </p>
                <p 
                  className="text-sm text-[#884614] font-bold"
                  >10:00-14:00
                </p>
          </div>

          <div
            className="ml-auto mt-auto text-right">
                <div className="text-xs pb-0.5 text-red-800 font-bold">
                  4spot left
                </div>
                <div className="text-2xl font-black">
                  ¥3,000-
                </div>
          </div>
              </div>
        </div>
      
                
    </div>
    
    
  )
}


