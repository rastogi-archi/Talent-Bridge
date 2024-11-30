import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const Faq = (props) => {
    const [isOpen, setIsOpen] = useState(false); // Track the accordion state

    return (
        <div className="rounded-lg shadow-md p-4 mb-4 sm:p-6 transition-all duration-300 w-80 sm:w-[600px] m-auto">
            {/* Header Section */}
            <div
                className="cursor-pointer flex justify-between items-center w-full"
                onClick={() => setIsOpen(!isOpen)} // Toggle visibility on click
            >
                <h3 className="text-xs font-semibold sm:text-xl">
                    {props.ques}
                </h3>
                <span
                    className="sm:text-lg transform transition-transform duration-300 text-right"
                >
                    {isOpen ? <Minus className='size-3'/> : <Plus className='size-3'/>} {/* Dynamically render + or - */}
                </span>
            </div>

            {/* Content Section */}
            {isOpen && (
                <div className="text-xs mt-2 text-[#1f7894] sm:text-base">
                    <p>{props.ans}</p>
                </div>
            )}
        </div>
    );
};

export default Faq;
