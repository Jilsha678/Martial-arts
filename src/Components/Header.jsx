import React from 'react';
import Navbar from './Navbar';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const Header = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: "url('/headerimg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-start min-h-screen pt-24 px-4 text-center">
          <Navbar />

          <div className="font-extrabold space-y-2 mt-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">MAKE</h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">YOUR</h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">BODY</h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">LIKE</h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">FIGHTER</h1>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3    text-white">
        {/* Card 1 */}
        <div
          className="bg-cover bg-center p-6 flex flex-col justify-end h-60 "
          style={{ backgroundImage: `url(${image1})` }}
        >
          <h2 className="text-xl font-bold text-center">CARDIO</h2>
          <h3 className="text-xl font-bold text-center">BOXING</h3>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, magni alias. Facilis ut, odit consectetur ipsum ex repellendus rerum ab omnis excepturi nobis distinctio nulla animi sed, alias deleniti iusto.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="bg-cover bg-center p-6 flex flex-col justify-end h-60 r"
          style={{ backgroundImage: `url(${image2})` }}
        >
          <h2 className="text-xl font-bold text-center">STRENGTH</h2>
          <h3 className="text-xl font-bold text-center">TRAINING</h3>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, laborum? Voluptates dolorum velit iusto veniam ducimus ullam et nam numquam consectetur quia deleniti illo repudiandae, accusamus deserunt maiores sed molestias!
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="bg-cover bg-center p-6 flex flex-col justify-end h-60 "
          style={{ backgroundImage: `url(${image3})` }}
        >
          <h2 className="text-xl font-bold text-center">UNIQUE YOUR</h2>
          <h3 className="text-xl font-bold text-center">TRAINING</h3>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur architecto expedita perferendis maxime odit ut suscipit mollitia obcaecati eius officiis aperiam cupiditate dicta corporis, facere reprehenderit! Ipsa, animi quos? Asperiores?
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
