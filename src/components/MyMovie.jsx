import React from 'react'
import FooterIconComp from './FooterIconComp'
import addIcon from "../assets/svg/add.svg"
import logoutIcon from "../assets/svg/logout.svg"

const MyMovie = () => {
  return (
    <div className='bg-[#093545] w-full h-auto flex flex-col gap-24 justify-between'>

   <div className='w-[85%] mx-auto flex flex-col  sm:mt-[120px] mt-[80px]'>

    {/* Upper section  */}
    <div className='flex justify-between'>
        <div className='flex items-center sm:gap-4 gap-3'>
        <div className='text-[32px] sm:text-[48px] font-semibold text-white text-start '>
            My movies
        </div>
        <img src={addIcon} alt="" className='sm:w-[32px] w-[20px] h-[20px] sm:h-[32px] mt-[8px]'/>

        </div>

        <div className='flex items-center gap-3'>
            <div className='text-[16px] font-bold text-white sm:block hidden'>Logout</div>
            <img src={logoutIcon} alt="" className='w-[18px] h-[18px] sm:w-[32px] sm:h-[32px]'/>
        </div>
    </div>

    {/* Movie Table Card */}
    <div className='w-[180px] sm:w-[282px] sm:mt-[120px] mt-[80px] sm:h-[510px] h-[334px] bg-[#092C39] rounded-xl'>
        <img src={logoutIcon} alt="" className='w-[180px] h-[246px] sm:w-[266px] sm:h-[400px] border-2 mx-auto mt-2 rounded-xl' />
        <div className='pl-3 flex flex-col gap-3 my-4 text-white'>
        <div className='sm:text-[20px] text-[16px]'>Movie 1</div>
        <div className='font-normal text-sm'>2021</div>
        </div>
    </div>

        </div>

        <FooterIconComp/>
</div>
  )
}

export default MyMovie