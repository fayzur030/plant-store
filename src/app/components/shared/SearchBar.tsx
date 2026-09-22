import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <div className='relative w-full max-w-md'>
        <Search className='absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0F5132]/60 sm:h-5 sm:w-5' />

        <input
          type='text'
          placeholder='Search nature, plants...'
          className='w-full rounded-full border border-green-200 bg-white py-3 pl-10 pr-24 text-sm text-[#0F5132] placeholder-[#0F5132]/60 shadow-xl outline-none transition-all focus:border-[#8ec4a3] focus:ring-2 focus:ring-[#8ec4a3]/40 sm:py-3.5 sm:pl-11 sm:pr-28'
        />

        <button
          type='button'
          className='absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-[#0F5132] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#0F5132]/90 sm:px-5 sm:py-2.5 sm:text-sm'
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBar
