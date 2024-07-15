import React from 'react'
import testimonials from '../../src/assets/testiomonials-img.webp'

const Testimonials = () => {
  return (
    <section class="my-[50px]">
        <div class="w-[93%] ml-auto mr-auto">
            <div class="testimonials-heading flex flex-col justify-center items-center mb-10">
                <h2 class="font-bold text-[35px] text-center">Testimonials</h2>
                <p class="text-[18px]">What our Customer says about us</p>
            </div>
            <div class="main-templates flex justify-center items-center gap-[65px] flex-wrap">
                <div class="templates-card rounded-[15px] w-[420px] bg-main-color flex flex-col justify-center items-center gap-[25px] pb-[20px]">
                    <h2 class="font-extrabold text-[65px] mb-[-65px]  ">“</h2>
                    <p class="w-[340px] text-[21px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt</p>
                    <div class="flex flex-col gap-[5px ] items-center">
                        <img class="w-[100px]" src={testimonials} alt=""/>
                        <p class="text-[16px]">Jane Cooper</p>
                    </div>
                </div>
                <div class="templates-card rounded-[15px] w-[420px] bg-main-color flex flex-col justify-center items-center gap-[25px] pb-[20px]">
                    <h2 class="font-extrabold text-[65px] mb-[-65px] ">“</h2>
                    <p class="w-[340px] text-[21px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt</p>
                    <div class="flex flex-col gap-[5px ] items-center">
                        <img class="w-[100px]" src={testimonials} alt=""/>
                        <p class="text-[16px]">Jane Cooper</p>
                    </div>
                </div>
                <div class="templates-card rounded-[15px] w-[420px] bg-main-color flex flex-col justify-center items-center gap-[25px] pb-[20px]">
                    <h2 class="font-extrabold text-[65px] mb-[-65px] ">“</h2>
                    <p class="w-[340px] text-[21px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore sed do eiusmod tempor incididunt</p>
                    <div class="flex flex-col gap-[5px ] items-center">
                        <img class="w-[100px]" src={testimonials} alt=""/>
                        <p class="text-[16px]">Jane Cooper</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials