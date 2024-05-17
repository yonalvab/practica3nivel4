import React from 'react'
import mars from '../../assets/destination/image-mars.png'
import { Link } from 'react-router-dom'

export const Destination = () => {
    return (
        <>
            <div className=' absolute inset-0 bg-destination w-screen h-screen ' >
                <div className=' flex justify-center pt-[150px] gap-[100px] ' >
                    <div className=' w-[400px] h-[400px] ' >
                        <h3 className=' text-white text-[26px] font-barlow font-[400] flex mb-[50px] ' ><h3 className=' text-gray-500 text-[26px] font-barlow font-[400] mr-4 ' >01</h3>PICK YOUR DESTINATION</h3>
                        <img className=' w-[500px] h-[400px] ml-[50px] ' src={mars} alt="mars" />

                    </div>
                    <div className=' w-[600px] h-[200px] pl-[150px] pt-[85px]' >
                        <div className='h-[50px] w-[320px] flex py-2 px-2 ' >
                            <ul className='flex gap-12 ' >
                                <li className=' text-white text-[16px] h-[40px]  rounded-sm cursor-pointer hover:border-b-[3px]  hover:border-white focus:border-b focus:border-white font-barlow ' ><Link>MOON</Link></li>
                                <li className=' text-white text-[16px] h-[40px] rounded-sm cursor-pointer hover:border-b-[3px]  hover:border-white focus:border-b focus:border-white font-barlow ' ><Link>MARS</Link></li>
                                <li className=' text-white text-[16px] h-[40px] rounded-sm cursor-pointer hover:border-b-[3px]  hover:border-white focus:border-b focus:border-white font-barlow ' ><Link>EUROPA</Link></li>
                                <li className=' text-white text-[16px] h-[40px] rounded-sm cursor-pointer hover:border-b-[3px]  hover:border-white focus:border-b focus:border-white font-barlow ' ><Link>TITAN</Link></li>
                            </ul>
                        </div>
                        <h1 className=' text-white text-[100px] font-barlow font-[300] h-[150px]' >MARS</h1>
                        <p className=' text-white text-[20px] font-barlow font-[100] line-clamp-4 mb-10 ' >Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,
                            the tallest planetary mountain in our solar system. It’s two and a half times
                            the size of Everest!</p>
                        <div className=' flex gap-[80px] py-[30px] border-t border-gray-500 ' >
                            <div>
                                <h3 className=' text-white font-barlow text-[12px] ' >AVG. DISTANCE</h3>
                                <h1 className=' text-white font-barlow text-[30px] ' >225 MIL. KM</h1>
                            </div>
                            <div>
                                <h3 className=' text-white font-barlow text-[12px] ' >EST. TRAVEL TIME</h3>
                                <h1 className=' text-white font-barlow text-[30px] ' >9 MONTHS</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
