import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge"
import {
	ToggleGroup,
	ToggleGroupItem,
} from "@/components/ui/toggle-group"

const Category = ({ data, setFilter }) => {
	const [selectedColor, setSelectedColor] = useState([]);
	const [colorSet, setColorSet] = useState(() => new Set([]))

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



	return (
		<>
			<div className="color-category mt-5">
				<h1 className="mb-3 text-2xl text-black font-bold bg-white text-center bg-opacity-50">Colors</h1>
				<ToggleGroup type="multiple" defaultValue={selectedColor} onValueChange={x => setSelectedColor(x)} className="flex flex-col items-start">
					{
						Array.from(colorSet).map(color => {
							const filterdItem = data.find(item => item.color == color)
							if (!filterdItem) return null
							return (
								<div key={filterdItem.id} className="flex ">
									<ToggleGroupItem value={filterdItem.color} aria-label={filterdItem.color}>
										<Badge className="w-fit" style={{ backgroundColor: filterdItem.hex, color: filterdItem.hexBack }}>{filterdItem.color}</Badge>
									</ToggleGroupItem>
								</div>
							)

						})
					}
				</ToggleGroup >
			</div >
		</>
	);
};

export default Category;
