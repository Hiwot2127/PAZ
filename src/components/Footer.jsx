import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "+251911258624";
  const whatsappLink = `https://wa.me/${phoneNumber.replace('+', '')}`;
  const telegramLink = `https://t.me/${phoneNumber.replace('+', '')}`;

  return (
    <footer className="relative z-10">
      {/* Main Footer Content */}
      <div className="bg-black/40 backdrop-blur-md border-t border-white/20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-golden-yellow mb-4">PAZ TERRAZZO</h3>
              <p className="text-white/80 mb-4">Engineered for Beauty</p>
              <p className="text-white/60 text-sm">
                Premium tiles and terrazzo solutions for your dream projects.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-golden-yellow mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a 
                  href="/" 
                  className="block text-white/70 hover:text-golden-yellow transition-colors duration-300 text-sm"
                >
                  Home
                </a>
                <a 
                  href="/products" 
                  className="block text-white/70 hover:text-golden-yellow transition-colors duration-300 text-sm"
                >
                  Products
                </a>
                <a 
                  href="/gallery" 
                  className="block text-white/70 hover:text-golden-yellow transition-colors duration-300 text-sm"
                >
                  Our Projects
                </a>
                <a 
                  href="/about" 
                  className="block text-white/70 hover:text-golden-yellow transition-colors duration-300 text-sm"
                >
                  About Us
                </a>
                <a 
                  href="/contact" 
                  className="block text-white/70 hover:text-golden-yellow transition-colors duration-300 text-sm"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-golden-yellow mb-4">Connect With Us</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-golden-yellow">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <span className="text-white/70 text-sm">{phoneNumber}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-golden-yellow">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
                  </svg>
                  <span className="text-white/70 text-sm">pazengineering1@gmail.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-golden-yellow">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span className="text-white/70 text-sm">KILINTO IND. ZONE</span>
                </div>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex justify-center md:justify-start gap-3 mt-4">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
                <a 
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Copyright Section */}
      <div className="bg-black/60 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-white/80 text-sm">
                © {currentYear} <span className="text-golden-yellow font-semibold">PAZ TERRAZZO</span>. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-white/60">Crafted with</span>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span className="text-white/60">in Ethiopia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
