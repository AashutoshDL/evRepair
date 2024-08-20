import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gray-800 p-4 shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-2xl font-Kanit">
            <a href="#home">Ev Repair</a>
          </div>

          {/* Search bar */}
          {/* <div className="w-full max-w-xs">
            <input
              type="text"
              placeholder="search for anything"
              className="w-full px-20 py-2 rounded-md bg-grays-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-Kanit"
            />
          </div> */}

          {/* Nav items */}
          <div className="text-white space-x-10 font-Kanit">
            <a href="#home" className="hover:text-gray-400">Home</a>
            <a href="#aboutUs" className="hover:text-gray-400">About</a>
            <a href="#location" className="hover:text-gray-400">Location</a>
            <a href="#services" className="hover:text-gray-400">Services</a>
            <a href="#contacts" className="hover:text-gray-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Adjusted content padding */}
      <div className="pt-20">
        <div className="flex justify-center pt-12">
          <h1 className="text-5xl font-Kanit">EV Repair and Institute</h1>
        </div>
        <div className="pt-10">
          <Swiper
            spaceBetween={25}
            slidesPerView={2.75}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay configuration
            modules={[Navigation, Autoplay]} // Include Autoplay module
          >
            <SwiperSlide>
              <img src='./image1.jpg' alt='image1' className="w-full h-auto rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src='./image1.jpg' alt='image1' className="w-full h-auto rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src='./image1.jpg' alt='image1' className="w-full h-auto rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src='./image1.jpg' alt='image1' className="w-full h-auto rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src='./image1.jpg' alt='image1' className="w-full h-auto rounded-lg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src='./image1.jpg' alt='image1' className="w-full h-auto rounded-lg" />
            </SwiperSlide>
            {/* Add more SwiperSlide components as needed */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Navbar;
