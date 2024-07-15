import React from 'react'

const Productinfo = () => {
  return (
    <div>
          <div className='w-full h-[1px] bg-[#D9D9D9] my-8'></div>
          <div className='flex flex-col items-center'>
            <div>
                  <h3 className='flex lg:flex-row md:flex-row flex-col items-center md:gap-24 gap-4 justify-center font-semibold text-[22px] py-6'><span>Description</span> <span className='text-[#9F9F9F]'>Additional Information</span> <span className='text-[#9F9F9F]'>Reviews [5]</span></h3>
            </div>
            <p className='text-[17px] w-[85%] text-[#9F9F9F]'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p className='text-[17px] w-[85%] text-[#9F9F9F]'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
          </div>
    </div>
  )
}

export default Productinfo