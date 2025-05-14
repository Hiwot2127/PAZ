
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
		<header className="flex h-20 items-center justify-between bg-transparent px-8 sm:px-10 z-50 absolute top-0 left-0 w-full">
			<Link to="/" className="flex items-center gap-4">
				<img src="/assets/logo.png" alt="Logo" className="h-16 w-16" />
				<span className="text-5xl font-bold text-golden-yellow">
					PAZ TILES
				</span>
			</Link>
			<nav className="hidden gap-8 sm:flex">
				<Link
					to="/"
					className={`flex text-2xl font-bold ${isActive("/") ? "text-dark-green" : "text-golden-yellow"
						} hover:scale-90 hover:text-white-ish transition-transform`}
				>
					<HomeIcon className="h-8 w-8 mr-2" />
					Home
				</Link>
				<Link
					to="/about"
					className={`flex text-2xl font-bold ${isActive("/about") ? "text-dark-green" : "text-golden-yellow"
						} hover:scale-90 hover:text-white-ish transition-transform`}
				>
					<InformationCircleIcon className="h-8 w-8 mr-2" />
					About Us
				</Link>
				<Link
					to="/products"
					className={`flex text-2xl font-bold ${isActive("/products")
						? "text-dark-green"
						: "text-golden-yellow"
						} hover:scale-90 hover:text-white-ish transition-transform`}
				>
					<ShoppingBagIcon className="h-8 w-8 mr-2" />
					Products
				</Link>
				<Link
					to="/gallery"
					className={`flex text-2xl font-bold ${isActive("/gallery")
						? "text-dark-green"
						: "text-golden-yellow"
						} hover:scale-90 hover:text-white-ish transition-transform`}
				>
					<PhotoIcon className="h-8 w-8 mr-2" />
					Gallery
				</Link>
				<Link
					to="/contact"
					className={`flex text-2xl font-bold ${isActive("/contact")
						? "text-dark-green"
						: "text-golden-yellow"
						} hover:scale-90 hover:text-white-ish transition-transform`}
				>
					<PhoneIcon className="h-8 w-8 mr-2" />
					Contact
				</Link>
			</nav >
			<Sheet>
				<SheetTrigger asChild>
					<Button
						variant="outline"
						size="icon"
						className="sm:hidden text-foreground"
					>
						<MenuIcon className="h-6 w-6" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent
					side="left"
					className="bg-dark-green/60 text-foreground m-0"
				>
					<SheetHeader>
						{/* <SheetTitle className="flex gap-5 h-4 pb-10 text-golden-yellow">
							<img src="/assets/logo.png" alt="Logo" className="h-10" />
							PAZ TERRAZZO
						</SheetTitle> */}
						<SheetDescription />
					</SheetHeader>
					<div className="grid gap-4 p-4">
						<nav className="grid gap-2">
							<Link
								to="/"
								className="flex items-center gap-2 rounded-md px-3 py-2 bg-primary text-xl font-medium hover:bg-dark-green/70 hover:text-primary text-accent"
							>
								<HomeIcon className="h-8 w-8 mr-2" />
								Home
							</Link>
							<Link
								to="/about"
								className="flex items-center gap-2 rounded-md px-3 py-2 bg-primary text-xl font-medium hover:bg-dark-green/70 hover:text-primary text-accent"
							>
								<InformationCircleIcon className="h-8 w-8 mr-2" />
								About Us
							</Link>
							<Link
								to="/products"
								className="flex items-center gap-2 rounded-md px-3 py-2 bg-primary text-xl font-medium hover:bg-dark-green/70 hover:text-primary text-accent"
							>
								<ShoppingBagIcon className="h-8 w-8 mr-2" />
								Products
							</Link>
							<Link
								to="/gallery"
								className="flex items-center gap-2 rounded-md px-3 py-2 bg-primary text-xl font-medium hover:bg-dark-green/70 hover:text-primary text-accent"
							>
								<PhotoIcon className="h-8 w-8 mr-2" />
								Gallery
							</Link>
							<Link
								to="/contact"
								className="flex items-center gap-2 rounded-md px-3 py-2 bg-primary text-xl font-medium hover:bg-dark-green/70 hover:text-primary text-accent"
							>
								<PhoneIcon className="h-8 w-8 mr-2" />
								Contact
							</Link>
						</nav>
					</div>
				</SheetContent>
			</Sheet>
		</header >
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
