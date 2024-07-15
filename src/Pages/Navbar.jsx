import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({cart , setCart}) => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    const [click , setClick] = useState(false)
    const navund = (num)=>{
      setClick(num)
    }

    const navclick = ()=>{
        setClick(!click)
    }





  return (
    <header className="w-full pt-[10px] pb-[10px] bg-main-color sticky top-0 z-50">
    <div className="">
         <div className=" w-[88%] ml-auto mr-auto main-header flex  lg:flex-row flex-col items-center justify-between">
             <div className="header-logo flex items-center gap-[210px] md:gap-[580px]">
                 <Link to='/' className=" text-[35px] font-bold font-jockey ">Classyx</Link>
                 <div className=" flex lg:hidden" id="ham">
                    {
                          click === false ? (   <span className="material-symbols-outlined text-[40px] " onClick={()=>navclick()}>
                            menu
                            </span>) : (  <span className="material-symbols-outlined text-[40px] "  onClick={()=>navclick()}>
                         menu
                         </span>)
                    }
                  
                       
                 </div>

                 
             </div>
            
             <div className="nav lg:flex lg:flex-row flex-col hidden items-center gap-[50px]" >
                 <div className="nav-text">
                     <ul className="flex lg:flex-row flex-col items-center gap-[42px]">
                         <Link to='/'><li className= {click=== 1 ? (" text-black font-semibold text-[20px] font-inter underline hover:underline"):(" text-black font-semibold text-[20px] font-inter hover:underline")} onClick={()=>navund(1)}>Home</li></Link>
                         <Link to='/shop'><li className= {click=== 2 ? (" text-black font-semibold text-[20px] font-inter underline hover:underline"):(" text-black font-semibold text-[20px] font-inter hover:underline")}onClick={()=>navund(2)}>Shop</li></Link>
                         <Link to='/contact'><li className= {click=== 3 ? (" text-black font-semibold text-[20px] font-inter underline hover:underline"):(" text-black font-semibold text-[20px] font-inter hover:underline")} onClick={()=>navund(3)}>Contact</li></Link>
                     </ul>
                 </div>
                 <div className="nav-icons">
                     <ul className="flex lg:flex-row flex-col items-center gap-[40px]">
                         <a href="#"><li className=" text-black font-semibold text-[18px]"><i className="bi bi-heart  text-black font-bold text-[18px]  active:underline"></i></li></a>
                         <a href="#"><li className=" text-black font-semibold text-[18px]"><i className="bi bi-search  text-black font-semibold text-[18px] active:underline"></i></li></a>
                         <Link to='/cart'><li className=" text-black font-semibold text-[18px]"  onClick={()=>navund(4)}><i className="bi bi-bag  text-black font-semibold text-[18px] active:underline"></i>{cart.length>=1 ?(<span>{cart.length}</span>):null}</li></Link>
                         <Link to='/account'><li className=" text-black font-semibold text-[18px] hover:underline"  onClick={()=>navund(5)}><i className="bi bi-person-fill  text-black font-semibold text-[18px] active:underline"></i></li></Link>
                         {/* <Link to='/account'><li className=" text-black font-semibold text-[18px]"  onClick={()=>navund(5)}><i className="bi bi-person-fill  text-black font-semibold text-[18px] active:underline"></i></li></Link> */}
                     </ul>
                 </div>
             </div>
         </div>
         <div>
         <div className={ click === true ? "nav  flex flex-col lg:hidden items-center gap-[50px] fixed left-0 bg-main-color w-[100%] h-auto  ease-in-out duration-500 py-5" : "nav  flex flex-col lg:hidden items-center gap-[50px] w-[100%] fixed left-[-100%] h-auto ease-in-out duration-500 py-5"} >

        
                 <div className="nav-text">
                     <ul className="flex lg:flex-row flex-col items-center gap-[42px]">
                         <Link to='/'  onClick={()=>navclick()}><li className= {click=== 1 ? (" text-black font-semibold text-[20px] font-inter underline hover:underline"):(" text-black font-semibold text-[20px] font-inter hover:underline")} onClick={()=>navund(1)}>Home</li></Link>
                         <Link to='/shop'  onClick={()=>navclick()}><li className= {click=== 2 ? (" text-black font-semibold text-[20px] font-inter underline hover:underline"):(" text-black font-semibold text-[20px] font-inter hover:underline")}onClick={()=>navund(2)}>Shop</li></Link>
                         <Link to='/contact'  onClick={()=>navclick()}><li className= {click=== 3 ? (" text-black font-semibold text-[20px] font-inter underline hover:underline"):(" text-black font-semibold text-[20px] font-inter hover:underline")} onClick={()=>navund(3)}>Contact</li></Link>
                     </ul>
                 </div>
                 <div className="nav-icons">
                     <ul className="flex flex-col items-center gap-[40px]">
                         <a href="#"><li className=" text-black font-semibold text-[18px]"><i className="bi bi-heart  text-black font-bold text-[18px]  active:underline"></i></li></a>
                         <a href="#"><li className=" text-black font-semibold text-[18px]"><i className="bi bi-search  text-black font-semibold text-[18px] active:underline"></i></li></a>
                         <Link to='/cart'  onClick={()=>navclick()}><li className=" text-black font-semibold text-[18px]"  onClick={()=>navund(4)}><i className="bi bi-bag  text-black font-semibold text-[18px] active:underline"></i>{cart.length>=1 ?(<span>{cart.length}</span>):null}</li></Link>
                         <Link to='/account'  onClick={()=>navclick()}><li className=" text-black font-semibold text-[18px] hover:underline"  onClick={()=>navund(5)}><i className="bi bi-person-fill  text-black font-semibold text-[18px] active:underline"></i></li></Link>
                         {/* <Link to='/account'><li className=" text-black font-semibold text-[18px]"  onClick={()=>navund(5)}><i className="bi bi-person-fill  text-black font-semibold text-[18px] active:underline"></i></li></Link> */}
                     </ul>
                 </div>

             </div>
         </div>
    </div>
</header>
  )
}

export default Navbar