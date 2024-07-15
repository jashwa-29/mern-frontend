import React from 'react'
import { Link } from 'react-router-dom'

export const Subhead = ({pname}) => {
  return (
    <section>
      <div className="bg-hero-pattern bg-no-repeat bg-center w-[100%] bg-cover h-[250px]">
        <div className="w-[93%] mx-auto text-center">
          <div className="flex flex-col items-center ml-0 pt-12">
            <Link to='/' className="text-[35px] font-bold font-jockey">Classyx</Link>
            <h3 className="font-poppins text-[42px] font-medium">{pname}</h3>
            <div className="flex items-center gap-2">
              <a href="#" className="font-medium font-poppins text-[16px]">Home</a>
              <span>&gt;</span>
              <a href="#" className="font-light font-inter text-[16px]">{pname}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
