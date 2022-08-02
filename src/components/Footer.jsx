import React from 'react';
import logo from '../assets/logo.png';
import { IoLogoWhatsapp } from 'react-icons/io';
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { AiFillCopyrightCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='bg-[#803f80] w-full p-6 text-white'>
      <div className='flex flex-col md:flex-row justify-evenly'>
        <div className='flex flex-col'>
          <img src={logo} alt='logo' className='w-64' />
          <div className='my-1 flex items-center'>
            <IoLogoWhatsapp size='28' className='mr-2' />
            <p>+92 123 456 4578</p>
          </div>
          <div className='flex items-center'>
            <HiOutlineMail size='28' className='mr-2' />
            <p>alma.lawson@example.com</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-lg'>SOCIAL MEDIA</h2>
          <ul className='flex flex-col mt-2'>
            <li className=''>
              <a href='/' className='flex items-center'>
                <FaTwitter className='text-purple-400' size='20' />
                <span className='ml-2'>Twitter</span>
              </a>
            </li>
            <li className=''>
              <a href='/' className='flex items-center'>
                <FaFacebook className='text-purple-400' size='20' />
                <span className='ml-2'>Facebook</span>
              </a>
            </li>
            <li className=''>
              <a href='/' className='flex items-center'>
                <FaInstagram className='text-purple-400' size='20' />
                <span className='ml-2'>Instagram</span>
              </a>
            </li>
            <li className=''>
              <a href='/' className='flex items-center'>
                <FaYoutube className='text-purple-400' size='20' />
                <span className='ml-2'>Youtube</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-lg'>FORIEGN OFFICES</h2>
          <ul className='flex flex-col mt-2'>
            <li className=''>
              <a href='/' className='flex items-center'>
                <span className='ml-2'>Australia</span>
              </a>
            </li>
            <li className=''>
              <a href='/' className='flex items-center'>
                <span className='ml-2'>Korea</span>
              </a>
            </li>
            <li className=''>
              <a href='/' className='flex items-center'>
                <span className='ml-2'>China</span>
              </a>
            </li>
            <li className=''>
              <a href='/' className='flex items-center'>
                <span className='ml-2'>Germany</span>
              </a>
            </li>
            <li className=''>
              <a href='/' className='flex items-center'>
                <span className='ml-2'>Uk</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='w-full flex justify-center items-center mt-2'>
        <p className='flex items-center'>
          <AiFillCopyrightCircle size='20' className='mr-2' />
          <span>2022 All copyrights reserved || Terms and Condition</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
