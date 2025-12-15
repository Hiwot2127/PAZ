import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge"
import {
	ToggleGroup,
	ToggleGroupItem,
} from "@/components/ui/toggle-group"

const Category = ({ data, setFilter }) => {
	const [selectedColor, setSelectedColor] = useState([]);
	const [colorSet, setColorSet] = useState(() => new Set([]))

	// Helper to convert hex color to rgba with configurable alpha for softer backgrounds
	const hexToRgba = (hex, alpha = 0.25) => {
		if (!hex) return `rgba(0,0,0,${alpha})`;
		let h = hex.replace('#', '');
		if (h.length === 3) {
			h = h.split('').map((c) => c + c).join('');
		}
		const r = parseInt(h.substring(0, 2), 16);
		const g = parseInt(h.substring(2, 4), 16);
		const b = parseInt(h.substring(4, 6), 16);
		return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	};

	const pipe = (...fns) => (initialValue) => {
		return fns.reduce((acc, fn) => fn(acc), initialValue);
	};
	const filterColors = (colors) => (data) =>
		data.filter((item) => colors.includes(item.color) || colors.length == 0);

	useEffect(() => {
		const combinedFilter = pipe(
			filterColors(selectedColor)
		);
		setFilter(combinedFilter);
	}, [selectedColor]);

	useEffect(() => {
		const newColorSet = new Set(data.map(item => item.color));
		setColorSet(newColorSet);
	}, [data]);

	const handleColorToggle = (color) => {
		setSelectedColor(prev => 
			prev.includes(color) 
				? prev.filter(c => c !== color)
				: [...prev, color]
		);
	};

	const clearFilters = () => {
		setSelectedColor([]);
	};

	return (
		<div className="color-category">
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-lg font-bold text-golden-yellow">Colors</h2>
				{selectedColor.length > 0 && (
					<button 
						onClick={clearFilters}
						className="text-sm text-golden-yellow hover:text-white transition-colors duration-300 underline hover:no-underline"
					>
						Clear All
					</button>
				)}
			</div>
			
			{selectedColor.length > 0 && (
				<div className="mb-4 p-3 glass rounded-lg border border-white/20 animate-fade-in-up">
					<p className="text-white/80 text-sm mb-2">Selected colors:</p>
					<div className="flex flex-wrap gap-2">
						{selectedColor.map(color => {
							const colorItem = data.find(item => item.color === color);
							return (
								<Badge 
									key={color}
									className="text-xs px-2 py-1 cursor-pointer hover:scale-110 transition-all duration-300"
									style={{
										backgroundColor: hexToRgba(colorItem?.hex, 0.25),
										color: colorItem?.hexBack,
										border: `1px solid ${colorItem?.hex}`,
										backdropFilter: 'blur(2px)'
									}}
									onClick={() => handleColorToggle(color)}
								>
									{color} ×
								</Badge>
							);
						})}
					</div>
				</div>
			)}

			<ToggleGroup 
				type="multiple" 
				value={selectedColor}
				onValueChange={setSelectedColor}
				className="grid grid-cols-2 gap-2"
			>
				{Array.from(colorSet).map(color => {
					const filterdItem = data.find(item => item.color == color)
					if (!filterdItem) return null
					return (
						<ToggleGroupItem 
							key={filterdItem.id} 
							value={filterdItem.color} 
							aria-label={filterdItem.color}
							className="p-2 hover:scale-105 transition-transform duration-300"
						>
							<Badge 
								className="w-full text-center py-2 font-medium border border-white/20 hover:border-golden-yellow/40 transition-all duration-300 hover:scale-105" 
								style={{
									backgroundColor: hexToRgba(filterdItem.hex, 0.25),
									color: filterdItem.hexBack,
									borderColor: filterdItem.hex,
									backdropFilter: 'blur(2px)'
								}}
							>
								{filterdItem.color}
							</Badge>
						</ToggleGroupItem>
					)
				})}
			</ToggleGroup>

			{/* Color count info */}
			<div className="mt-4 p-3 glass rounded-lg border border-white/20">
				<p className="text-white/80 text-sm text-center">
					{selectedColor.length === 0 
						? `All ${data.length} products available`
						: `${selectedColor.length} color${selectedColor.length > 1 ? 's' : ''} selected`
					}
				</p>
			</div>
		</div>
	);
};

export default Category;
