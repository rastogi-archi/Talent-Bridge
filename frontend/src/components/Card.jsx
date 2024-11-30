import React from 'react';

const Card = (props) => {
    return (
        <div className="card card-compact bg-base-100 w-full sm:w-96 md:w-80 lg:w-96 shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_4px_15px_4px_rgba(0,123,255,0.3)] hover:bg-[#f1f1f1] cursor-pointer overflow-hidden">
            <figure className="w-full h-48 sm:h-56 md:h-60 lg:h-56">
                <img
                    src={props.image}
                    alt="facility"
                    className="w-full h-full object-cover transition-all duration-300 ease-in-out"
                />
            </figure>
            <div className="card-body p-2">
                <h2 className="card-title text-lg text-[#1988ab]">{props.facility}</h2>
                <p className="text-sm">{props.text}</p> {/* Removed margin */}
            </div>
        </div>
    );
};

export default Card;
