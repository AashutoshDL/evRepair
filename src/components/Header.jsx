import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle navbar transparency on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-xl font-light tracking-wider">
            <a href="#home" className="hover:text-blue-400 transition-colors">EV·REPAIR</a>
          </div>
          
          {/* Nav items - simplified */}
          <div className="hidden md:flex text-white space-x-8 font-light text-sm tracking-widest uppercase">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#aboutUs" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#location" className="hover:text-blue-400 transition-colors">Location</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#contacts" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="h-screen bg-gradient-to-r from-gray-900 to-black flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-wider">
              EV REPAIR <span className="font-thin text-blue-400">&</span> INSTITUTE
            </h1>
            <p className="text-gray-300 text-lg font-light">
              Specialized electric vehicle solutions for the modern driver
            </p>
          </div>

          <div className="mt-10">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2.5,
                },
              }}
              loop={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="relative rounded-xl overflow-hidden h-64 md:h-96">
                  <img src="/image1.jpg" alt="Electric vehicle repair" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-xl font-light">Expert Repairs</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative rounded-xl overflow-hidden h-64 md:h-96">
                  <img src="/image2.jpg" alt="EV maintenance" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-xl font-light">Professional Training</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative rounded-xl overflow-hidden h-64 md:h-96">
                  <img src="/image3.jpg" alt="Electric charging station" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-xl font-light">Charging Solutions</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative rounded-xl overflow-hidden h-64 md:h-96">
                  <img src="/image4.jpg" alt="EV diagnostics" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-white text-xl font-light">Advanced Diagnostics</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;