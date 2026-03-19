import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import Links from './Links';

const navData = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const links = navData.map((route, index)=> <Links
    key={index}
    route={route}></Links>)
    
    return (
        <nav className='flex justify-between mx-6 my-3'>

            <span className='flex gap-4' onClick={()=> setOpen(!open)}>
                {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
                <ul className={`md:hidden absolute duration-1000 z-10
                    ${open ? 'top-9' : '-top-40'}
                   bg-amber-200 text-black`}>
                    {links}
                </ul>
                
                <h3>My NavBar</h3>
            </span>

                <ul className='md:flex md:gap-8 hidden'>
                    {
                        links
                    }
                </ul>


                {/* <ul>
                    <li><a href=" #">Home</a></li>
                    <li><a href=" #">About</a></li>
                    <li><a href=" #">Contact</a></li>
                </ul> */}

                <button className='btn bg-primary'>Sign In</button>


            
        </nav>
    );
};

export default NavBar;