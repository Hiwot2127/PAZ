import React, { useState, useEffect } from "react";
import "../index.css"; 
import backgroundImage from "../../public/assets/ab.jpg";
import Footer from "./Footer";
import { useAnalytics } from "../hooks/useAnalytics";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { trackContactClick, trackButtonClick } = useAnalytics();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const phoneNumber = "+251911258624";
  const whatsappLink = `https://wa.me/${phoneNumber.replace('+', '')}`;
  const telegramLink = `https://t.me/${phoneNumber.replace('+', '')}`;

  const handleContactClick = (method) => {
    trackContactClick(method);
  };

  const handleButtonClick = (buttonName) => {
    trackButtonClick(buttonName, 'contact');
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed relative overflow-hidden" style={{ backgroundImage: `url(${backgroundImage})` }}>
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
      
      <div className="flex items-center justify-center min-h-screen py-20 relative z-10 pt-24 sm:pt-28 md:pt-32">
        <div className="glass p-8 md:p-12 lg:p-16 rounded-2xl max-w-4xl w-full mx-4 border border-white/20 shadow-2xl animate-fade-in-up">
          {/* Enhanced Header */}
          <div className="flex flex-col items-center text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4" style={{ fontFamily: '"Oswald", sans-serif' }}>
              PAZ TERRAZZO
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-golden-yellow mb-6" style={{ fontFamily: '"Oswald", sans-serif' }}>
              " LET'S PAVE YOUR PATH "
            </h2>
            <div className="w-24 h-1 bg-golden-yellow rounded-full"></div>
          </div>
          
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-golden-yellow text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Get In Touch
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-2xl font-semibold text-white mb-6 text-center md:text-left">Contact Information</h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-lg md:text-xl group hover-lift">
                    <div className="w-12 h-12 bg-golden-yellow/20 rounded-full flex items-center justify-center group-hover:bg-golden-yellow/40 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-golden-yellow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-medium">Email</p>
                      <a 
                        href="mailto:pazengineering1@gmail.com" 
                        className="text-golden-yellow hover:text-white transition-colors duration-300"
                        onClick={() => handleContactClick('email')}
                      >
                        pazengineering1@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-lg md:text-xl group hover-lift">
                    <div className="w-12 h-12 bg-golden-yellow/20 rounded-full flex items-center justify-center group-hover:bg-golden-yellow/40 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-golden-yellow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-medium">Phone</p>
                      <a 
                        href={`tel:${phoneNumber}`} 
                        className="text-golden-yellow hover:text-white transition-colors duration-300"
                        onClick={() => handleContactClick('phone')}
                      >
                        {phoneNumber}
                      </a>
                    </div>
                  </div>
                  
                  {/* Address */}
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-lg md:text-xl group hover-lift">
                    <div className="w-12 h-12 bg-golden-yellow/20 rounded-full flex items-center justify-center group-hover:bg-golden-yellow/40 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-golden-yellow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-medium">Address</p>
                      <p className="text-golden-yellow">KILINTO IND. ZONE</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media & Quick Contact */}
              <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-2xl font-semibold text-white mb-6 text-center md:text-left">Quick Contact</h3>
                
                <div className="space-y-4">
                  {/* WhatsApp */}
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-green-600/20 backdrop-blur-sm rounded-xl border border-green-500/30 hover:bg-green-600/40 transition-all duration-300 transform hover:scale-105 hover-lift group"
                    onClick={() => handleContactClick('whatsapp')}
                  >
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-all duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold">WhatsApp</p>
                      <p className="text-white/70 text-sm">Chat with us instantly</p>
                    </div>
                  </a>

                  {/* Telegram */}
                  <a 
                    href={telegramLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-blue-600/20 backdrop-blur-sm rounded-xl border border-blue-500/30 hover:bg-blue-600/40 transition-all duration-300 transform hover:scale-105 hover-lift group"
                    onClick={() => handleContactClick('telegram')}
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-all duration-300">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Telegram</p>
                      <p className="text-white/70 text-sm">Message us on Telegram</p>
                    </div>
                  </a>

                  {/* Call Button */}
                  <a 
                    href={`tel:${phoneNumber}`}
                    className="flex items-center gap-4 p-4 bg-golden-yellow/20 backdrop-blur-sm rounded-xl border border-golden-yellow/30 hover:bg-golden-yellow/40 transition-all duration-300 transform hover:scale-105 hover-lift group"
                    onClick={() => handleContactClick('call')}
                  >
                    <div className="w-12 h-12 bg-golden-yellow rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-dark-green">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Call Now</p>
                      <p className="text-white/70 text-sm">Direct phone call</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="glass rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-golden-yellow mb-3">Ready to Start Your Project?</h3>
                <p className="text-white/80 mb-4">Let's discuss your tile and terrazzo needs</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button 
                    onClick={() => {
                      handleButtonClick('view_products');
                      window.location.href = '/products';
                    }}
                    className="bg-golden-yellow text-dark-green px-6 py-2 rounded-lg font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 hover-lift"
                  >
                    View Products
                  </button>
                  <button 
                    onClick={() => {
                      handleButtonClick('our_projects');
                      window.location.href = '/gallery';
                    }}
                    className="border-2 border-golden-yellow text-golden-yellow px-6 py-2 rounded-lg font-semibold hover:bg-golden-yellow hover:text-dark-green transition-all duration-300 transform hover:scale-105 hover-lift"
                  >
                    Our Projects
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

export default Contact;
