import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer class="bg-black py-[40px] w-[100%] h-auto">
    <div class="w-[83%] ml-auto mr-auto text-white">
      <div class="main-footer flex lg:justify-center justify-start lg:gap-[140px] gap-[50px] flex-wrap">
          <div class="footer-logo flex flex-col items-center relative lg:top-[35px] top-0">
              <Link to='/' class=" text-[40px] font-bold font-jockey">Classyx</Link>
            
              <div class="flex items-center gap-[25px]  text-gray">
                  <i class="bi bi-instagram  text-[30px]"></i>
                  <i class="bi bi-facebook text-[30px]"></i>
                  <i class="bi bi-twitter text-[30px]"></i>
                  <i class="bi bi-pinterest text-[30px]"></i>
              </div>
          </div>
          <div class="about-company flex flex-col items-start gap-[15px]">
              <h3 class="font-poppins text-[25px] font-semibold">Company</h3>
              <div class="flex flex-col items-start gap-[30px] text-[18px] text-gray">
                  <a href="" class="  gap-[8px]">About Company</a>
                  <a href="" class="  gap-[8px]">Terms & Use</a>
                  <a href="" class="  gap-[8px]">Contact</a>
              </div>

          </div>
          <div class="get-in-touch flex flex-col items-start gap-[15px]">
              <h3 class="font-poppins text-[25px] font-semibold">Get in Touch</h3>
              <div class="flex flex-col items-start lg:gap-[15px] gap-[25px] w-[230px] text-[18px] text-gray">
                  <p class="flex text-[18px] font-inter gap-[8px]"><span class="material-symbols-outlined">
                      location_on
                      </span>8819 Ohio St. South Gate,
                      CA 90280</p>
                     <p class="flex items-center text-[18px] font-inter gap-[8px]"><span class="material-symbols-outlined">
                      mail
                      </span>Ourstudio@hello.com</p>
                     <p class="flex items-center text-[18px] font-inter gap-[8px]"><span class="material-symbols-outlined">
                      call
                      </span>+1 386-688-3295</p>
              </div>
              
          </div>
          <div class="flex flex-col items-start gap-[15px]">
              <h3 class="font-poppins text-[25px] font-semibold">Join a Newsletter</h3>
              <div class="flex flex-col items-start gap-[15px]">
                  <input type="text" placeholder="Please enter your gmail id" class="border-white bg-gray placeholder:text-white w-[260px] h-[50px] px-3 rounded-[5px]"/>
                  <button class="bg-none rounded-[5px] border border-white text-[15px] px-[30px] py-[8px]">Send</button>
              </div>

          </div>

      </div>
     
    </div>
    <section>
    <div className='w-full h-[1px] bg-[#D9D9D9] my-8'></div>
    <div class="w-[88%] mx-auto text-center">
        <p class="text-[20px] font-inter text-white">Copyright © Web developer Jashwa- All rights reserved | 2024</p>
    </div>
   </section>
 </footer>
  )
}

export default Footer