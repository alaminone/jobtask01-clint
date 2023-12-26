import React from 'react';

const ServicesSection = () => {
    return (
        <div className="flex justify-center items-center flex-col my-[10rem]">
        <div className="m-auto text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-lora font-bold text-darkOne my-10 tracking-wider">
            Our functionality
          </h1>
        </div>
  
        {/*  */}
  
        <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-4">
          <div className="h-full border-2 border-lightOne rounded-lg hover:bg-lightOne hover:text-darkThree duration-300">
            <div className="flex flex-col justify-center items-center gap-4 m-8 p-8">
              <h1 className="text-3xl font-poppins font-bold capitalize tracking-wide">
                why choose this site ?
              </h1>
              <p className="text-xl font-poppins font-semibold capitalize tracking-wide leading-8 py-4 px-8">
                Add task is suitable
              </p>
            </div>
          </div>
          {/*  */}
          <div className="h-full border-2 border-lightOne rounded-lg hover:bg-lightOne hover:text-darkThree duration-300">
            <div className="flex flex-col justify-center items-center gap-4 m-8 p-8">
              <h1 className="text-3xl font-poppins font-bold capitalize tracking-wide">
                Why this site comfortable?
              </h1>
              <p className="text-xl font-poppins font-semibold capitalize tracking-wide leading-8 py-4 px-8">
                Because this site is user friendly
              </p>
            </div>
          </div>
          {/*  */}
          <div className="h-full border-2 border-lightOne rounded-lg hover:bg-lightOne hover:text-darkThree duration-300">
            <div className="flex flex-col justify-center items-center gap-4 m-8 p-8">
              <h1 className="text-3xl font-poppins font-bold capitalize tracking-wide">
                what we provide ?
              </h1>
              <p className="text-xl font-poppins font-semibold capitalize tracking-wide leading-8 py-4 px-8">
                we provide a good quality task management app
              </p>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    );
};

export default ServicesSection;