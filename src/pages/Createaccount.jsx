import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image1 from '../assets/images/image1.png';
import Image2 from '../assets/images/image2.png';
import Image3 from '../assets/images/image3.png';
import Image4 from '../assets/images/image4.png';
import Image5 from '../assets/images/image5.png';

function Createaccount() {
  const slides = [
    "welcome", // First slide is the welcome message
    Image5,
    Image1,
    Image2,
    Image3,
    Image4,
  ];
  const [index, setIndex] = useState(0);

  // Move to the next slide automatically every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3000ms (3 seconds)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [slides.length]); // Run once when the component mounts

  const prevSlide = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % slides.length);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">

      {/* Slideshow Container */}
      <div className="relative w-[1000px] h-[650px] overflow-hidden rounded-xl shadow-lg mt-10">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {/* First Slide: Welcome Message */}
          <div className="w-full h-[650px] flex-shrink-0 bg-orange-600 text-white flex flex-col items-center justify-center p-10 text-center">
            <h1 className="text-6xl mb-6">Hello, Friend! 😊</h1>
            <p className="text-2xl leading-relaxed">
              Enter your personal details <br /> and start your journey with us
            </p>
          </div>

          {/* Image Slides */}
          {slides.slice(1).map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-full h-[650px] object-contain flex-shrink-0 bg-white"
            />
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow text-xl"
        >
          &#8592;
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow text-xl"
        >
          &#8594;
        </button>
      </div>

      {/* Sign Up Button */}
      <Link to="/createaccount/<signup/>" className="mt-6">
        <button className="bg-orange-600 border-2 border-white text-white px-6 py-3 rounded-2xl font-semibold hover:bg-orange-700 transition cursor-pointer">
          SIGN UP
        </button>
      </Link>
    </div>
  );
}

export default Createaccount;
