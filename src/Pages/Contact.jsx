import React, { useState } from 'react'
import Footer from '../Components/Footer'
import { Subhead } from '../Components/Subhead'
import Allpageinfo from '../Components/Allpageinfo'

const Contact = () => {
    const [cname , setCname] = useState('')
    const [cemail , setCemail] = useState('')
    const [cnumber , setCnumber] = useState('')
    const [cmessage , setCmessage] = useState('')
    const [errr , setErrr] = useState ()
    const contactsumit = () =>{
        if(cname === ''){
        //   alert('Please Enter Your Name')
          setErrr(1)
        }
        else if(cemail === ''){
            // alert('Please Enter Your Emnail-ID')
            setErrr(2)
        }
        else if(cnumber === ''){
            // alert('Please Enter Your Contact Number')
            setErrr(3)
        }
        else if(cmessage === ''){
            // alert('Please Enter Your Message')
            setErrr(4)
        }
        else{
            alert('Your message sent Succecfully')
            setCname('')
            setCemail('')
            setCnumber('')
            setCmessage('')
            setErrr(0)

        }
    }



  return (
    <>
    <Subhead pname='Contact'/>
    <section class="w-[88%] ml-auto mr-auto my-[50px]">
        <div class="">
            <div class="contact-heading flex flex-col items-center justify-center mb-[50px]">
                <h2 class="font-bold font-poppins text-[35px] text-center">Get In Touch With Us</h2>
                <p class="font-poppins text-[14px] md:flex lg:flex hidden text-gray w-[550px] text-center">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div class="main-contact flex lg:flex-row flex-col-reverse lg:items-start items-center justify-center lg:gap-[100px] gap-[50px]">
                <div class="contact-text flex flex-col items-start gap-[28px]">
                    <div class=" flex items-start gap-[30px]">
                        <div>
                            <i class="bi bi-geo-alt-fill"></i>
                        </div>
                        <div>
                            <h5 class="font-poppins text-[18px] font-semibold">Address</h5>
                            <p class="font-inter w-[217px]">236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                    </div>

                    <div  class=" flex items-start gap-[30px]">
                        <div>
                            <i class="bi bi-telephone-fill"></i>
                        </div>
                        <div>
                            <h5  class="font-poppins text-[18px] font-semibold">Phone</h5>
                            <p>Mobile: +(84) 546-6789</p>
                            <p>Hotline: +(84) 456-6789</p>
                        </div>
                    </div>


                     <div class=" flex items-start gap-[30px]">
                        <div>
                            <i class="bi bi-clock-fill"></i>
                        </div>
                        <div>
                            <h5  class="font-poppins text-[18px] font-semibold">Working Time</h5>
                            <p>Monday-Friday: 9:00 - 22:00</p>
                            <p>Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                </div>
                <div className="contact-inputs">
                    <div className="flex flex-col items-start gap-[30px]">
                        <div className="flex flex-col items-start gap-[15px]">
                            <label for="" className="font-poppins font-semibold text-[13px]">Your Name</label>
                            <input type="text" placeholder="Name" className={errr === 1 ? "border-[1px]  border-red-700 rounded-[8px] py-[12px] pl-[8px] w-[360px]  placeholder:text-red-700" : "border-[1px] border-gray rounded-[8px] py-[12px] pl-[8px] w-[360px]"} value={cname} onChange={(e)=>setCname(e.target.value)}/>
                        </div>
                        <div className="flex flex-col items-start gap-[15px]">
                            <label for="" className="font-poppins font-semibold text-[13px]">Email address</label>
                            <input type="text" placeholder="Email address" className={errr === 2 ? ("border-[1px]  border-red-700 rounded-[8px] py-[12px] pl-[8px] w-[360px] placeholder:text-red-700"):("border-[1px] border-gray rounded-[8px] py-[12px] pl-[8px] w-[360px]")} value={cemail}  onChange={(e)=>setCemail(e.target.value)}/>
                        </div>
                        <div className="flex flex-col items-start gap-[15px]">
                            <label for="" className="font-poppins font-semibold text-[13px]">Contact Number</label>
                            <input type="number" placeholder="Contact Number" className={errr === 3 ? ("border-[1px] border-red-700 rounded-[8px] py-[12px] pl-[8px] w-[360px] placeholder:text-red-700"):("border-[1px] border-gray rounded-[8px] py-[12px] pl-[8px] w-[360px]")} value={cnumber}  onChange={(e)=>setCnumber(e.target.value)}/>
                        </div>
                        <div className="flex flex-col items-start gap-[15px]">
                            <label for="" className="font-poppins font-semibold text-[13px]">Message</label>
                            <textarea name="" id="" cols="47" rows="3" className={errr === 4 ? ("border-[1px]  border-red-700 rounded-[8px] py-[12px] pl-[8px] w-[360px] placeholder:text-red-700"):("border-[1px] border-gray rounded-[8px] py-[12px] pl-[8px] w-[360px]")} placeholder="Message" value={cmessage}  onChange={(e)=>setCmessage(e.target.value)}></textarea>
                            <button class="bg-none rounded-[5px] border border-black text-[12px] font-medium px-[38px] py-[11px] hover:bg-black hover:text-white" onClick={()=>contactsumit()}>Submit</button>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Allpageinfo/>
    <Footer/>
    </>
  )
}

export default Contact