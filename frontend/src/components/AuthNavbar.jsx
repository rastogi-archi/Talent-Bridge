import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthNavbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu((prev) => !prev);
    };

    return (
        <header className="flex flex-col bg-white shadow-md">
            {/* Navbar Section */}
            <div className="flex justify-between items-center px-4 py-3">
                {/* Logo */}
                <div>
                    <img src="/logo.png" alt="Logo" className="h-16" />
                </div>

                {/* Desktop Links */}
                <ul className="hidden sm:flex space-x-6 text-[#1f7894]">
                    <Link>Home</Link>
                    <Link>Connections</Link>
                    <Link>Messaging</Link>
                    <Link>Post Your Query</Link>
                    <Link>Notifications</Link>
                </ul>
                <div className='rounded-full flex justify-center items-end cursor-pointer'>
                    <img src="\profile.png" alt="" className='size-11'/>
                </div>


                {/* Mobile Menu Icon */}
                <div className="sm:hidden cursor-pointer" onClick={toggleMenu}>
                    {openMenu ? <X className="size-6 text-[#1f7894]" /> : <Menu className="size-6 text-[#1f7894]" />}
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden bg-white sm:hidden transition-max-height duration-300 ${openMenu ? 'max-h-[300px]' : 'max-h-0'
                    }`}
            >
                <ul className="flex flex-col space-y-4 p-4 text-[#1f7894]">
                    <Link onClick={toggleMenu}>
                        Home
                    </Link>
                    <Link onClick={toggleMenu}>
                        Connections
                    </Link>
                    <Link onClick={toggleMenu}>
                        Messaging
                    </Link>
                    <Link onClick={toggleMenu}>
                        Post Your Query
                    </Link>
                    <Link onClick={toggleMenu}>
                        Notifications
                    </Link>
                </ul>
            </div>
        </header>
    );
};

export default AuthNavbar;



