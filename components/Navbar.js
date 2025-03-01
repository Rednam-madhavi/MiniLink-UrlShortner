import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-800 text-white flex gap-7 px-5 py-3 sticky top-0'>
      <div className='text-xl'>
        <span className='font-bold'>Mini</span>
        <span className='font-light'>Link</span>
      </div>
      <ul className='flex justify-around items-center gap-4'>
        <li className='hover:underline cursor-pointer'>
          <Link href="/">Home</Link>
        </li>
        <li className='hover:underline cursor-pointer'>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
