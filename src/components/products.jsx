import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"

const Product = ({ data }) => {
	return (
		data.map(item => (
			<Card 
				key={item.id} 
				className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-golden-yellow/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover-lift group overflow-hidden animate-fade-in-up"
			>
				<CardHeader className="text-primary p-4 pb-2">
					<CardTitle className="text-lg sm:text-xl font-bold group-hover:text-golden-yellow transition-colors duration-300">
						{item.title}
					</CardTitle>
				</CardHeader>
				
				<CardContent className="p-4 pt-2">
					<div className="relative overflow-hidden rounded-lg group">
						<div className="absolute inset-0 bg-golden-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
						<img 
							src={item.img} 
							className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-500 rounded-lg" 
							alt={item.title}
							loading="lazy"
						/>
						<div className="absolute inset-0 border border-golden-yellow/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
					</div>
				</CardContent>
				
				<CardFooter className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 pt-2">
					<CardDescription className="text-white/80 text-sm flex-1 group-hover:text-white/90 transition-colors duration-300">
						{item.description || "Premium quality tile with excellent durability"}
					</CardDescription>
					<Badge 
						className="px-3 py-1 font-semibold text-sm border border-white/20 group-hover:scale-110 transition-transform duration-300" 
						style={{ backgroundColor: item.hex, color: item.hexBack }}
					>
						{item.color}
					</Badge>
				</CardFooter>
			</Card>
		))
	);
};

export default Product;

