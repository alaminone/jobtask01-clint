import React from 'react';

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center">
        <img src={ErrorJpg} width={700} height={700} alt="" />
  
        <Link to={'/'}>
          <button className="bg-darkOne text-lightOne px-12 py-4 text-sm md:text-xl lg:text-2xl font-lora font-bold tracking-wide rounded-lg border-2 border-lightOne">
            let&apos;s Explore
          </button>
        </Link>
      </div>
    );
};

export default ErrorPage;