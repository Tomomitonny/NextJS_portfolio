import React, {useState, useEffect} from 'react';
import './sidebar.css';
import { IoMdHome } from "react-icons/io";

export function SideBar() {

  const [active, setActive] = useState('');
  useEffect(() => {
    console.log("active")
    console.log(active)
  },[active])

  const classToggle = (item) => {
    
    setActive(item)
  }

  const menuItems = [
    'Dashboard','Profile','Schedule','Notifications','Earnings','Lesson'
  ]
  const lessonItems = [
    'Hip Hop','Jazz 102'
  ]
  const sideBarClassName = [
    'top-0 h-full w-60 fixed overflow-auto bg-white'
  ]
  const listStyle = [
    'py-8 px-5 w-full text-xl font-sans text-gray-800 no-underline justify-start inline-flex item-center hover:bg-blue-500 cursor-pointer'
  ]


  return (
    <body className="w-full">
    <header id="header"></header>
    
    
    <aside className={`${sideBarClassName}`}>
      <div id="title" className='py-5'>
        <a href="">
          <h2><img src="img/Logo-Instructor.png" alt="" /></h2>
        </a>  
      </div>





 <div className="">
    <ul className="py-6">
      {menuItems.map((item) =>{
        return (
          <li 
            onClick={() => classToggle(item)} 
            className={`z-20 ${active===item ? "bg-blue-800 text-white" : ""} ${listStyle}`} 
          // style={listStyle}
          >
            {/* <img className="relative mr-4 fill-current"  src="img/icons.svg" alt="" /> */}
            <IoMdHome size={25} className='relative mr-4'/>
            {item}
          </li>
        )
      })}
      
        { 
          <ul className={`animate-slideIn z-10 lessonList ml-9 border-l ${active==='Lesson' ? "" : "hidden"} `}>
          <li className={`${listStyle}`} >
          <img className="relative mr-0.5"  src="img/icons.svg" alt="" />
              New Lesson
            </li>
          { lessonItems.map((item) =>{
          return (
            <li 
              onClick={() => classToggle(item)} 
              className={`menu ${active===item ? "bg-blue-800" : ""} ${listStyle}`} 
            >
              
              {item}
            </li>
          )
        })}
        </ul>
      }
      
      
      
      
      
      
    </ul>
    
  </div>
  
 
  

</aside>
<main>


</main>

</body>
  );
}

