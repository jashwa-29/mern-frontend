import React from 'react';
import Product from '../Pages/Product';
import { Link } from 'react-router-dom';


export const Newcollection = ({spro , setSpro , phead , setPhead}) => {
  let newpro1 = Product.slice(3,4)
  let newpro2 = Product.slice(17 , 18)
  let newpro3 = Product.slice(10 , 11)
  let newpro4 = Product.slice(2 , 3)
  let newpro5 = Product.slice(0 , 1)
  let newpro6 = Product.slice(9 , 10)
  let newpro7 = Product.slice(1 , 2)
  let newpro8 = Product.slice(16 , 17)
  const pageSender = (item)=>{
    setSpro([item])
    setPhead(item.name)
}
const renderProduct = (product) => (
  <Link to='/propage' onClick={() => pageSender(product)} key={product.id}>
    <div className="collection-card w-[300px] h-auto bg-main-color rounded-[8px] flex flex-col justify-center items-center py-[20px] px-[20px] hover:shadow-sm hover:scale-105 ease-in-out transition">
      <div className="start-img ml-auto">
        <i className="bi bi-star-fill"></i>
      </div>
      <div className="card-img ml-auto mr-auto">
        <img src={product.image} alt={product.name} className="w-[220px]" />
      </div>
      <div className="card-text flex flex-col gap-[5px] items-start ml-auto mr-auto">
        <h3 className="font-poppins font-bold text-[22px]">{product.name}</h3>
        <p className="font-inter font-normal text-[18px]">{product.description}</p>
        <h5 className="font-medium text-pricing-color text-[21px]">${product.price}</h5>
      </div>
    </div>
  </Link>
);
  return (
    // <section className="my-[50px]">
    //   <div className="w-[93%] ml-auto mr-auto">
    //     <div className="collection-heading flex justify-center">
    //       <h2 className="font-bold text-[35px] text-center mb-[30px]">New Collections</h2>
    //     </div>
    //     <div className="main-collections flex flex-col items-center gap-[20px] lg:gap-[50px] md:gap-[50px]">
    //     <div className="collections flex items-center justify-center lg:gap-[60px] gap-[20px] flex-wrap">
    //       {
    //         newpro1.map((item)=>
    //           <Link to='/propage'  onClick={()=>pagesender(item)}>
    //           <div  className="collection-card w-[300px] h-auto bg-main-color rounded-[8px] flex flex-col py-[20px] px-[15px]">
    //           <div className="start-img ml-auto">
    //             <i className="bi bi-star-fill"></i>
    //           </div>
    //           <div className="card-img ml-auto mr-auto">
    //           <img src={item.image} alt=""  className="w-[220px]" />
    //           </div>
              
    //             <div className="card-text flex flex-col gap-[5px] items-start ml-auto mr-auto">
    //             <h3 className="font-poppins font-bold text-[22px]">Brown Sneakers</h3>
    //             <p className="font-inter font-normal text-[18px]">Leather brown sneaker</p>
    //             <h5 className="font-medium text-pricing-color text-[21px]">$ 889</h5>
    //           </div>
    //           </div>
    //           </Link>
    //         )
    //       }
    //            {
    //         newpro2.map((item)=>
    //           <Link to='/propage'  onClick={()=>pagesender(item)}>
    //           <div  className="collection-card w-[300px] h-auto bg-main-color rounded-[8px] flex flex-col py-[20px] px-[15px]">
    //           <div className="start-img ml-auto">
    //             <i className="bi bi-star-fill"></i>
    //           </div>
    //           <div className="card-img ml-auto mr-auto">
    //           <img src={item.image} alt=""  className="w-[220px]" />
    //           </div>
              
    //             <div className="card-text flex flex-col gap-[5px] items-start ml-auto mr-auto">
    //             <h3 className="font-poppins font-bold text-[22px]">Brown Sneakers</h3>
    //             <p className="font-inter font-normal text-[18px]">Leather brown sneaker</p>
    //             <h5 className="font-medium text-pricing-color text-[21px]">$ 889</h5>
    //           </div>
    //           </div>
    //           </Link>
    //         )
    //       }
    //            {
    //         newpro2.map((item)=>
    //           <Link to='/propage'  onClick={()=>pagesender(item)}>
    //           <div  className="collection-card w-[300px] h-auto bg-main-color rounded-[8px] flex flex-col py-[20px] px-[15px]">
    //           <div className="start-img ml-auto">
    //             <i className="bi bi-star-fill"></i>
    //           </div>
    //           <div className="card-img ml-auto mr-auto">
    //           <img src={item.image} alt=""  className="w-[220px]" />
    //           </div>
              
    //             <div className="card-text flex flex-col gap-[5px] items-start ml-auto mr-auto">
    //             <h3 className="font-poppins font-bold text-[22px]">Brown Sneakers</h3>
    //             <p className="font-inter font-normal text-[18px]">Leather brown sneaker</p>
    //             <h5 className="font-medium text-pricing-color text-[21px]">$ 889</h5>
    //           </div>
    //           </div>
    //           </Link>
    //         )
    //       }
    //            {
    //         newpro4.map((item)=>
    //           <Link to='/propage'  onClick={()=>pagesender(item)}>
    //           <div  className="collection-card w-[300px] h-auto bg-main-color rounded-[8px] flex flex-col py-[20px] px-[15px]">
    //           <div className="start-img ml-auto">
    //             <i className="bi bi-star-fill"></i>
    //           </div>
    //           <div className="card-img ml-auto mr-auto">
    //           <img src={item.image} alt=""  className="w-[220px]" />
    //           </div>
              
    //             <div className="card-text flex flex-col gap-[5px] items-start ml-auto mr-auto">
    //             <h3 className="font-poppins font-bold text-[22px]">Brown Sneakers</h3>
    //             <p className="font-inter font-normal text-[18px]">Leather brown sneaker</p>
    //             <h5 className="font-medium text-pricing-color text-[21px]">$ 889</h5>
    //           </div>
    //           </div>
    //           </Link>
    //         )
    //       }

    //        <div className="collections flex items-center justify-center lg:gap-[60px] gap-[20px] flex-wrap">
    //        {
    //         newpro5.map((item)=>
    //           <Link to='/propage'  onClick={()=>pagesender(item)}>
    //           <div  className="collection-card w-[300px] h-auto bg-main-color rounded-[8px] flex flex-col py-[20px] px-[15px]">
    //           <div className="start-img ml-auto">
    //             <i className="bi bi-star-fill"></i>
    //           </div>
    //           <div className="card-img ml-auto mr-auto">
    //           <img src={item.image} alt=""  className="w-[220px]" />
    //           </div>
              
    //             <div className="card-text flex flex-col gap-[5px] items-start ml-auto mr-auto">
    //             <h3 className="font-poppins font-bold text-[22px]">Brown Sneakers</h3>
    //             <p className="font-inter font-normal text-[18px]">Leather brown sneaker</p>
    //             <h5 className="font-medium text-pricing-color text-[21px]">$ 889</h5>
    //           </div>
    //           </div>
    //           </Link>
    //         )
    //       }
    //                      {
    //         newpro6.map((item)=>
    //           <Link to='/propage'  onClick={()=>pagesender(item)}>
    //           <div  className="collection-card w-[300px] h-auto bg-main-color rounded-[8px] flex flex-col py-[20px] px-[15px]">
    //           <div className="start-img ml-auto">
    //             <i className="bi bi-star-fill"></i>
    //           </div>
    //           <div className="card-img ml-auto mr-auto">
    //           <img src={item.image} alt=""  className="w-[220px]" />
    //           </div>
              
    //             <div className="card-text flex flex-col gap-[5px] items-start ml-auto mr-auto">
    //             <h3 className="font-poppins font-bold text-[22px]">Brown Sneakers</h3>
    //             <p className="font-inter font-normal text-[18px]">Leather brown sneaker</p>
    //             <h5 className="font-medium text-pricing-color text-[21px]">$ 889</h5>
    //           </div>
    //           </div>
    //           </Link>
    //         )
    //       }
    //                      {
    //         newpro7.map((item)=>
    //           <Link to='/propage'  onClick={()=>pagesender(item)}>
    //           <div  className="collection-card w-[300px] h-auto bg-main-color rounded-[8px] flex flex-col py-[20px] px-[15px]">
    //           <div className="start-img ml-auto">
    //             <i className="bi bi-star-fill"></i>
    //           </div>
    //           <div className="card-img ml-auto mr-auto">
    //           <img src={item.image} alt=""  className="w-[220px]" />
    //           </div>
              
    //             <div className="card-text flex flex-col gap-[5px] items-start ml-auto mr-auto">
    //             <h3 className="font-poppins font-bold text-[22px]">Brown Sneakers</h3>
    //             <p className="font-inter font-normal text-[18px]">Leather brown sneaker</p>
    //             <h5 className="font-medium text-pricing-color text-[21px]">$ 889</h5>
    //           </div>
    //           </div>
    //           </Link>
    //         )
    //       }
    //                      {
    //         newpro8.map((item)=>
    //           <Link to='/propage'  onClick={()=>pagesender(item)}>
    //           <div  className="collection-card w-[300px] h-auto bg-main-color rounded-[8px] flex flex-col py-[20px] px-[15px]">
    //           <div className="start-img ml-auto">
    //             <i className="bi bi-star-fill"></i>
    //           </div>
    //           <div className="card-img ml-auto mr-auto">
    //           <img src={item.image} alt=""  className="w-[220px]" />
    //           </div>
              
    //             <div className="card-text flex flex-col gap-[5px] items-start ml-auto mr-auto">
    //             <h3 className="font-poppins font-bold text-[22px]">Brown Sneakers</h3>
    //             <p className="font-inter font-normal text-[18px]">Leather brown sneaker</p>
    //             <h5 className="font-medium text-pricing-color text-[21px]">$ 889</h5>
    //           </div>
    //           </div>
    //           </Link>
    //         )
    //       }
    //         </div>



    //       </div>
    //     </div>
    //     <div className="flex justify-center mt-10">
    //       <a href="#" className="font-poppins text-black font-bold text-[18px] underline">View More</a>
    //     </div>
    //   </div>
    // </section>
    <section className="my-[50px]">
    <div className="w-[93%] ml-auto mr-auto">
      <div className="collection-heading flex justify-center">
        <h2 className="font-bold text-[35px] text-center mb-[30px]">New Collections</h2>
      </div>
      <div className="main-collections flex flex-col items-center gap-[20px] lg:gap-[50px] md:gap-[50px]">
        <div className="collections flex items-center justify-center lg:gap-[60px] gap-[20px] flex-wrap">
          {newpro1.map(renderProduct)}
          {newpro2.map(renderProduct)}
          {newpro3.map(renderProduct)}
          {newpro4.map(renderProduct)}
        </div>
        <div className="collections flex items-center justify-center lg:gap-[60px] gap-[20px] flex-wrap">
          {newpro5.map(renderProduct)}
          {newpro6.map(renderProduct)}
          {newpro7.map(renderProduct)}
          {newpro8.map(renderProduct)}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <a href="#" className="font-poppins text-black font-bold text-[18px] underline">View More</a>
      </div>
    </div>
  </section>
  );
};
