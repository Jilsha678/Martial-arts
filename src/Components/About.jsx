import React from 'react'
import About_img from '../assets/About.jpg'
import logo from '../assets/aboutlog.png'
const About = () => {
  return (
    <div className='relative top-5 m-10'>
      <h1 className='text-4xl font-bold '>About <span className='text-red-600'>Us</span></h1>
      
    <div className='grid grid-cols-1 md:grid-cols-2' >
          <div>
        <p className='text-black text-xl relative top-10  text-justify '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quae autem molestiae, odio sint provident tenetur eligendi ipsum dignissimos. Facilis quia quis qui corporis neque veritatis iste, tempore culpa magni. </p>
        <p className='text-black text-xl relative top-10 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus cupiditate reprehenderit ea, impedit quis commodi ipsum ab quas. Quod reiciendis sit aspernatur praesentium temporibus voluptatum enim eligendi, repudiandae deserunt ratione.</p>
      </div>
       <div className="flex justify-center">
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <img src={logo} alt="About Us" className="max-w-xs" />
          </div>
        </div>
  
    </div>
    <button className='font-semibold text-xl bg-red-600 hover:bg-red-800 text-white w-40 h-10'>  Read More <span className='w-10'>→</span></button>
    </div>
  )
}

export default About
