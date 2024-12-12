import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#1b4450] text-white mt-4">
            <div className="container mx-auto px-4 bg-[#1b4450]">
                {/* Footer Content Wrapper */}
                <div className="flex flex-col justify-between items-center bg-[#1b4450] py-8">

                    {/* Logo */}
                    <div className="flex justify-center md:justify-start w-full md:w-auto bg-[#1b4450]">
                        <img src="/logo.png" alt="Logo" className="h-14 mb-2 object-contain bg-[#1b4450]" />
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col sm:flex-row sm:gap-5 space-y-1 md:space-y-0 text-center md:text-left w-full md:w-auto
                    bg-[#1b4450] text-sm">
                        <Link
                            to="/"
                            className="text-white hover:text-[#1988ab] bg-[#1b4450]"
                            onClick={handleScrollToTop}
                        >
                            Home
                        </Link>
                        <Link to="/connections" className="text-white hover:text-[#1988ab] bg-[#1b4450]">Connections</Link>
                        <Link to="/message" className="text-white hover:text-[#1988ab] bg-[#1b4450]">Messaging</Link>
                        <Link to="/query" className="text-white hover:text-[#1988ab] bg-[#1b4450]">Post Your Query</Link>
                    </div>

                    {/* Copyright */}
                    <div className="mt-4 md:mt-0 text-center md:text-right w-full md:w-auto text-sm">
                        <p className='bg-[#1b4450] text-gray-500'>&copy; {new Date().getFullYear()} Talent Bridge. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
