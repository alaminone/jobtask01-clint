import React from 'react';
import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
  } from 'react-icons/fa';
const Footer = () => {
    return (
        <section className="mt-[10rem]">
          <footer className="footer footer-center p-10 bg-lightOne text-darkOne">
            <aside>
              <div>
                <img width={200} className="rounded-full" src={''} alt="" />
              </div>
              <p className="font-lora font-semibold py-4 text-xl md:text-2xl lg:text-3xl tracking-widest">
                Task management <br />
                Providing reliable tech since 2023
              </p>
              <p className="font-lora font-semibold py-4 text-sm md:text-xl lg:text-2xl tracking-widest">
                Copyright © 2023 - All right reserved
              </p>
            </aside>
    
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/vicktim.sejun/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook size={50} className="text-darkTwo cursor-pointer" />
              </a>
    
              <a
                href="https://www.linkedin.com/in/alamin-sijun-9783a52a4/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={50} className="text-darkTwo cursor-pointer" />
              </a>
    
              <a
                href="https://github.com/alaminone"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={50} className="text-darkTwo cursor-pointer" />
              </a>
            </div>
          </footer>
        </section>
      );
    };

export default Footer;