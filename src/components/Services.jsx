import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Services = () => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12" id="services">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">Our Services</h1>
      </div>

      <Slider {...settings}>
        {/* Card 1 */}
        <div className="px-4">
          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <img src="./image1.jpg" alt="Service 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl text-white font-bold mb-4">Service Title 1</h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="px-4">
          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <img src="./image1.jpg" alt="Service 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl text-white font-bold mb-4">Service Title 2</h2>
              <p className="text-white">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="px-4">
          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <img src="./image1.jpg" alt="Service 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl text-white font-bold mb-4">Service Title 3</h2>
              <p className="text-white">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="px-4">
          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <img src="./image1.jpg" alt="Service 4" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl text-white font-bold mb-4">Service Title 4</h2>
              <p className="text-white">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Services;
