import { useState, useEffect } from "react";
import Footer from "./Footer";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <div className="relative bg-cover bg-center bg-fixed min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundImage: "url('/assets/rainer.jpg.webp')" }}>
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          
          {/* Particle Effects */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-golden-yellow/40 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          <div className="container mx-auto pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8 relative z-10">
            {/* Header Section */}
            <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4 animate-fade-in-up">
                PAZ Tiles and Terrazzo
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Revolutionizing the Ethiopian tiles and terrazzo industry with Italian craftsmanship
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
              {/* Image Section */}
              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-golden-yellow/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <img
                    src="/assets/removedabt.png"
                    alt="Terrazzo"
                    className="relative w-full h-auto rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover-lift"
                  />
                  <div className="absolute inset-0 rounded-2xl border border-golden-yellow/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-6 sm:space-y-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                {/* Our Story */}
                <div className="glass rounded-2xl p-6 sm:p-8 transform transition-all duration-500 hover:scale-105 hover-lift border border-white/20">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-golden-yellow/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-golden-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-golden-yellow">Our Story</h2>
                  </div>
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                    Paz Tiles and Terrazzo is revolutionizing the Ethiopian tiles and terrazzo industry. We offer the finest affordable terrazzo with unmatched Italian quality, known for its exceptional durability and timeless beauty. Whether it&apos;s for homes, commercial buildings or large-scale infrastructure projects, we deliver a wide range of tile and terrazzo products designed to meet every need.
                  </p>
                </div>

                {/* Our Mission */}
                <div className="glass rounded-2xl p-6 sm:p-8 transform transition-all duration-500 hover:scale-105 hover-lift border border-white/20">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-golden-yellow/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-golden-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-golden-yellow">Our Mission</h2>
                  </div>
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                    To provide high-quality, durable, and aesthetically pleasing tiles and terrazzo products that meet the diverse needs of our customers, while maintaining the highest standards of Italian craftsmanship and innovation.
                  </p>
                </div>

                {/* Why Choose Us */}
                <div className="glass rounded-2xl p-6 sm:p-8 transform transition-all duration-500 hover:scale-105 hover-lift border border-white/20">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-12 h-12 bg-golden-yellow/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-6 h-6 text-golden-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-golden-yellow">Why Choose Us</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Italian Craftsmanship */}
                    <div className="flex flex-col items-center text-center group">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-golden-yellow/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="/assets/concept.png"
                          alt="Italian Craftsmanship"
                          className="w-10 h-10 sm:w-12 sm:h-12"
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-3 text-golden-yellow group-hover:text-white transition-colors duration-300">Italian Craftsmanship</h3>
                      <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                        Crafted with the finest Italian techniques, ensuring unparalleled quality and beauty.
                      </p>
                    </div>

                    {/* Affordable Prices */}
                    <div className="flex flex-col items-center text-center group">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-golden-yellow/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="/assets/affordable.png"
                          alt="Affordable Prices"
                          className="w-10 h-10 sm:w-12 sm:h-12"
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-3 text-golden-yellow group-hover:text-white transition-colors duration-300">Affordable Prices</h3>
                      <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                        Competitive pricing without compromising on quality or craftsmanship.
                      </p>
                    </div>

                    {/* Custom Designs */}
                    <div className="flex flex-col items-center text-center group">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-golden-yellow/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <img
                          src="/assets/construction.png"
                          alt="Custom Designs"
                          className="w-10 h-10 sm:w-12 sm:h-12"
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-3 text-golden-yellow group-hover:text-white transition-colors duration-300">Custom Designs</h3>
                      <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                        Custom design options to meet the unique needs of each project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-16 sm:mt-20 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                <div className="glass rounded-xl p-6 text-center border border-white/20 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl font-bold text-golden-yellow mb-2">500+</div>
                  <div className="text-white/80 text-sm sm:text-base">Happy Clients</div>
                </div>
                <div className="glass rounded-xl p-6 text-center border border-white/20 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl font-bold text-golden-yellow mb-2">1000+</div>
                  <div className="text-white/80 text-sm sm:text-base">Projects Completed</div>
                </div>
                <div className="glass rounded-xl p-6 text-center border border-white/20 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl font-bold text-golden-yellow mb-2">50+</div>
                  <div className="text-white/80 text-sm sm:text-base">Product Varieties</div>
                </div>
                <div className="glass rounded-xl p-6 text-center border border-white/20 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl font-bold text-golden-yellow mb-2">10+</div>
                  <div className="text-white/80 text-sm sm:text-base">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 sm:mt-20 text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="glass rounded-2xl p-8 sm:p-12 border border-white/20">
                <h3 className="text-2xl sm:text-3xl font-bold text-golden-yellow mb-4">Ready to Transform Your Space?</h3>
                <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                  Discover our premium collection of tiles and terrazzo products that combine Italian craftsmanship with Ethiopian innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => window.location.href = '/products'}
                    className="bg-golden-yellow text-dark-green px-8 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 hover-lift"
                  >
                    Explore Products
                  </button>
                  <button 
                    onClick={() => window.location.href = '/contact'}
                    className="border-2 border-golden-yellow text-golden-yellow px-8 py-3 rounded-lg font-semibold hover:bg-golden-yellow hover:text-dark-green transition-all duration-300 transform hover:scale-105 hover-lift"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;