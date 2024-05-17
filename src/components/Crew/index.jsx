import React from 'react'
import mujer from '../../assets/crew/image-anousheh-ansari.png'

export const Crew = () => {
    return (
        <>
            <div className=' absolute inset-0 bg-planet-top w-screen h-screen ' >
                <div className='relative flex justify-between  px-[140px]  ' >
                    <div className=' absolute flex py-[40px] ' >
                        <ul className=' flex gap-8 mt-[610px] ' >
                            <li className=' bg-slate-700 rounded-full h-3 w-3 hover:bg-slate-300 cursor-pointer ' ></li>
                            <li className=' bg-slate-700 rounded-full h-3 w-3 hover:bg-slate-300 cursor-pointer ' ></li>
                            <li className=' bg-slate-700 rounded-full h-3 w-3 hover:bg-slate-300 cursor-pointer ' ></li>
                            <li className=' bg-slate-700 rounded-full h-3 w-3 hover:bg-slate-300 cursor-pointer ' ></li>
                        </ul>
                    </div>
                    <div className=' w-[500px] h-[400px] pt-[140px] ' >
                        <h3 className=' text-white text-[26px] font-barlow font-[400] flex mb-[50px] ' ><h3 className=' text-gray-500 text-[26px] font-barlow font-[400] mr-4 ' >02</h3>MEET YOUR CREW</h3>
                        <div className=' mt-[120px] ' >
                            <h2 className=' text-gray-500 text-[33px] font-barlow font-[400] h-[60px]  ' >FLIGHT ENGINEER</h2>
                            <h1 className=' text-white text-[57px] font-barlow font-[400] h-[80px]' >ANOUSHEH ANSARI</h1>
                            <p className=' text-white text-[20px] font-barlow font-[100] line-clamp-5 mt-7 w-[400px] ' >Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
                                Ansari was the fourth self-funded space tourist, the first self-funded woman to
                                fly to the ISS, and the first Iranian in space. </p>
                        </div>

                    </div>
                    <div className=' w-[520px] flex justify-center mt-[187px]  ' >
                        <img src={mujer} alt="mujer" />
                    </div>
                </div>
            </div>
        </>
    )
}