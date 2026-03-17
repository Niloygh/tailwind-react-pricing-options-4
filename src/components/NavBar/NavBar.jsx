import React from 'react';

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
    return (
        <div>

            <nav>
                <ul className='flex gap-8'>
                    {
                        navData.map(route=> 
                        <li><a href={route.path}>{route.name}</a></li>)
                    }
                </ul>
            </nav>


            {/* <nav>
                <ul>
                    <li><a href=" #">Home</a></li>
                    <li><a href=" #">About</a></li>
                    <li><a href=" #">Contact</a></li>
                </ul>
            </nav> */}
            
        </div>
    );
};

export default NavBar;