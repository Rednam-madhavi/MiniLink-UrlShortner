import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-purple-800 text-white flex justify-between px-5 py-3'>
      <div className='text-xl'>
        <span className='font-bold'>Mini</span>
        <span className='font-light'>Link</span>
      </div>
      <ul className='flex justify-around gap-4' >
        <Link href='/'><li className='hover:underline cursor-pointer'>Home</li></Link>
        <Link href='/about'><li className='hover:underline cursor-pointer'>About</li></Link>
        <Link href='/contact'><li className='hover:underline cursor-pointer'>Contact</li></Link>
      </ul>
    </div>
  )
}

export default Navbar
