
import { Link, useLocation } from "react-router-dom";
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetDescription,
	SheetHeader,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
	HomeIcon,
	ShoppingBagIcon,
	PhotoIcon,
	PhoneIcon,
	InformationCircleIcon,
} from "@heroicons/react/24/outline";

export default function Component() {
	const location = useLocation();

	const isActive = (path) => location.pathname === path;

	return (
		<header className="flex h-16 sm:h-20 items-center justify-between bg-white/10 backdrop-blur-sm border-b border-white/20 px-4 sm:px-6 md:px-8 lg:px-10 z-50 absolute top-0 left-0 w-full animate-fade-in-up">
			<Link to="/" className="flex items-center gap-2 sm:gap-4 hover:scale-105 transition-transform duration-300">
				<img src="/assets/logo.png" alt="Logo" className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 hover:rotate-12 transition-transform duration-300" />
				<span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-golden-yellow hover:text-white transition-colors duration-300">
					PAZ TILES
				</span>
			</Link>
			<nav className="hidden lg:flex gap-4 xl:gap-6 2xl:gap-8">
				<Link
					to="/"
					className={`flex items-center text-lg xl:text-xl 2xl:text-2xl font-bold px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover-lift ${
						isActive("/") 
							? "text-dark-green bg-golden-yellow/20 backdrop-blur-sm border border-golden-yellow/30" 
							: "text-golden-yellow hover:text-white hover:bg-white/10 backdrop-blur-sm"
					}`}
				>
					<HomeIcon className="h-6 w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 mr-1 xl:mr-2" />
					<span className="hidden xl:inline">Home</span>
				</Link>
				<Link
					to="/about"
					className={`flex items-center text-lg xl:text-xl 2xl:text-2xl font-bold px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover-lift ${
						isActive("/about") 
							? "text-dark-green bg-golden-yellow/20 backdrop-blur-sm border border-golden-yellow/30" 
							: "text-golden-yellow hover:text-white hover:bg-white/10 backdrop-blur-sm"
					}`}
				>
					<InformationCircleIcon className="h-6 w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 mr-1 xl:mr-2" />
					<span className="hidden xl:inline">About Us</span>
				</Link>
				<Link
					to="/products"
					className={`flex items-center text-lg xl:text-xl 2xl:text-2xl font-bold px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover-lift ${
						isActive("/products")
							? "text-dark-green bg-golden-yellow/20 backdrop-blur-sm border border-golden-yellow/30"
							: "text-golden-yellow hover:text-white hover:bg-white/10 backdrop-blur-sm"
					}`}
				>
					<ShoppingBagIcon className="h-6 w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 mr-1 xl:mr-2" />
					<span className="hidden xl:inline">Products</span>
				</Link>
				<Link
					to="/gallery"
					className={`flex items-center text-lg xl:text-xl 2xl:text-2xl font-bold px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover-lift ${
						isActive("/gallery")
							? "text-dark-green bg-golden-yellow/20 backdrop-blur-sm border border-golden-yellow/30"
							: "text-golden-yellow hover:text-white hover:bg-white/10 backdrop-blur-sm"
					}`}
				>
					<PhotoIcon className="h-6 w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 mr-1 xl:mr-2" />
					<span className="hidden xl:inline">Gallery</span>
				</Link>
				<Link
					to="/contact"
					className={`flex items-center text-lg xl:text-xl 2xl:text-2xl font-bold px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover-lift ${
						isActive("/contact")
							? "text-dark-green bg-golden-yellow/20 backdrop-blur-sm border border-golden-yellow/30"
							: "text-golden-yellow hover:text-white hover:bg-white/10 backdrop-blur-sm"
					}`}
				>
					<PhoneIcon className="h-6 w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 mr-1 xl:mr-2" />
					<span className="hidden xl:inline">Contact</span>
				</Link>
			</nav>
			<Sheet>
				<SheetTrigger asChild>
					<Button
						variant="outline"
						size="icon"
						className="lg:hidden text-golden-yellow border-golden-yellow/30 bg-white/10 backdrop-blur-sm h-10 w-10 sm:h-12 sm:w-12 hover:bg-golden-yellow/20 hover:scale-110 transition-all duration-300"
					>
						<MenuIcon className="h-5 w-5 sm:h-6 sm:w-6" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent
					side="left"
					className="bg-dark-green/95 backdrop-blur-md text-foreground m-0 w-80 sm:w-96 border-r border-white/20"
				>
					<SheetHeader className="pb-6">
						<div className="flex items-center gap-3">
							<img src="/assets/logo.png" alt="Logo" className="h-8 w-8 sm:h-10 sm:w-10 hover:rotate-12 transition-transform duration-300" />
							<span className="text-xl sm:text-2xl font-bold text-golden-yellow">PAZ TERRAZZO</span>
						</div>
						<SheetDescription />
					</SheetHeader>
					<div className="grid gap-3 p-4">
						<nav className="grid gap-3">
							<Link
								to="/"
								className={`flex items-center gap-3 rounded-lg px-4 py-3 text-lg sm:text-xl font-medium transition-all duration-300 hover:scale-105 hover-lift ${
									isActive("/")
										? "bg-golden-yellow/20 text-golden-yellow border border-golden-yellow/30"
										: "bg-white/10 text-white hover:bg-golden-yellow/20 hover:text-golden-yellow"
								}`}
							>
								<HomeIcon className="h-6 w-6 sm:h-8 sm:w-8" />
								Home
							</Link>
							<Link
								to="/about"
								className={`flex items-center gap-3 rounded-lg px-4 py-3 text-lg sm:text-xl font-medium transition-all duration-300 hover:scale-105 hover-lift ${
									isActive("/about")
										? "bg-golden-yellow/20 text-golden-yellow border border-golden-yellow/30"
										: "bg-white/10 text-white hover:bg-golden-yellow/20 hover:text-golden-yellow"
								}`}
							>
								<InformationCircleIcon className="h-6 w-6 sm:h-8 sm:w-8" />
								About Us
							</Link>
							<Link
								to="/products"
								className={`flex items-center gap-3 rounded-lg px-4 py-3 text-lg sm:text-xl font-medium transition-all duration-300 hover:scale-105 hover-lift ${
									isActive("/products")
										? "bg-golden-yellow/20 text-golden-yellow border border-golden-yellow/30"
										: "bg-white/10 text-white hover:bg-golden-yellow/20 hover:text-golden-yellow"
								}`}
							>
								<ShoppingBagIcon className="h-6 w-6 sm:h-8 sm:w-8" />
								Products
							</Link>
							<Link
								to="/gallery"
								className={`flex items-center gap-3 rounded-lg px-4 py-3 text-lg sm:text-xl font-medium transition-all duration-300 hover:scale-105 hover-lift ${
									isActive("/gallery")
										? "bg-golden-yellow/20 text-golden-yellow border border-golden-yellow/30"
										: "bg-white/10 text-white hover:bg-golden-yellow/20 hover:text-golden-yellow"
								}`}
							>
								<PhotoIcon className="h-6 w-6 sm:h-8 sm:w-8" />
								Gallery
							</Link>
							<Link
								to="/contact"
								className={`flex items-center gap-3 rounded-lg px-4 py-3 text-lg sm:text-xl font-medium transition-all duration-300 hover:scale-105 hover-lift ${
									isActive("/contact")
										? "bg-golden-yellow/20 text-golden-yellow border border-golden-yellow/30"
										: "bg-white/10 text-white hover:bg-golden-yellow/20 hover:text-golden-yellow"
								}`}
							>
								<PhoneIcon className="h-6 w-6 sm:h-8 sm:w-8" />
								Contact
							</Link>
						</nav>
					</div>
				</SheetContent>
			</Sheet>
		</header>
	);
}

function MenuIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	);
}
