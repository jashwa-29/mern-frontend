import React, { useState } from 'react'
import rating from '../assets/rating start.png'
import Productinfo from '../Components/Productinfo'
import Prosubhead from '../Components/Prosubhead'
import Footer from '../Components/Footer'
import Allpageinfo from '../Components/Allpageinfo'

const Singlepro = ({spro , setSpro , cart , setCart, phead ,setPhead}) => {


  const validCart = Array.isArray(cart) ? cart : [];

  const cartsender = (cpro) => {
    // Check if the product is already in the cart
    if (!validCart.some(item => item.id === cpro.id)) {
      setCart([...validCart, cpro]);
    } else{
      null
    }
  };
  

  return (
    <>
    <Prosubhead phead={phead} setPhead={setPhead}/>
    <div className='font-poppins w-[88%] ml-auto mr-auto my-10'>
      {
        spro.map((singlep)=>
        
        <div className='main-div flex lg:flex-row flex-col justify-center lg:items-start items-center gap-16'>
         <div className='flex lg:flex-row flex-col  gap-10 items-center'>
          <div className='flex lg:flex-col flex-row gap-8'>
            <div className='lg:w-[100px] md:w-[100px] w-[70px] p-3 rounded-sm bg-main-color'>
            <img src={singlep.image} alt="" className='w-full' />
            </div>
            <div className='lg:w-[100px] md:w-[100px] w-[70px] p-3 rounded-sm bg-main-color'>
            <img src={singlep.image} alt="" className='w-full' />
            </div>
            <div className='lg:w-[100px] md:w-[100px] w-[70px] p-3 rounded-sm bg-main-color'>
            <img src={singlep.image} alt="" className='w-full' />
            </div>
            <div className='lg:w-[100px] md:w-[100px] w-[70px] p-3 rounded-sm bg-main-color'>
            <img src={singlep.image} alt="" className='w-full' />
            </div>


          </div>
          <div className='lg:w-[430px] w-full rounded-md'>
            <img src={singlep.image2} alt="" className='w-full' />
          </div>
         </div>
         <div>
          <div className='flex flex-col items-start gap-2'>
            <h2 className='font-semibold text-[32px]'>{singlep.name}</h2>
            <h3 className='font-medium text-[25px] text-[#9F9F9F]'>RS. {singlep.price}</h3>
            <p className='text-[13px] lg:w-[500px] md:w-[500px] w-full'>{singlep.details}</p>
            <div className='flex items-center gap-3 py-2'><img src={rating} alt="" /><div className='bg-[#9F9F9F] w-[1px] h-[35px]'></div><p className='text-[#9F9F9F]'>5 Customer Review</p></div>
            <div className='flex flex-col items-start gap-3 pb-10'>
              <h4 className='text-gray font-medium text-[16px]'>Size</h4>
              <div className='flex items-center gap-3'>
                <div className='w-[35px] h-auto py-2 rounded-[6px] bg-main-color flex items-center justify-center hover:scale-90 cursor-pointer'>6</div>
                <div className='w-[35px] h-auto py-2 rounded-[6px] bg-main-color flex items-center justify-center hover:scale-90 cursor-pointer'>7</div>
                <div className='w-[35px] h-auto py-2 rounded-[6px] bg-main-color flex items-center justify-center hover:scale-90 cursor-pointer'>8</div>
                <div className='w-[35px] h-auto py-2 rounded-[6px] bg-main-color flex items-center justify-center hover:scale-90 cursor-pointer'>9</div>
                <div className='w-[35px] h-auto py-2 rounded-[6px] bg-main-color flex items-center justify-center hover:scale-90 cursor-pointer'>10</div>
              </div>
            </div>
          <button className='border-[1px] border-black text-black text-[18px] px-[36px] py-[13px] rounded-[5px] hover:bg-black hover:text-white transition ease-in-out' onClick={()=>cartsender(singlep)}>Add To Cart</button>
          </div>
          <div className='w-full h-[1px] bg-[#D9D9D9] my-8'></div>
          <div className='flex items-start flex-col gap-4'>
            <p> <span className='pr-4'>Category</span>  : <span className='pl-4'>Sneakers</span>  </p>
            <p> <span className='pr-4'>Tags</span>  : <span className='pl-4'>Sneakers, casual, white</span>  </p>
            <p className='flex items-center'> <span className='pr-4'>Share</span>  : <span className='pl-4 flex items-center gap-4'>            <i class="bi bi-instagram  text-[20px]"></i>
            <i class="bi bi-facebook text-[20px]"></i> <i class="bi bi-linkedin text-[20px]"></i></span>  </p>
          </div>
         </div>
        </div>
        )
      }
      <Productinfo/>
    </div>
    <Allpageinfo/>
    <Footer/>
    </>
  )
}

export default Singlepro