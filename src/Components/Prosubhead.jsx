import React from 'react'

const Prosubhead = ({phead ,setPhead , hsf , setHsf}) => {
  return (
    <div className='bg-[#CDC1B1] w-full h-auto py-4'>
             <h2 className='flex items-center gap-2 text-[18px] font-semibold md:pl-18 pl-0 w-[88%] mx-auto'><span className='text-[#9F9F9F]'>Home</span>  <span><i class="bi bi-chevron-right"></i></span> <span className='text-[#9F9F9F]'>Shop</span> <span><i class="bi bi-chevron-right"></i></span> <div className='w-[1px] h-8 bg-black'></div > {phead}</h2>
    </div>
  )
}

export default Prosubhead