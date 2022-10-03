import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-green-800'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex justify-center space-x-6 md:order-2'>
          <a href='https://github.com/mraltun' target='_blank' rel='noreferrer'>
            <FaGithub className='text-gray-200 hover:text-gray-400 h-6 w-6' />
          </a>
          <a
            href='https://www.linkedin.com/in/mraltun/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin className='text-gray-200 hover:text-gray-400 h-6 w-6' />
          </a>
          <a
            href='https://twitter.com/mraltun62'
            target='_blank'
            rel='noreferrer'
          >
            <FaTwitter className='text-gray-200 hover:text-gray-400 h-6 w-6' />
          </a>
        </div>
        <div className='mt-8 md:mt-0 md:order-1'>
          <p className='text-center text-base text-gray-200'>
            &copy; 2022 Murat Altun.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
