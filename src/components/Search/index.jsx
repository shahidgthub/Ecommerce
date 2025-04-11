import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  return (
    <div className='searchbox w-full bg-gray-100 px-4 py-2 rounded-md flex items-center shadow-sm'>
      <input
        type='text'
        placeholder='Search for products...'
        className='bg-transparent outline-none w-full text-sm text-gray-800'
      />
      <button className='w-[30px] h-[30px] rounded-full bg-white text-gray-500 hover:bg-orange-500 hover:text-white flex items-center justify-center p-1 transition-colors duration-200'>
        <FiSearch size={16} />
      </button>
    </div>
  )
}

export default Search
