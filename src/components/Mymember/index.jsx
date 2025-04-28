import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Mymember = () => {
  const [isOpen, setIsOpen] = useState(false); // 🛠️ Move useState here inside the component!

  const handleSubmit = () => {
    setIsOpen(!isOpen); // toggle true/false
  };

  return (
    <>
      <div className='bg-white shadow relative py-8'>
        {/* Top part */}
        <div className='flex justify-between px-8'>
          <div>
            <h1 className='text-2xl font-semibold pt-4 px-2'>
              Welcome to Ecommerce Family
            </h1>
            <p className='text-lg font-semibold pt-2 px-2'>
              As a member of our growing community, you have the power to shape the future of <br/>
              blockchain technology. By inviting your friends and family to join ecommerce, you're not just <br/>
              helping them, you're contributing to the creation of a more connected and prosperous world.
            </p>
          </div>
          <img 
            src='https://img.freepik.com/free-photo/happy-family-couch-living-room-including-father-mother-daughter-looking-using-notebook_554837-257.jpg?ga=GA1.1.1850557291.1744560571&semt=ais_hybrid&w=740' 
            className='h-[150px] w-[200px]  rounded-lg' 
            alt='Family' 
          />
        </div>

        <p className='text-xl font-bold pt-8 px-8'>Together, we can achieve great things.</p>
      </div>

      {/* 2Registration Status */}
      <div className='bg-white mt-8 py-6'>
        <h1 className='text-2xl font-bold px-8'>Registration Status:</h1>
        <p className='pt-4 text-xl px-8'>
          You've successfully registered 0 members using your link, and 0 members are still<br/>
          Not verified.
        </p>

        {/* Search + Dropdown */}
        <div className='flex justify-between items-center px-4 py-2'>
          <h1 className='text-2xl font-bold'>Members verified</h1>

          <div className='relative'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.65 6.15z' />
              </svg>
            </div>

            <input
              type='search'
              placeholder='Search by name'
              className='block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
            />
          </div>
        </div>

        {/* Table Header */}
        <div className="border flex justify-between py-2 px-4 mt-6 font-semibold text-gray-700 mx-4">
          <div className="flex-1">First name</div>
          <div className="flex-1">Last name</div>
          <div className="flex-1">Email</div>
          <div className="flex-1">Joined date</div>
          <div className="flex-1">Follows</div>
          <div className="flex-1">Invited</div>
          <div className="flex-1">Activities</div>
          <div className="flex-1">Total</div>
        </div>

        {/* Button + Dropdown */}
        {/* <div className='relative pt-4 '>
          <button 
            className='flex items-center gap-1 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition absolute right-4'
            onClick={handleSubmit} // Move onClick to button, not the icon
          >
            Show All
            <MdOutlineKeyboardArrowDown size={20} />
          </button>

          {isOpen && (
            <div className="absolute right-4 top-12 bg-gray-200 p-4 mt-2 rounded-lg shadow">
              <p>Option 1</p>
              <p>Option 2</p>
              <p>Option 3</p>
            </div>
          )}
        </div> */}
        <div className="bg-white mt-8 py-6">
  {/* Other Content */}

  {/* Button + Dropdown */}
  <div className="flex justify-end px-4 pt-4 relative"> 
    <button 
      className="flex items-center gap-1 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition"
      onClick={handleSubmit}
    >
      Show All
      <MdOutlineKeyboardArrowDown size={20} />
    </button>

    {isOpen && (
      <div className="absolute right-0 top-14 bg-white p-4 mt-2 rounded-lg shadow border">
        <p>Option 1</p>
        <p>Option 2</p>
        <p>Option 3</p>
      </div>
    )}
  </div>
</div>

<div className='flex justify-between px-6'>
  <h1 className='text-xl font-bold'>Members not verified</h1>
  <p>Please note that your friends are not verified, and you have not received any rewards.</p>
  <div className='relative'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.65 6.15z' />
              </svg>
            </div>

            <input
              type='search'
              placeholder='Search by name'
              className='block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
            />
          </div>
          
</div>
<div className="border flex justify-between py-2 px-4 mt-6 font-semibold text-gray-700 mx-4">
          <div className="flex-1">First name</div>
          <div className="flex-1">Last name</div>
          <div className="flex-1">JoinedDate</div>
          <div className="flex-1">Email</div>
          
        </div>
    <button 
      className="flex items-center gap-1 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition mx-6 mt-8"
      onClick={handleSubmit}
    >
      Show All
      <MdOutlineKeyboardArrowDown size={20} />
    </button>

    {isOpen && (
      <div className="w-[100px] top-14 bg-white p-4 mt-2 rounded-lg shadow border">
        <p>Option 1</p>
        <p>Option 2</p>
        <p>Option 3</p>
      </div>
    )}

      </div>
      {/* 3Let's grow together!
 */}
 <div className='mt-8 bg-white'>
  <h1 className='pt-4 text-center text-2xl font-bold'>Let's grow together!
  </h1>
  <p className='text-lg px-6 pt-4 font-semibold'>Start inviting your friends and family today and watch your referral tree flourish. The more you grow, the more rewards you'll earn. Together, we can <br/>create a brighter future</p>
 <h1 className='text-xl font-bold px-6 pt-6'>
 Tips to help you:</h1>
 <p className='pt-3 text-xl px-6'>1.Emphasizes community and growth: Focuses on the idea of building a strong and growing community together.
 </p>
 <p className='pt-3 text-xl px-6'>2.Highlights the benefits of referring: Explains how referring new members can contribute to the success of the platform and benefit the member personally.</p>
 <p>
 <p className='pt-3 text-xl px-6 '>3.Creates a sense of excitement and anticipation: Uses positive language and phrases to encourage members to take action.</p>
 
</p>

  <p className='pt-3 text-xl px-6'>4.Aligns with the Ecommerce brand story: Reinforces the themes of family, innovation, and empowerment.
  </p>
  </div>
    </>
  );
}

export default Mymember;
