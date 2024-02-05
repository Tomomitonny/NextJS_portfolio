// import {InstructorProfileLessonCard} from '../../InstructorProfileLessonCard/InstructorProfileLessonCard';
import {CardTag} from '../../CardTag/CardTag';
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";


export const InstructorId = () => {


  const menuItems = ['About', 'Lesson', 'Showcase', 'Schedule'];
    
  return (
    <div className="justify-center">
      <div
        className="MainVisual z-10 ">
          <div
            className="w-full h-1/2 bg-gray-400 border border-black ">
          <img src="" alt="MainVisual" style={{ width: '300px', height: '395px' }} />

          </div>
      </div>
      <div
        className="Body flex w-[1260px] absolute z-20 top-[384px] inset-x-1/2 -translate-x-1/2">
            <aside className="object-left-top mr-[100px] bg-red-100 min-w-[360px] h-[712px] flex flex-col">
              <div
                className='w-[360px] h-[390px] bg-gray-300 '>
              </div>
              <div
                className='px-6'>
                  <div
                    className='font-semibold'>
                      <h2
                        className='mt-4 text-2xl'>
                          Bboy Crazy Machine
                      </h2>
                      <p
                        className='text-base text-gray-500'>
                          instructor
                      </p>
                  </div>
              <div
                className='mt-1.5 text-left text-sm font-bold '>
                  <div
                    className=''>
                      <p
                        className='text-gray-500'>
                          Genre
                      </p>
                      <CardTag />

                  </div>
                  <div
                    className='mt-2'>
                      <p
                        className='text-gray-400'>
                          Area
                      </p>
                      <p
                        className=''>
                          Tokyo
                      </p>

                  </div>
                  <div
                    className='mt-2'>
                      <p
                        className='text-sm text-gray-400'>
                          Current active lessons
                      </p>
                      <p
                        className='text-sm'>
                          4
                      </p>

                  </div>
                </div>
              </div>
                <div
                  className='border-t border-black px-6 mt-auto'>
                    <p
                    className='font-bold text-left mt-2'>
                      www.bboyinstructor.com
                    </p>
                    <div
                     className='flex space-x-10 text-3xl mt-1 mb-3'>
                      <FaYoutube />
                      <FaInstagram />
                        <FaXTwitter />
                        <FaTiktok />


                    </div>

                </div>
                <div
                  className=''>

                </div>
            </aside>

            <main
              className="">
                <div
                  className="flex flex-col border border-blue-600 w-[800px] mt-[87px]">
                    <div
                      className="w-[585px] mx-auto mt-10">
                        <ul className="flex flex-row space-x-20 mx-auto">
                          {menuItems.map((item, index) => (
                            <li key={index} className='font-semibold text-2xl text-gray-400 hover:text-black active:text-red-500'>
                              {item}
                            </li>
                          ))}
                        </ul>
                        

                    </div>
                    <div
                      className="border border-black h-[278px] mt-14">
                        <p
                          className="text-3xl font-bold mx-8 my-7 text-left">
                            About</p>
                    </div>
                    <div
                      className="About border border-black h-[930px] mt-10">
                        <div
                          className='flex'>
                        <p
                          className="text-3xl font-bold mx-8 my-7 text-left">
                            Active Lesson
                        </p>
                        <p
                          className="text-sm font-bold ml-auto mt-auto mr-14 mb-7">
                            See all
                        </p>
                        </div>
                        <div
                          className='mx-10 grid grid-cols-2 gap-x-20 gap-y-20'>
                        {/* <InstructorProfileLessonCard />
                        <InstructorProfileLessonCard />
                        <InstructorProfileLessonCard /> */}
                        </div>
                  
                    </div>
                    <div
                      className=" border border-black h-[524px] mt-10">
                        <p
                          className="text-3xl font-bold mx-8 my-7 text-left">
                            Instructor's Showcase</p>
                  
                    </div>
                    <div
                      className="border border-black h-[500px] mt-10">
                        <p
                          className="text-3xl font-bold mx-8 my-7 text-left">
                            Schedule</p>
                    </div>
                    <div
                      className="">

                    </div>

                </div>
            </main>
      </div>

    </div>
  );
};

