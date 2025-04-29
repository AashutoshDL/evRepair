import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Services = () => {
  // Custom dots component
  const CustomDots = (dots) => (
    <div className="custom-dots">
      <ul className="flex justify-center gap-2 mt-12"> {dots} </ul>
    </div>
  );

  // Custom dot component
  const CustomDot = ({ onClick, active }) => (
    <li className="inline-block">
      <button
        onClick={onClick}
        className={`w-12 h-1 transition-all duration-300 ${
          active ? 'bg-blue-400' : 'bg-gray-700'
        }`}
        aria-label="Carousel dot"
      />
    </li>
  );

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    appendDots: CustomDots,
    customPaging: () => <CustomDot />,
    responsive: [
      {
        breakpoint: 1280,
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

  // Service data
  const services = [
    {
      id: 1,
      title: "EV Diagnostics",
      description: "Complete analysis of your electric vehicle's systems using advanced diagnostic tools to identify and resolve performance issues.",
      image: "image1.jpg"
    },
    {
      id: 2,
      title: "Battery Service",
      description: "Specialized maintenance and repair of EV battery systems, including cell balancing, cooling system optimization, and capacity restoration.",
      image: "image2.jpg"
    },
    {
      id: 3,
      title: "Technical Training",
      description: "Comprehensive certification programs for aspiring EV technicians covering electrical systems, battery technology, and diagnostic procedures.",
      image: "image3.jpg"
    },
    {
      id: 4,
      title: "Charging Solutions",
      description: "Installation, maintenance and repair of home and commercial EV charging stations, optimized for efficiency and reliability.",
      image: "image4.jpg"
    },
    {
      id: 5,
      title: "Software Updates",
      description: "Latest firmware and software updates for all major electric vehicle brands to ensure optimal performance and newest features.",
      image: "image5.jpg"
    }
  ];

  return (
    <section className="py-24 bg-black text-white" id="services">
      {/* Section header with line accent */}
      <div className="container mx-auto px-6 mb-16">
        <div className="flex items-center mb-16">
          <div className="h-px bg-blue-400 w-16 mr-6"></div>
          <h2 className="text-3xl md:text-4xl font-light tracking-wider">OUR SERVICES</h2>
        </div>
        
        <p className="text-gray-400 font-light max-w-xl">
          Specialized electric vehicle solutions delivered by certified technicians using advanced equipment and innovative techniques.
        </p>
      </div>
      
      {/* Services slider */}
      <div className="container mx-auto px-6">
        <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id} className="px-3">
              <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden h-full transition-transform duration-300 hover:translate-y-1 group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-light mb-4 tracking-wide text-blue-400">{service.title}</h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="mt-8 pt-4 border-t border-gray-800 flex justify-between items-center">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">EV Repair</span>
                    <button className="text-xs text-blue-400 hover:text-white transition-colors uppercase tracking-wider flex items-center group">
                      Learn more
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      {/* CTA section */}
      <div className="container mx-auto px-6 mt-24">
        <div className="bg-gradient-to-r from-blue-900/20 to-blue-900/5 border border-blue-900/30 rounded-lg p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-light mb-2 tracking-wide">Ready to service your EV?</h3>
            <p className="text-gray-400 font-light">Schedule an appointment with our specialist technicians today.</p>
          </div>
          <button className="px-8 py-3 bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-colors duration-300 text-sm tracking-wider">
            BOOK SERVICE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;