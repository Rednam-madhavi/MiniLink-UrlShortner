import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-800 text-white p-3 flex justify-center gap-5 fixed bottom-0 w-full'>
            <div className='text-xl'>
                <span className='font-bold'>Mini</span>
                <span className='font-light'>Link</span>
            </div>
            <div className='pt-1'>
                Created By &copy; <a href='https://www.linkedin.com/in/rednam-naga-madhavi-242825318/' target='_blank'>Rednam Madhavi</a>
            </div>
        </div>
    )
}

export default Footer
