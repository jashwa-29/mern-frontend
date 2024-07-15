import React from 'react'
import blog from '../../src/assets/blog-1-one-img (1).webp'

const Blog = () => {
  return (
    <section class="my-[50px]">
        <div class="w-[93%] ml-auto mr-auto">
            <div class="testimonials-heading flex flex-col justify-center items-center mb-10">
                <h2 class="font-bold text-[35px] text-center">Blog</h2>
                <p class="text-[14px] text-gray-300">Find a bright ideal to suit your taste with our great selection</p>
            </div>
            <div class="main-blogs flex justify-center items-center flex-wrap lg:gap-24 gap-10">
                <div class="blog-card flex flex-col items-center gap-[8px]">
                    <img src={blog} alt="" className="w-[350px]"/>
                    <p class="text-[19px]">Going all-in with millennial design</p>
                    <a href="" class="font-semibold text-[20px] underline">Read More</a>
                    <p class="text-[15px] flex items-center gap-[5px] mt-[2px]"><span class="material-symbols-outlined text-[9px]">
                      schedule
                      </span>5 min <span class="material-symbols-outlined text-[9px]">
                      calendar_today
                      </span>12th Oct 2022</p>
                </div>
                <div class="blog-card flex flex-col items-center gap-[8px]">
                    <img src={blog} alt="" class="w-[350px]"/>
                    <p class="text-[19px]">Going all-in with millennial design</p>
                    <a href="" class="font-semibold text-[20px] underline">Read More</a>
                    <p class="text-[15px] flex items-center gap-[5px] mt-[2px]"><span class="material-symbols-outlined text-[9px]">
                      schedule
                      </span>5 min <span class="material-symbols-outlined text-[9px]">
                      calendar_today
                      </span>12th Oct 2022</p>
                </div>
                <div class="blog-card flex flex-col items-center gap-[8px]">
                    <img src={blog} alt="" class="w-[350px]"/>
                    <p class="text-[19px]">Going all-in with millennial design</p>
                    <a href="" class="font-semibold text-[20px] underline">Read More</a>
                    <p class="text-[15px] flex items-center gap-[5px] mt-[2px]"><span class="material-symbols-outlined text-[9px]">
                      schedule
                      </span>5 min <span class="material-symbols-outlined text-[9px]">
                      calendar_today
                      </span>12th Oct 2022</p>
                </div>
            </div>
            <div class="flex justify-center mt-10">
                <a href="" class="font-poppins text-black font-bold text-[18px] underline">View More</a>
              </div>
            </div>
    </section>
  )
}

export default Blog