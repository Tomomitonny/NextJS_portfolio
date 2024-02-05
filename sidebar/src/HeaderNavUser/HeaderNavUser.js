
export const HeaderNavUser = () => {
  
  return (
    <header>
      <div
        className="h-[76px] bg-white flex justify-center item-center">
      <div
        id="title"
        className='md:hidden h-[58] ml-3.5 my-auto'>        
          <h2>
            <img
              src="img/a-logo.png" alt="" />
          </h2>        
      </div>
      <div
        id="title"
        className='hidden md:block w-[207] h-[58] ml-3.5 my-auto'>        
          <h2>
            <img
              src="img/ambition.png" alt="" />
          </h2>        
      </div>
      <div
        className='md:hidden h-fit mx-auto my-auto '>        
          <h2>
            <img
              className="min-w-fit h-[48px] "
              src="img/a-search-box.png" alt="" />
          </h2>        
      </div>
      <div
        className='hidden md:block min-w-fit h-fit mx-auto my-auto'>        
          <h2>
            <img
              className="h-[48px]"
              src="img/search-box.png" alt="" />
          </h2>        
      </div>
      <div
        className="xl:hidden my-auto ml-auto mr-6">
          <div
            className="bg-gray-500 w-10 h-10 rounded-full">

            </div>
        </div>
      <div
        className='hidden xl:flex ml-auto mr-9 my-auto whitespace-nowrap'>
          <div
            className="my-auto text-base">
              Become an Instructor
          </div>
          <div
            className="my-auto mx-8 text-base">
              Login
          </div>
          <div
            className="bg-black text-white rounded text-base px-5 py-2.5">
              <div
                className="">
                  Sign Up
              </div>
          </div>
            
                   
                 
      </div>
      
      </div>
    </header>
    
    
  );
};


