import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { CardTag} from "../CardTag/CardTag"
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

const ResponsiveTest = () => (
  <div>
    <Desktop>パソコン</Desktop>
    <Mobile>スマートフォン</Mobile>
  </div>
)

export default ResponsiveTest;
// export const LessonClassListingCard = () => {
  


//   return (
//     <div className="body border border-gray-300 w-[784px] h-[178px] flex flex-row rounded-3xl">
//       <div className="bg-gray-100 border border-black w-[148px] h-[148px] ml-4 my-auto rounded-md"></div>
//       <div className="ml-5 flex flex-col mt-4 text-left">
//         <div className="">
//           <div className="text-sm text-[#884614] font-bold">friday,march 12, </div>
//           <div className="text-2xl mt-1 font-bold">Lesson Title</div>
//           <div className="flex items-center text-base mt-2 font-bold"><IoPersonCircle size={24} className="mr-2"/>Instructor name</div>
//           <div className="flex flex-row text-2xl mt-2"><CardTag /><CardTag /><CardTag /></div>
//         </div>
//         <div className="flex flex-row items-center text-sm mt-auto mb-4 font-light"><FaMapMarkerAlt size={14} className="mr-2"/>Shinjuku,Tokyo</div>
//     </div>
//     <div className="ml-auto m-4 flex flex-col text-right">
//       <div className="ml-auto"><FaRegHeart size={30}/></div>
//       <div className="mt-auto">
//         <div className="text-sm pb-0.5 text-red-800 font-bold">4spot left</div>
//         <div className="ml-auto text-2xl h-full font-black">¥3,000-</div>
//       </div>
//     </div>
    
    
      
//     </div>
//   )
// }


