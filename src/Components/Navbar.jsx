import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import menu_icon from'../assets/menu_icon.svg'
import cross_icon from '../assets/cross_icon.png'
function Navbar() {
  const [OpenMenu,setOpenMenu]=useState(false)
  const[scrolled,setScrolled]=useState(false)

  useEffect(()=>{
    const onscroll=()=>{
      setScrolled(window.scrollY>50)
    }
    window.addEventListener('scroll',onscroll)
      return () => window.removeEventListener('scroll',onscroll)
  },[])
  return (
    <div className={`fixed top-0 left-0 w-full z-50 ${scrolled?'bg-black':'bg-transparent'}`}>
      <div className="hidden md:flex justify-center  text-white py-4 space-x-16 text-xl font-semibold ">
        
        {/* Left side links */}
        <div className="flex space-x-10 mt-5">
          <li className="list-none hover:text-gray-300 cursor-pointer">HOME</li>
          <li className="list-none hover:text-gray-300 cursor-pointer">INSTRUCTORS</li>
        </div>

        {/* Center logo */}
        <img className="w-20" src={logo} alt="Logo" />

        {/* Right side links */}
        <div className="flex space-x-10 mt-5">
          <li className="list-none hover:text-gray-600 cursor-pointer">ABOUT US</li>
          <li className="list-none hover:text-gray-600 cursor-pointer">CONTACT</li>
        </div>

      </div>
      {/* Mobile view */}
      <div className='flex md:hidden justify-between mt-5 ml-5 mr-5 '>
        <img src={logo} className='w-14' alt="" />
        <img onClick={()=>setOpenMenu(!OpenMenu)} src={menu_icon} className='w-6' alt="" />
      </div>
      {
        OpenMenu&&(

          <div className=' md:hidden bg-black text-white px-6 pb-4 space-y-4 text-lg font-medium'>
            <div className='flex justify-end '>
              
            <img onClick={()=>setOpenMenu(false)} className='w-6  hover:bg-red-700 cursor-pointer' src={cross_icon} alt="" />
            </div>
              <div className="hover:text-gray-300 cursor-pointer transition duration-300">HOME</div>
          <div className="hover:text-gray-300 cursor-pointer">INSTRUCTORS</div>
          <div className="hover:text-gray-300 cursor-pointer">ABOUT US</div>
          <div className="hover:text-gray-300 cursor-pointer">CONTACT</div>
          </div>
        )
      }
    </div>
  );
}

export default Navbar;
