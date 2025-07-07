
import ImageSlider from "./ImageSlider";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";

const Homepage = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isVisible, setIsVisible] = useState(true);
	const [isLoaded, setIsLoaded] = useState(false);

	// Auto-hide welcome message after 5 seconds
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 5000);

		return () => clearTimeout(timer);
	}, []);

	// Set loaded state after component mounts
	useEffect(() => {
		setIsLoaded(true);
	}, []);

	// Handle scroll down functionality
	const handleScrollDown = () => {
		// Since this is a single-page app with separate routes, navigate to products page
		window.location.href = '/products';
	};

	// Handle contact us functionality
	const handleContactUs = () => {
		// Navigate to contact page
		window.location.href = '/contact';
	};

	// Handle get quote functionality
	const handleGetQuote = () => {
		// Navigate to products page or open quote form
		window.location.href = '/products';
	};

	// Handle explore products functionality
	const handleExploreProducts = () => {
		window.location.href = '/products';
	};

	// Handle learn more functionality
	const handleLearnMore = () => {
		window.location.href = '/about';
	};

	// Handle explore projects functionality
	const handleExploreProjects = () => {
		window.location.href = '/gallery';
	};

	return (
		<div className="relative w-full h-screen overflow-hidden">
			<ImageSlider onSlideChange={setCurrentSlide} />
			<Sidebar />
			
			{/* Welcome Message Overlay */}
			{isVisible && (
				<div className="absolute inset-0 flex items-center justify-center z-20 bg-black/30 backdrop-blur-sm transition-opacity duration-1000">
					<div className="text-center text-white px-6 py-8 glass rounded-2xl max-w-2xl mx-4 animate-fade-in-scale relative">
						{/* Cancel Button */}
						<button 
							onClick={() => setIsVisible(false)}
							className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
						>
							<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
						
						<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gradient animate-fade-in-up">
							Welcome to PAZ
						</h1>
						<p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
							Discover the finest tiles and terrazzo products
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
							<button 
								onClick={handleExploreProducts}
								className="bg-golden-yellow text-dark-green px-6 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 hover-lift animate-pulse-glow"
							>
								Explore Products
							</button>
							<button 
								onClick={handleExploreProjects}
								className="bg-dark-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-dark-green transition-all duration-300 transform hover:scale-105 hover-lift animate-pulse-glow"
							>
								Explore Projects
							</button>
							<button 
								onClick={handleLearnMore}
								className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-dark-green transition-all duration-300 transform hover:scale-105 hover-lift"
							>
								Learn More
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Floating Action Buttons */}
			<div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
				<button 
					onClick={handleGetQuote}
					className="bg-golden-yellow/90 backdrop-blur-sm text-dark-green px-4 py-2 rounded-full font-semibold hover:bg-golden-yellow transition-all duration-300 transform hover:scale-110 shadow-lg hover-lift animate-float"
				>
					Get Quote
				</button>
				<button 
					onClick={handleContactUs}
					className="bg-dark-green/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold hover:bg-dark-green transition-all duration-300 transform hover:scale-110 shadow-lg hover-lift animate-float" 
					style={{ animationDelay: '0.3s' }}
				>
					Contact Us
				</button>
			</div>

			{/* Scroll Indicator */}
			<div 
				onClick={handleScrollDown}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce cursor-pointer"
			>
				<div className="flex flex-col items-center text-white/70 hover:text-golden-yellow transition-colors duration-300">
					<span className="text-sm mb-2">Scroll Down</span>
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</div>
			</div>

			{/* Slide Indicator */}
			<div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-10 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
				<div className="flex flex-col gap-2">
					{[0, 1, 2].map((index) => (
						<button
							key={index}
							className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
								currentSlide === index 
									? 'bg-golden-yellow scale-125 animate-pulse-glow' 
									: 'bg-white/50 hover:bg-white/80'
							}`}
						/>
					))}
				</div>
			</div>

			{/* Floating Stats */}
			<div className="absolute top-1/2 left-8 transform -translate-y-1/2 z-10 hidden lg:block animate-fade-in-up" style={{ animationDelay: '1s' }}>
				<div className="glass rounded-lg p-4 animate-float">
					<div className="text-center text-white">
						<div className="text-2xl font-bold text-golden-yellow">500+</div>
						<div className="text-sm">Happy Clients</div>
					</div>
					<div className="text-center text-white mt-4">
						<div className="text-2xl font-bold text-golden-yellow">1000+</div>
						<div className="text-sm">Projects Completed</div>
					</div>
				</div>
			</div>

			{/* Quick Links */}
			<div className="absolute top-1/4 left-8 z-10 hidden xl:block animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
				<div className="glass rounded-lg p-3">
					<div className="flex flex-col gap-2">
						<a href="/products" className="text-white/80 hover:text-golden-yellow transition-all duration-300 text-sm hover:scale-105 transform">
							Products
						</a>
						<a href="/gallery" className="text-white/80 hover:text-golden-yellow transition-all duration-300 text-sm hover:scale-105 transform">
							Gallery
						</a>
						<a href="/about" className="text-white/80 hover:text-golden-yellow transition-all duration-300 text-sm hover:scale-105 transform">
							About
						</a>
						<a href="/contact" className="text-white/80 hover:text-golden-yellow transition-all duration-300 text-sm hover:scale-105 transform">
							Contact
						</a>
					</div>
				</div>
			</div>

			{/* Loading Overlay */}
			{!isLoaded && (
				<div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
					<div className="text-center text-white">
						<div className="w-16 h-16 border-4 border-golden-yellow border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
						<p className="text-lg">Loading...</p>
					</div>
				</div>
			)}

			{/* Particle Effect Background */}
			<div className="absolute inset-0 pointer-events-none">
				{Array.from({ length: 20 }).map((_, i) => (
					<div
						key={i}
						className="absolute w-1 h-1 bg-golden-yellow/30 rounded-full animate-float"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 3}s`,
							animationDuration: `${3 + Math.random() * 2}s`
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default Homepage;
