import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { id: 1, name: "John Doe", review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Jane Smith", review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Mike Ross", review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Rachel Green", review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Ross Geller", review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Chandler Bing", review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", image: "https://via.placeholder.com/150" },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const getVisibleReviews = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      return [reviews[currentIndex]];
    }
    const visible = [];
    for (let i = 0; i < 5; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

  const visibleReviews = getVisibleReviews();

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Change slides every 3 seconds

    return () => {
      clearInterval(interval); // Cleanup the interval on component unmount
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden flex items-center justify-center mb-8">
      {/* Left Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 bg-[#1988ab] text-white p-1 rounded-full focus:outline-none"
      >
        <ChevronLeft className="bg-[#1988ab] size-5"/>
      </button>

      {/* Carousel Wrapper */}
      <div className="flex gap-4 justify-center w-11/12 mt-2">
        {visibleReviews.map((review) => (
          <div
            key={review.id}
            className="bg-white shadow-lg rounded-md border-2 p-4 w-64 h-32 flex-shrink-0 text-center "
          >
            <div className="flex items-center justify-center mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
                <p className="text-gray-600 text-sm">{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 bg-[#1988ab] text-white p-1 rounded-full focus:outline-none"
      >
        <ChevronRight className="bg-[#1988ab] size-5"/>
      </button>
    </div>
  );
};

export default Testimonials;
