import { useState } from 'react';
import wallpaper1 from '../assets/wallpaper.jpg';
import wallpaper2 from '../assets/Screenshot 2025-09-28 135613.png';
import wallpaper3 from '../assets/Screenshot 2025-09-28 135742.png';

const ProductCard = () => {
  const images = [wallpaper1, wallpaper2, wallpaper3]; // replace with your images
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Slides */}
      <div className="overflow-hidden">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`transition-transform duration-500 ease-in-out ${
              idx === current ? 'translate-x-0' : 'hidden'
            }`}
          >
            <img
              src={img}
              alt={`slide ${idx}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800 text-white p-2 px-5 py-5"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-800 text-white p-2 px-5 py-5"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              current === idx ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};
export default ProductCard;
