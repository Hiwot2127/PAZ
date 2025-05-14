import Product from "./products";
import Category from "./ProductCategory";
import data from "@/src/data/productData";
import { useState } from "react";
import "../product.css"
const Products = () => {
	const [products, setProducts] = useState(data)
	const setFilter = filter => {
		setProducts(filter(data))
	}
	return (
		<div className="flex flex-col" id="products" >
			<h1 className="text-3xl font-bold text-center mt-20 text-primary">Products</h1>
			<div className="flex flex-row mt-10 gap-10">
				<div className="w-1/6 ml-4"> {/* Adjust the width as needed */}
					<Category data={data} setFilter={setFilter} />
				</div>
				<div className="flex-1 grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1  gap-4 mr-5">
					<Product data={products} />
				</div>
			</div>
		</div>);
};

export default Products;

