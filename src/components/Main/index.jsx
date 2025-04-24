import React from 'react'
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";



const Main = () => {
  return (
    <div>
          <section className=" flex  gap-8">
            <div className='w-[600px] h-[400px] bg-white rounded-lg'>
              <button className='text-white bg-green-900 p-2 px-2 mt-4 rounded-lg mx-3'> General Url</button>
              <div className='flex gap-8 py-6 mx-6 mt-4'>
                <div className='w-[150px] bg-green-300 flex flex-col items-center space-y-5 rounded-xl py-4'>
               <div className='w-[40px] h-[40px] bg-green-500 rounded-full flex items-center justify-center '>
 <FaAmericanSignLanguageInterpreting className='text-[24px] text-white'/>

              </div>
                  <p className='text-2xl font-bold'>3000</p>
                  <p className='text-xl font-semibold'>Total rewards</p>

                </div>
                <div className='w-[150px] bg-orange-100 flex flex-col items-center space-y-5 rounded-xl py-4'>
               <div className='w-[40px] h-[40px] bg-orange-400 rounded-full flex items-center justify-center '>
 <IoMdContacts  className='text-[24px] text-white'/>

              </div>
                  <p className='text-2xl font-bold'>0</p>
                  <p className='text-xl font-semibold'>Total member</p>

                </div>
                <div className='w-[150px] bg-green-300 flex flex-col items-center space-y-5 rounded-xl py-4'>
               <div className='w-[40px] h-[40px] bg-green-500 rounded-full flex items-center justify-center '>
 <FaAmericanSignLanguageInterpreting className='text-[24px]'/>

              </div>
                  <p className='text-2xl font-bold'>3000</p>
                  <p className='text-xl font-semibold'>Total MLXG</p>

                </div>
               
                
              </div>


            </div>
            <div className='w-[600px] bg-white rounded-lg'>
              <h1 className='text-2xl font-bold pt-4 px-3'>Progress</h1>

            </div>
            
          </section>

          {/* Section 2: Recent Activities */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Recent Activities</h2>
            <p>Display latest user or system activities here.</p>
          </section>

          {/* Section 3: Quick Actions */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">Quick Actions</h2>
            <p>Buttons or links for common tasks like "Create Post", "Manage Users", etc.</p>
          </section>
    </div>
  )
}

export default Main;
