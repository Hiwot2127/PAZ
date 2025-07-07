import Product from "./products";
import Category from "./ProductCategory";
import data from "@/src/data/productData";
import { useState, useEffect } from "react";
import "../product.css"
import Footer from "./Footer";

const Products = () => {
	const [products, setProducts] = useState(data)
	const [searchTerm, setSearchTerm] = useState("")
	const [isVisible, setIsVisible] = useState(false)
	
	useEffect(() => {
		setIsVisible(true);
	}, []);

	const setFilter = filter => {
		setProducts(filter(data))
	}

	// Filter products by search term
	const filteredProducts = products.filter(product =>
		product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
		product.color.toLowerCase().includes(searchTerm.toLowerCase())
	)

	return (
		<div className="flex flex-col min-h-screen pt-24 sm:pt-28 md:pt-32" id="products">
			{/* Enhanced Header */}
			<div className="text-center py-8 sm:py-12 bg-gradient-to-r from-dark-green/20 to-golden-yellow/20 backdrop-blur-sm border-b border-white/20">
				<div className="animate-fade-in-up">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4">
						Our Products
					</h1>
					<p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto px-4">
						Discover our premium collection of tiles and terrazzo products
					</p>
				</div>
			</div>

			{/* Search Bar */}
			<div className="px-4 sm:px-6 md:px-8 lg:px-10 py-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
				<div className="max-w-md mx-auto">
					<div className="relative group">
						<input
							type="text"
							placeholder="Search products by name or color..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="w-full px-4 py-3 pl-12 glass rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-golden-yellow focus:border-transparent transition-all duration-300 group-hover:scale-105"
						/>
						<svg 
							className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-golden-yellow group-hover:scale-110 transition-transform duration-300" 
							fill="none" 
							stroke="currentColor" 
							viewBox="0 0 24 24"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</div>
				</div>
			</div>

			{/* Products Count */}
			<div className="px-4 sm:px-6 md:px-8 lg:px-10 mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
				<div className="glass rounded-lg p-4 border border-white/20 text-center">
					<p className="text-white/80 font-semibold">
						Showing <span className="text-golden-yellow font-bold">{filteredProducts.length}</span> of <span className="text-golden-yellow font-bold">{data.length}</span> products
					</p>
				</div>
			</div>

			{/* Main Content */}
			<div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-10 flex-1 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
				{/* Category Sidebar */}
				<div className="w-full lg:w-1/4 xl:w-1/5 order-2 lg:order-1">
					<div className="glass rounded-xl p-6 border border-white/20 hover:scale-105 transition-transform duration-300">
						<div className="flex items-center mb-4">
							<svg className="w-6 h-6 text-golden-yellow mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
							</svg>
							<h3 className="text-lg font-bold text-golden-yellow">Filter by Color</h3>
						</div>
						<Category data={data} setFilter={setFilter} />
					</div>
				</div>
				
				{/* Products Grid */}
				<div className="flex-1 order-1 lg:order-2">
					{filteredProducts.length > 0 ? (
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
							<Product data={filteredProducts} />
						</div>
					) : (
						<div className="text-center py-12 animate-fade-in-up">
							<div className="glass rounded-2xl p-8 border border-white/20">
								<svg className="w-16 h-16 mx-auto text-golden-yellow/60 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
								</svg>
								<h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
								<p className="text-white/60 mb-4">Try adjusting your search or filter criteria</p>
								<button 
									onClick={() => setSearchTerm("")}
									className="bg-golden-yellow text-dark-green px-4 py-2 rounded-lg font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105"
								>
									Clear Search
								</button>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Enhanced Footer */}
			<div className="text-center py-8 mt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
				<div className="glass rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto">
					<div className="flex items-center justify-center mb-4">
						<svg className="w-8 h-8 text-golden-yellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						<h3 className="text-xl font-bold text-golden-yellow">Need Help Choosing?</h3>
					</div>
					<p className="text-white/80 mb-4">
						Contact us for personalized recommendations and expert advice
					</p>
					<button 
						onClick={() => window.location.href = '/contact'}
						className="bg-golden-yellow text-dark-green px-6 py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 hover-lift"
					>
						Get Expert Advice
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Products;

