import React, { useEffect, useState } from 'react'
import { Subhead } from '../Components/Subhead'
import Footer from '../Components/Footer'
import Allpageinfo from '../Components/Allpageinfo'


const Cart = ({cart , setCart , user , setUser}) => {
  const [price , setPrice] = useState()

  useEffect(() => {
      let total = 0
        cart.map((item)=> total = (item.quantity * item.price)+total)
        setPrice(total)
      

  } , [cart] )

  const quanfunc = (dd , num)=>{
       const numbervalue = cart.indexOf(dd)
       if (cart[numbervalue].quantity+num <=0) {
    
       }
       else{
        cart[numbervalue].quantity = cart[numbervalue].quantity+num
        setCart([...cart])
       }

  }


  
  
  const removebtn = (rem)=>{
    const removingdd = cart.filter((re)=> re.id !== rem.id)
    setCart(removingdd)
  }

  const checkoutbtn = ()=>{
    if (user <= 0) {
      alert("please Register or Login for to checkout process")
    } else {
      alert("working well")
    }
  }

  return (
    <>
    <Subhead pname='Cart'/>
    {cart.length === 0 ? (<div className=' font-poppins md:w-[400px] w-full h-[300px]  flex items-center justify-center rounded-[8px] font-bold text-[26px] mx-auto my-7'><h1> Your Cart is Empty</h1></div>):(    <section className="my-[70px]">
      <div className="w-[93%] mx-auto font-inter">
        <div className="main-cart flex flex-col lg:flex-row lg:items-start items-center justify-center gap-[100px]">
          <table className='w-full md:w-[600px] '>
            <thead className=' '>
              <tr className="bg-main-color">
                <th className="py-[10px] md:px-[45px] px-2">Product</th>
                <th className="py-[10px] md:px-[45px] px-2">Price</th>
                <th className="py-[10px] md:px-[45px] px-2">Quantity</th>
                {/* <th className="py-[10px] px-[45px]">Subtotal</th> */}
                <th className="md:px-[45px] px-2 md:hidden flex"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((ci) => (
                <tr key={ci.id}>
                  <td className="flex md:flex-row flex-col gap-[25px] items-center py-[50px]">
                    <img src={ci.image2} alt="" className="w-[100px] h-[100px] rounded-[7px]" />
                    <p>{ci.name}</p>
                  </td>
                  <td className="text-center">
                    <p>Rs. {ci.price}</p>
                  </td>
                  <td className="text-center">
                    <div className='flex md:flex-row flex-col items-center gap-3 justify-center'>
                    <button className="px-[10px] border-[1px] border-black py-[6px] rounded-[5px]" onClick={()=>quanfunc(ci , -1)}>-</button>
                    <p>{ci.quantity}</p>
                    <button className="px-[10px] border-[1px] border-black py-[6px] rounded-[5px]" onClick={()=>quanfunc(ci , +1)}>+</button>
                    </div>

                  </td>
                  {/* <td className="text-center">
                    <p>Rs. {ci.price}</p>
                  </td> */}
                  <td>
                    <i className="bi bi-trash3-fill text-yellow cursor-pointer" onClick={()=>removebtn(ci)}></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <div className='md:hidden blox'>
          {cart.map((ci) => (
                <div key={ci.id}>
                  <div className=" py-[50px]">
                    <h2>Product</h2>
                    <div>
                    <img src={ci.image2} alt="" className="w-[100px] h-[100px] rounded-[7px]" />
                    <p>{ci.name}</p>
                    </div>
                  
                  </div>
                  <div className="text-center">
                    <p>Rs. {ci.price}</p>
                  </div>
                  <div className="text-center">
                    <div className='flex items-center gap-3 justify-center'>
                    <button className="px-[10px] border-[1px] border-black py-[6px] rounded-[5px]" onClick={()=>quanfunc(ci , -1)}>-</button>
                    <p>{ci.quantity}</p>
                    <button className="px-[10px] border-[1px] border-black py-[6px] rounded-[5px]" onClick={()=>quanfunc(ci , +1)}>+</button>
                    </div>

                  </div>
                
                  <div>
                    <i className="bi bi-trash3-fill text-yellow cursor-pointer" onClick={()=>removebtn(ci)}></i>
                  </div>
                </div>
              ))}
          </div> */}
 
          <div className="cart-details bg-main-color flex flex-col items-center justify-center gap-[25px] w-[300px] h-auto p-[40px]">
            <h4 className="font-bold text-[24px]">Cart Totals</h4>
            <div className="flex justify-center items-center gap-[45px]">
              <h5 className="font-semibold text-[18px]">Subtotal</h5>
              <p className="text-[15px]">Rs. {price} </p>
            </div>
            <div className="flex justify-center items-center gap-[75px]">
              <h5 className="font-semibold text-[18px]">Total</h5>
              <p className="text-[17px]">Rs.{price} </p>
            </div>
            <button className="px-[35px] py-[8px] border-[1px] rounded-[5px] text-[18px] hover:bg-black hover:text-white" onClick={()=>checkoutbtn()}>Check Out</button>
          </div>
        </div>
      </div>
    </section>)}
    {/* <section className="my-[70px]">
      <div className="w-[93%] mx-auto font-inter">
        <div className="main-cart flex flex-col lg:flex-row items-start justify-center gap-[100px]">
          <table>
            <thead>
              <tr className="bg-main-color">
                <th className="py-[10px] px-[45px]">Product</th>
                <th className="py-[10px] px-[45px]">Price</th>
                <th className="py-[10px] px-[45px]">Quantity</th>
                <th className="py-[10px] px-[45px]">Subtotal</th>
                <th className="py-[10px] px-[25px]"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((ci) => (
                <tr key={ci.id}>
                  <td className="flex gap-[25px] items-center py-[50px]">
                    <img src={ci.image2} alt="" className="w-[100px] h-[100px] rounded-[7px]" />
                    <p>{ci.name}</p>
                  </td>
                  <td className="text-center">
                    <p>Rs. {ci.price}</p>
                  </td>
                  <td className="text-center">
                    <div className='flex items-center gap-3 justify-center'>
                    <button className="px-[10px] border-[1px] border-black py-[6px] rounded-[5px]" onClick={()=>quanfunc(ci , -1)}>-</button>
                    <p>{ci.quantity}</p>
                    <button className="px-[10px] border-[1px] border-black py-[6px] rounded-[5px]" onClick={()=>quanfunc(ci , +1)}>+</button>
                    </div>

                  </td>
                  <td className="text-center">
                    <p>Rs. {ci.price}</p>
                  </td>
                  <td>
                    <i className="bi bi-trash3-fill text-yellow cursor-pointer" onClick={()=>removebtn(ci)}></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-details bg-main-color flex flex-col items-center justify-center gap-[25px] w-[300px] h-auto p-[40px]">
            <h4 className="font-bold text-[24px]">Cart Totals</h4>
            <div className="flex justify-center items-center gap-[45px]">
              <h5 className="font-semibold text-[18px]">Subtotal</h5>
              <p className="text-[15px]">Rs. {price} </p>
            </div>
            <div className="flex justify-center items-center gap-[75px]">
              <h5 className="font-semibold text-[18px]">Total</h5>
              <p className="text-[17px]">Rs.{price} </p>
            </div>
            <button className="px-[35px] py-[8px] border-[1px] rounded-[5px] text-[18px] hover:bg-black hover:text-white">Check Out</button>
          </div>
        </div>
      </div>
    </section> */}
    <Allpageinfo/>
    <Footer/>
    </>
  )
}

export default Cart