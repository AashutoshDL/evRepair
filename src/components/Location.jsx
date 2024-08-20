import React from 'react';

const Location = () => {
  // Google Maps Embed URL
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.364819975281!2d85.35071787470058!3d27.675117176201038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f65ad3606b%3A0xbf699b24ef1e3d0c!2sJadibuti%20Bus%20Stop!5e0!3m2!1sen!2snp!4v1724138719181!5m2!1sen!2snp";

  // Google Maps URL for opening in a new tab
  const googleMapsUrl = "https://www.google.com/maps?q=Jadibuti+Bus+Stop,+Hanumante+River";

  return (
    <div className="flex flex-col items-center p-10" id='location'>
          <div className="flex justify-center pb-10">
    <h1 className="text-5xl font-Kanit">Where are we?</h1>
    </div>
      <div className="flex items-start gap-10 max-w-screen-lg mx-auto">
        <div className="flex-shrink-0">
          <iframe
            src={mapSrc}
            width="600"
            height="450"
            className="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
        
        <div className="max-w-md flex flex-col justify-center">
          <p className="text-xl text-black font-Kanit mb-4 leading-relaxed">
            Our showroom is ideally situated on the riverbank of the Hanumante River at Jadibuti Chowk. With its prime location, it’s easily visible from the main road, ensuring you can find us without any trouble.
          </p>
          <p className="text-xl text-black font-Kanit mb-6 leading-relaxed">
            For those traveling by vehicle, our showroom is approximately 10 minutes from [a nearby landmark or major road]. If you prefer walking, it’s about a [Y] minute stroll from [a nearby landmark or public transport station].
          </p>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-blue-800 hover:text-black"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default Location;
