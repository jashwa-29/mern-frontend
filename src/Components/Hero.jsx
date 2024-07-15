import React from 'react'
import heroimg from '../assets/hero-image-with-shoes.webp'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section>   
    <div className="bg-main-color w-full lg:h-[710px] md:h-full h-auto flex lg:pt-[66px] pt-[40px] lg:pb-[105px] pb-[40px] font-poppins ">
        <div className="w-[93%] ml-auto mr-auto">
            <div className="main-hero flex lg:flex-row flex-col-reverse items-center justify-evenly lg:gap-0 gap-[25px]">
                <div className="hero-content flex flex-col items-start gap-[20px]" data-aos="zoom-in-right"  data-aos-duration="1400"
      data-aos-delay="1000" >
                    <h1 className="lg:text-[59px] md:text-[60px] text-[35px] font-bold">Elevate your style <br/>
                        with our sneakers</h1>
                  <Link to='/shop'> <button className="bg-none rounded-[5px] border border-black text-[19px] font-bold px-[30px] py-[13px] hover:bg-black hover:text-white ease-in-out transition" >Shop Now</button></Link> 
                </div>
                <div className="hero-img" data-aos="zoom-in-left"  data-aos-easing="ease-out-cubic" data-aos-duration="1400"
      data-aos-delay="200" >
                    {/* <img src={heroimg} alt="" class=" lg:w-[620px] w-full"> */}
                    <img src={heroimg} alt="" className='lg:w-[620px] w-full'/>
                </div>
            </div>
        </div>
    </div>
       
</section>
  )
}

export default Hero