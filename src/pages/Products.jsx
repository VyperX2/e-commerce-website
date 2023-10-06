import React, { useContext } from "react";
import AnimatedPages from "../components/AnimatedPages";
import ProductCard from "../components/ProductCard";
import CartContext from "../context/CartContext";
const Products = () => {
	const { productsArr } = useContext(CartContext);

	return (
		<AnimatedPages>
			<div className=" bg-[#FFB800] pb-8">
				<section className=" w-screen min-h-screen  font-outfit">
					<div className=" container w-full h-full flex flex-col pt-12 items-center">
						<h1 className=" md:text-6xl text-4xl font-bold text-[#222222]">ALL PRODUCTS</h1>
						<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-12">
							{productsArr.map((product, index) => (
								<ProductCard
									key={index}
									name={product.name}
									img={product.img}
									price={product.price}
								/>
							))}
						</div>
					</div>
				</section>
			</div>
		</AnimatedPages>
	);
};

export default Products;
