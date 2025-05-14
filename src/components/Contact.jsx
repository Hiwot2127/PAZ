import React from "react";
import Navbar from "./Navbar";
import "../index.css"; 
import backgroundImage from "../../public/assets/ab.jpg";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Navbar /> 
      <div className="flex items-center justify-center h-full">
        <div className="bg-black bg-opacity-50 p-80 relative">
          <div className="flex flex-col items-center p-4" style={{ position: 'absolute', left: '40%', transform: 'translateX(-50%)', top: '10rem' }}>
            <h1 className="text-4xl font-bold text-yellow-500" style={{ fontFamily: '"Oswald", sans-serif', position: 'absolute', left: '30%', top: '0.5%' }}>
              PAZ TERRAZZO
            </h1>
            <h2 className="text-xl text-yellow-400" style={{ fontFamily: '"Oswald", sans-serif', position: 'absolute', left: '31%', top: '14%' }}>
              " LET'S PAVE YOUR PATH "
            </h2>
            <div className="text-left text-yellow-500 mt-16">
              <h2 className="text-2xl font-bold mb-4">Reach Us</h2>
              <div className="flex items-center text-xl mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 mr-2 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3" />
                </svg>
                <span>Email: pazengineering1@gmail.com</span>
              </div>
              <div className="flex items-center text-xl mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 mr-2 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span>Phone:</span>
                <span className="ml-2">+251911258624</span>
              </div>
              <div className="flex items-center text-xl mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 mr-2 text-yellow-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span>Address: KILINTO IND.ZONE</span>
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
