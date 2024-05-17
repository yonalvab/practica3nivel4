import React from 'react'

export const Home = () => {
    return (
        <>
            <div className=' absolute inset-0 bg-planet-terra w-screen h-screen ' >
                <div className=' flex justify-between pt-[260px] px-[140px]  ' >
                    <div className=' w-[400px] h-[400px] ' >
                        <h3 className=' text-white text-[22px] font-barlow ' >SO, YOU WANT TO TRAVEL TO</h3>
                        <h1 className=' text-white text-[130px] font-barlow ' >SPACE</h1>
                        <p className=' text-white text-[20px] font-barlow font-[100] ' >Let’s face it; if you want to go to space, you might as well genuinely go to
                            outer space and not hover kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world experience!</p>
                    </div>
                    <div className=' bg-white h-[220px] w-[220px] rounded-full flex justify-center items-center mt-[130px] mr-[100px] ' >
                        <h1 className=' text-[25px] font-barlow ' >EXPLORE</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
