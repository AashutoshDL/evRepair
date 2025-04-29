import React from 'react';

const AboutUs = () => {
  return (
    <section id="aboutUs" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Section header with line accent */}
        <div className="flex items-center mb-16">
          <div className="h-px bg-blue-400 w-16 mr-6"></div>
          <h2 className="text-3xl md:text-4xl font-light tracking-wider">WHO WE ARE</h2>
        </div>
        
        {/* Two-column layout for larger screens */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left column - Large title */}
          <div className="w-full md:w-1/3">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-blue-400 leading-tight">
              Redefining
              <span className="block">Electric</span>
              <span className="block">Vehicle</span>
              <span className="block">Care</span>
            </h3>
          </div>
          
          {/* Right column - Content */}
          <div className="w-full md:w-2/3">
            <div className="mb-8 prose prose-lg prose-invert max-w-none font-light leading-relaxed">
              <p className="mb-6">
                At EV Repair and Institute, we exist at the intersection of innovation and expertise in the electric vehicle ecosystem. Founded on the principles of technical excellence and environmental responsibility, we're pioneering a new approach to EV maintenance and education.
              </p>
              <p className="mb-6">
                Our team brings together specialized knowledge in battery technology, electrical systems, and sustainable transportation solutions. We don't just fix electric vehicles — we enhance their performance while extending their lifespan.
              </p>
              <p>
                Whether you're seeking premium repair services or professional training to enter the growing EV industry, we're committed to advancing the future of mobility through every interaction and service we provide.
              </p>
            </div>
            
            {/* Key points with minimal styling */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <div className="flex items-center mb-2">
                  <div className="h-1 w-6 bg-blue-400 mr-3"></div>
                  <h4 className="text-xl font-light uppercase tracking-wider">Expertise</h4>
                </div>
                <p className="text-gray-400 font-light">
                  Certified specialists with advanced training in all major EV platforms and battery systems
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <div className="h-1 w-6 bg-blue-400 mr-3"></div>
                  <h4 className="text-xl font-light uppercase tracking-wider">Innovation</h4>
                </div>
                <p className="text-gray-400 font-light">
                  State-of-the-art diagnostic equipment and repair techniques for optimal vehicle performance
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <div className="h-1 w-6 bg-blue-400 mr-3"></div>
                  <h4 className="text-xl font-light uppercase tracking-wider">Education</h4>
                </div>
                <p className="text-gray-400 font-light">
                  Industry-recognized training programs preparing technicians for the future of automotive service
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <div className="h-1 w-6 bg-blue-400 mr-3"></div>
                  <h4 className="text-xl font-light uppercase tracking-wider">Sustainability</h4>
                </div>
                <p className="text-gray-400 font-light">
                  Commitment to environmentally responsible practices throughout our service and training operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;