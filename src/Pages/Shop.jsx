import React, { useState } from 'react'
import { Subhead } from '../Components/Subhead'
import Product from '../Pages/Product'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Allpageinfo from '../Components/Allpageinfo'
const Shop = ({spro , setSpro , phead ,setPhead }) => {

  const pagesender = (spd)=>{
         setSpro([spd])
         setPhead(spd.name)
        //  setHsf(1)
  }

  return (
    <>
     <Subhead pname='Shop'/>
    <section class="my-[50px] w-[93%] ml-auto mr-auto ">
    <div className=" flex flex-wrap lg:justify-between justify-center gap-0 md:gap-7 gap-y-7">
      {/* <div className=''> */}
          
           {
            Product.map((product)=>


              <Link to='/propage' onClick={()=>pagesender(product)}>
          <div className="shop-card flex flex-col items-center w-[330px] p-5 text-center h-auto bg-main-color rounded-[10px] pb-[25px] hover:shadow-sm hover:scale-105 ease-in-out transition">
          
                        <img src={product.image} alt="" class="w-[240px]"/>
                        <div className="card-content flex flex-col items-center gap-[4px]">
                            <h5 className="font-poppins font-extrabold text-[19px]">{product.name}</h5>
                            <p className="font-inter font-medium text-[17px]">{product.description}</p>
                            <h5 className="font-poppins font-medium text-[19px]">Rs. {product.price}</h5>
                        </div>
                       
                       
                    </div>
                    </Link>
                    




    
            )
           }
                 {/* </div> */}
          </div>
          </section>
          <Allpageinfo/>
          <Footer/>
          </>
 
  )
}

export default Shop