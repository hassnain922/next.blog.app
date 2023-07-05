import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='header'>
     
     <div>
      <Image src="/logo.jpeg" alt='logo' width={55} height={55} /> 
      </div>
     <nav className='nav'>
       <ul className='navList'>
        <li  className="navItem"><Link  className="navItem a"href="/"> About</Link></li>
        <li  className="navItem"><Link  href="/blog">Blogs </Link></li>
         <li  className="navItem"><Link  className="navItem a"href="/services">Services </Link></li>
         <li  className="navItem"><Link className="navItem a" href="/projects">Projects </Link></li>
         <li  className="navItem"><Link className="navItem a" href="/contact">Contact </Link></li>
       </ul>
    </nav>
    </header>
  );
};

export default Header