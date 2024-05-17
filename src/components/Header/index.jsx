import React from 'react'

import logo from '../../assets/shared/logo.svg'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className=' absolute w-full flex justify-between py-8 pl-8 z-10 ' >
            <img className=' w-14 h-14 ' src={logo} alt="logo" />
            <div className=' border-b border-gray-500 my-4  '></div>
            <div className='h-[70px] w-[900px] bg-transparent backdrop-blur-xl flex items-center justify-center  ' >
                <ul className='flex gap-16 ' >
                    <li className=' text-white text-[16px] h-[70px] py-[22px] rounded-sm cursor-pointer hover:border-b-[3px]  hover:border-white focus:border-b focus:border-white font-barlow ' ><Link to='/' >00 Home</Link></li>
                    <li className=' text-white text-[16px] h-[70px] py-[22px] rounded-sm cursor-pointer hover:border-b-[3px]  hover:border-white focus:border-b focus:border-white font-barlow ' ><Link to='/destination' >01 Destination</Link></li>
                    <li className=' text-white text-[16px] h-[70px] py-[22px] rounded-sm cursor-pointer hover:border-b-[3px]  hover:border-white focus:border-b focus:border-white font-barlow ' ><Link to='/crew' >02 Crew</Link></li>
                    <li className=' text-white text-[16px] h-[70px] py-[22px] rounded-sm cursor-pointer hover:border-b-[3px]  hover:border-white focus:border-b focus:border-white font-barlow ' ><Link to='/technology' >03 Technology</Link></li>
                </ul>
            </div>
        </header>
    )
}
