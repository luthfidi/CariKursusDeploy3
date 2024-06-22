import React from 'react'
import Image from 'next/image';

const AuthPageHeader = () => {
  return (
    <header className='min-h-[10vh] min-w-full shadow-md flex justify-around items-center text-teal-500'>
        <Image src="/logo.png" alt="" className='w-10 h-10 self-center'/>
        <div className='flex items-center gap-2 w-13 h-7'>
            <Image src="/houseLogo.png" alt="" className='w-7'/>
            <a href='/AdminPage'>Home</a>
        </div>
        <div className='flex items-center gap-2 w-13 h-7'>
            <Image src="/taskLogo.png" alt=""  className='w-7'/>
            <a href='/AdminPage'>My Course</a>
        </div>
        <div className='flex items-center gap-2 w-13 h-7'>
            <Image src="/compassLogo.png" alt="" className='w-7'/>
            <a href='/AdminPage'>Explore</a>
        </div>
        <div className='flex items-center gap-2 w-13 h-7'>
            <Image src="/trophyLogo.png" alt="" className='w-7'/>
            <a href='/AdminPage'>Leaderboard</a>
        </div>
        <div className='flex w-30 h-[10vh]  gap-4 items-center' >
            <Image src="/bellLogo.png" alt="" className='w-7 h-7'/>
            <Image src="/profileLogo.png" alt="" className='w-10 h-10'/>
        </div>
    </header>
  )
}

export default AuthPageHeader