import React, { useState, useEffect } from 'react';
import { projectData } from '../data/projectData';
import Footer from "./Footer";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleImageClick = (img) => {
        setSelectedImage(img);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div 
                className="bg-cover bg-center bg-fixed w-full flex-1 flex justify-center items-center py-16 sm:py-20 relative overflow-hidden" 
                style={{ backgroundImage: 'url(/assets/istockphoto-1267663850-612x612.jpg)' }}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                {/* Particle Effects */}
                <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 12 }).map((_, i) => (
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
                <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 pt-24 sm:pt-28 md:pt-32">
                    {/* Enhanced Header */}
                    <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4">
                            Our Projects
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
                            Explore our stunning collection of completed projects and installations
                        </p>
                    </div>
                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        {projectData.map(({ id, img }) => (
                            <div 
                                key={id} 
                                className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover-lift animate-fade-in-up"
                                style={{ animationDelay: `${0.4 + id * 0.1}s` }}
                                onClick={() => handleImageClick(img)}
                            >
                                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                    {/* Image */}
                                    <img 
                                        src={img} 
                                        alt={`Gallery Image ${id}`}
                                        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Border Effect */}
                                    <div className="absolute inset-0 border-2 border-golden-yellow/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Call to Action */}
                    <div className="text-center mt-16 sm:mt-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <div className="glass rounded-2xl p-8 sm:p-12 border border-white/20 max-w-2xl mx-auto">
                            <h3 className="text-2xl sm:text-3xl font-bold text-golden-yellow mb-4">Ready to Start Your Project?</h3>
                            <p className="text-white/80 text-lg mb-6">
                                Let us bring your vision to life with our premium tiles and terrazzo solutions.
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
                {/* Enhanced Modal for Selected Image */}
                {selectedImage && (
                    <div 
                        className="fixed inset-0 flex items-center justify-center bg-black/95 backdrop-blur-md z-50 p-4 animate-fade-in-scale" 
                        onClick={handleClose}
                    >
                        <div className="relative max-w-full max-h-full">
                            <button 
                                onClick={handleClose}
                                className="absolute -top-12 right-0 text-white text-3xl sm:text-4xl hover:text-golden-yellow transition-colors duration-300 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-golden-yellow/20"
                            >
                                ×
                            </button>
                            <img 
                                src={selectedImage} 
                                alt="Selected" 
                                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl" 
                            />
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Gallery;