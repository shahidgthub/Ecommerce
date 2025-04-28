import React from 'react'
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { RiSurveyFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import ProgressDashboard from '../ProgrssDashboard';
import { FaCheckCircle } from "react-icons/fa";
import Graph from '../Graph';
import Pagination from '../Pagination';










const Main = () => {
  return (
    <div>
      {/* section 1 */}
<section className=" flex  gap-8 lg:flex-nowrap flex-wrap">
            <div className='lg:w-[680px] md:w-[600px] w-[320px] h-[400px] bg-white rounded-lg'>
              <button className='text-white bg-green-600 p-2 px-2 mt-4 rounded-lg mx-3  font-semibold'> General Url</button>
              <div className='flex gap-8 py-6 mx-6 mt-4 lg:flex-nowrap flex-wrap'>
                <div className='w-[200px] bg-green-300 flex flex-col items-center space-y-5 rounded-xl py-4'>
               <div className='w-[40px] h-[40px] bg-green-500 rounded-full flex items-center justify-center '>
 <FaAmericanSignLanguageInterpreting className='text-[24px] text-white'/>

              </div>
                  <p className='text-2xl font-bold'>3000</p>
                  <p className='text-xl font-semibold'>Total rewards</p>

                </div>
                <div className='w-[200px] bg-orange-100 flex flex-col items-center space-y-5 rounded-xl py-4'>
               <div className='w-[40px] h-[40px] bg-orange-400 rounded-full flex items-center justify-center '>
 <IoMdContacts  className='text-[24px] text-white'/>

              </div>
                  <p className='text-2xl font-bold'>0</p>
                  <p className='text-xl font-semibold'>Total member</p>

                </div>
                <div className='w-[200px] bg-green-300 flex flex-col items-center space-y-5 rounded-xl py-4'>
               <div className='w-[40px] h-[40px] bg-green-500 rounded-full flex items-center justify-center '>
 <FaAmericanSignLanguageInterpreting className='text-[24px] text-white'/>

              </div>
                  <p className='text-2xl font-bold'>3000</p>
                  <p className='text-xl font-semibold'>Total MLXG</p>

                </div>
               
                
              </div>


            </div>
            <div className='w-[680px] bg-white rounded-lg'>
              {/* <h1 className='text-2xl font-bold pt-4 px-3'>Progress</h1> */}
              
              <ProgressDashboard/>
              <Pagination/>
              
            </div>
            
          </section>

          {/* Section 2: Recent Activities */}
          <section className="mt-4">
            <div className='flex gap-8 lg:flex-nowrap flex-wrap'>
            <div className='lg:w-[680px] md:w-[600px] w-[320px] bg-white rounded-lg'>
              <div className='px-3'>
              <h1 className='text-xl font-semibold'>Task list</h1>
              <p className=' pt-3'> 
  Claim each task to receive a reward in your reward balance. You need 1,000,000 rewards to reach Level 2 and <br />
  <span className="text-red-700">Tasks marked in red are mandatory.</span>
</p>
<div className=' px-4 space-y-4 h-[260px] overflow-y-auto'>
<div className='flex justify-between pt-3'>
<div className='flex gap-4'>
  <div className='bg-purple-100 w-[50px] h-[50px] rounded-full flex items-center justify-center'>
  <RiSurveyFill className='text-[24px] text-purple-400' />
  </div>
  <div>
    <h1 className='text-[16px] font-semibold text-red-500'>Complete a survey on user experience
    </h1>
    <p>Reward: 120000
    </p>
  </div>
</div>
<div>
<button className="relative overflow-hidden px-5 py-2 rounded-xl font-semibold text-white bg-green-600 group">
  <span className="relative z-10">Claim</span>
  <span className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
</button>
</div>
</div>
{/* 2 */}
<div className='flex justify-between'>
<div className='flex gap-4'>
  <div className='bg-blue-100 w-[50px] h-[50px] rounded-full flex items-center justify-center'>
  <FaTelegramPlane className='text-[24px] text-blue-400' />
  </div>
  <div>
    <h1 className='text-[16px] font-semibold text-red-500'>Follow our Telegram
    </h1>
    <p>Reward: 150000
    </p>
  </div>
</div>
<div>
<button className="relative overflow-hidden px-5 py-2 rounded-xl font-semibold text-white bg-green-600 group">
  <span className="relative z-10">Claim</span>
  <span className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
</button>
</div>
</div>
{/* 3 */}
<div className='flex justify-between'>
<div className='flex gap-4'>
  <div className='bg-blue-100 w-[50px] h-[50px] rounded-full flex items-center justify-center'>
  <FaInstagram className='text-[24px] text-pink-400' />
  </div>
  <div>
    <h1 className='text-[16px] font-semibold text-red-500'>Follow our Instagram
    </h1>
    <p>Reward: 200000
    </p>
  </div>
</div>
<div>
<button className="relative overflow-hidden px-5 py-2 rounded-xl font-semibold text-white bg-green-600 group">
  <span className="relative z-10">Claim</span>
  <span className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
</button>
</div>
</div>
{/* 4 */}
<div className='flex justify-between'>
<div className='flex gap-4'>
  <div className='bg-green-100 w-[50px] h-[50px] rounded-full flex items-center justify-center'>
  <CgProfile  className='text-[24px] text-green-400' />
  </div>
  <div>
    <h1 className='text-[16px] font-semibold text-red-500'>Complete Your Profile
    </h1>
    <p>Reward: 90000
    </p>
  </div>
</div>
<div>
<button className="relative overflow-hidden px-5 py-2 rounded-xl font-semibold text-white bg-green-600 group">
  <span className="relative z-10">Claim</span>
  <span className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
</button>
</div>
</div>
{/* 5 */}
<div className='flex justify-between'>
<div className='flex gap-4'>
  <div className='bg-blue-100 w-[50px] h-[50px] rounded-full flex items-center justify-center'>
  <FaTwitter className='text-[24px] text-blue-400' />
  </div>
  <div>
    <h1 className='text-[16px] font-semibold text-red-500'>Follow our Twitter
    </h1>
    <p>Reward: 200000
    </p>
  </div>
</div>
<div>
<button className="relative overflow-hidden px-5 py-2 rounded-xl font-semibold text-white bg-green-600 group">
  <span className="relative z-10">Claim</span>
  <span className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
</button>
</div>
</div>
{/* 6 */}
<div className='flex justify-between'>
<div className='flex gap-4'>
  <div className='bg-red-100 w-[50px] h-[50px] rounded-full flex items-center justify-center'>
  <FaYoutube className='text-[24px] text-red-400' />
  </div>
  <div>
    <h1 className='text-[16px] font-semibold text-red-500'>Follow our Youtube
    </h1>
    <p>Reward: 10000
    </p>
  </div>
</div>
<div>
<button className="relative overflow-hidden px-5 py-2 rounded-xl font-semibold text-white bg-green-600 group">
  <span className="relative z-10">Claim</span>
  <span className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
</button>
</div>
</div>

</div>
</div>

            </div>
            <div className='lg:w-[680px] md:w-[600px] w-[320px] bg-white rounded-lg'>
              <Graph/>
            </div>
            </div>
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
