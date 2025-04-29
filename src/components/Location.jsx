import React from 'react';

const Location = () => {
  // Google Maps Embed URL
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.780722748411!2d85.27856847470137!3d27.69317137619064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb187a97f390b1%3A0xec3f47092df0d4ca!2sKalanki%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1724212711831!5m2!1sen!2snp";

  const googleMapsUrl = "https://www.google.com/maps?q=Kalanki,+Kathmandu+44600";
  
  return (
    <section id="location" className="bg-black text-white py-24">
      <div className="container mx-auto px-6">
        {/* Section header with line accent */}
        <div className="flex items-center mb-16">
          <div className="h-px bg-blue-400 w-16 mr-6"></div>
          <h2 className="text-3xl md:text-4xl font-light tracking-wider">FIND US</h2>
        </div>
        
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Map */}
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg">
            <iframe
                src={mapSrc}
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-400 opacity-20 rounded-lg"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400 opacity-20 rounded-lg"></div>
          </div>
          
          {/* Right column - Location info */}
          <div className="lg:pl-8">
            <h3 className="text-3xl font-light mb-8 tracking-wide text-blue-400">Our Location</h3>
            
            <div className="space-y-8 font-light">
              <div>
                <h4 className="text-sm uppercase tracking-wider mb-2">Address</h4>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Kalanki Chowk<br />
                  Kathmandu 44600, Nepal
                </p>
              </div>
              
              <div>
                <h4 className="text-sm uppercase tracking-wider mb-2">Getting Here</h4>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Our institute is ideally situated on Kalanki Chowk with high visibility from the main road. For those traveling by vehicle, we're approximately 10 minutes from Ring Road Junction.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Public transport options are readily available, with multiple bus routes stopping directly at Kalanki Chowk.
                </p>
              </div>
              
              <div>
                <h4 className="text-sm uppercase tracking-wider mb-2">Landmark</h4>
                <p className="text-gray-400 leading-relaxed">
                  Look for our distinctive blue EV Repair signage next to the main intersection. We're located on the corner building with charging stations visible from the street.
                </p>
              </div>
              
              <div className="pt-4">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border-b border-blue-400 text-blue-400 hover:text-white transition-colors duration-300 group"
                >
                  <span className="mr-2">VIEW ON GOOGLE MAPS</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;