import React from 'react'
import Navbar from './Navbar'
const Header = () => {
  return (
    <div className='min-h-screen sm:min-h-[70vh] md:min-h-[100vh] lg:min-h-screen mb-4 bg-cover bg-center flex justify-center items-center w-full overflow-hidden ' style={{backgroundImage:"url('/headerimg.jpg')"}}>
        <Navbar/>
        <div className='text-white  font-bold space-y-2 text-center '>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold'>MAKE</h1>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold'>YOUR</h1>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold'>BODY</h1>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold'>LIKE</h1>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold'>FIGHTER</h1>  
        </div>
       
      
    </div>
  )
}

export default Header
