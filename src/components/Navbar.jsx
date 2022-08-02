import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      name: 'Home',
      link: 'home',
    },
    {
      id: 2,
      name: 'About',
      link: 'about',
    },
    {
      id: 3,
      name: 'Contact Us',
      link: 'contact',
    },
    {
      id: 4,
      name: 'Sign Up',
      link: 'signup',
    },
    {
      id: 5,
      name: 'Login',
      link: 'login',
    },
  ];
  return (
    <div className='bg-transparent absolute h-[70px] w-full text-zinc-100/90 z-20'>
      <div className='h-full w-full px-6 flex justify-between items-center'>
        <img src={logo} alt='logo' className='w-60' />
        <ul className='hidden md:flex'>
          {navLinks.map((nav) => {
            const { id, name, link } = nav;
            return (
              <a href={link} key={id} className='mx-4 text-xl'>
                <li>{name}</li>
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
