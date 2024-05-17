import React from 'react'

import mujer from '../../assets/crew/image-anousheh-ansari.png'

export const UnoC = () => {
    return (
        <>
            <div className=' w-[500px] h-[400px] pt-[140px] ' >
                <h3 className=' text-white text-[26px] font-barlow font-[400] flex mb-[50px] ' ><h3 className=' text-gray-500 text-[26px] font-barlow font-[400] mr-4 ' >02</h3>MEET YOUR CREW</h3>
                <div className=' mt-[120px] ' >
                    <h2 className=' text-gray-500 text-[33px] font-barlow font-[400] h-[60px]  ' >Pilot</h2>
                    <h1 className=' text-white text-[57px] font-barlow font-[400] h-[80px]' >Victor Glover</h1>
                    <p className=' text-white text-[20px] font-barlow font-[100] line-clamp-5 mt-7 w-[400px] ' >Pilot on the first operational flight of the SpaceX Crew Dragon to the
                        International Space Station. Glover is a commander in the U.S. Navy where
                        he pilots an F/A-18.He was a crew member of Expedition 64, and served as a
                        station systems flight engineer.  </p>
                </div>

            </div>
            <div className=' w-[520px] flex justify-center mt-[187px]  ' >
                <img src={mujer} alt="mujer" />
            </div>
        </>
    )
}

