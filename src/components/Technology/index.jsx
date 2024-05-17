import React from 'react'
import cohete from '../../assets/technology/image-launch-vehicle-portrait.jpg'

export const Technology = () => {
    return (
        <>
            <div className=' absolute inset-0 bg-speed-light w-screen h-screen ' >
                <div className=' flex justify-between  pl-[140px]  ' >
                    <div className=' w-[500px] h-[400px] pt-[140px] ' >
                        <h3 className=' text-white text-[26px] font-barlow font-[400] flex mb-[50px] ' ><h3 className=' text-gray-500 text-[26px] font-barlow font-[400] mr-4 ' >03</h3>SPACE LAUNCH 101</h3>
                        <div className=' flex gap-14 mt-[120px] ' >
                            <div>
                                <ul className=' flex flex-col gap-8 ' >
                                    <li className=' bg-transparent border-2 font-barlow text-white text-[40px] text-center py-3 rounded-full h-24 w-24 hover:bg-slate-100 hover:text-black cursor-pointer ' >1</li>
                                    <li className=' bg-transparent border-2 font-barlow text-white text-[40px] text-center py-3 rounded-full h-24 w-24 hover:bg-slate-100 hover:text-black cursor-pointer ' >2</li>
                                    <li className=' bg-transparent border-2 font-barlow text-white text-[40px] text-center py-3 rounded-full h-24 w-24 hover:bg-slate-100 hover:text-black cursor-pointer ' >3</li>
                                </ul>
                            </div>
                            <div className=' flex flex-col gap-10 h-[400px]  ' >
                                <h2 className=' text-gray-500 text-[23px] font-barlow font-[300] h-[5px]  ' >THE TERMINOLOGY...</h2>
                                <h1 className=' text-white text-[57px] font-barlow font-[400] h-[80px] w-[500px] ' >LAUNCH VEHICLE</h1>
                                <p className=' text-white text-[18px] font-barlow font-[100] line-clamp-7 mt-1 w-[400px] ' >A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
                                    payload from Earth's surface to space, usually to Earth orbit or beyond. Our
                                    WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
                                    it's quite an awe-inspiring sight on the launch pad! </p>
                            </div>
                        </div>
                    </div>
                    <div className='  w-[700px] flex justify-end mt-[187px]  ' >
                        <img className='w-[470px]' src={cohete} alt="cohete" />
                    </div>
                </div>
            </div >
        </>
    )
}
