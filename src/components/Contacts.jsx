import React from 'react';

const Contacts = () => {
  return (
    <>
      <div className="flex justify-center pt-12 pb-9" id='contacts'>
        <h1 className="text-5xl font-bold">Contact Us</h1>
      </div>
      
      <div className="bg-gray-800 text-white flex flex-col items-center py-16">
        <div className="flex flex-wrap justify-between w-full max-w-screen-lg mb-8 text-left">
          <div className="flex flex-col w-60 mb-4">
            <p className="text-xs">
              Jadibuti, Bhaktapur<br /> @ All Rights Reserved
            </p>
          </div>
          <div className="w-60 mb-4">
            <h4 className="text-sm font-semibold mb-2">Links</h4>
            <p className="text-xs mb-2 cursor-pointer">Facebook</p>
            <p className="text-xs mb-2 cursor-pointer">Instagram</p>
            <p className="text-xs mb-2 cursor-pointer">Google Mail</p>
            <p className="text-xs cursor-pointer">Contact</p>
          </div>
          <div className="w-60 mb-4">
            <h4 className="text-sm font-semibold mb-2">Company</h4>
            <p className="text-xs mb-2 cursor-pointer">Terms & Conditions</p>
            <p className="text-xs mb-2 cursor-pointer">Privacy Policy</p>
          </div>
          <div className="w-60 mb-4">
            <h4 className="text-sm font-semibold mb-2">Get in touch</h4>
            <p className="text-xs mb-2">Jadibuti Chowk, Bhaktapur</p>
            <p className="text-xs mb-2">9803133855</p>
            <p className="text-xs">youremail@gmail.com</p>
          </div>
        </div>

        <div className="text-center text-xs mt-4">
          <p>@2024 yourwebname. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Contacts;
