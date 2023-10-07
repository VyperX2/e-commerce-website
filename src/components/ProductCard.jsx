import { useContext, useEffect } from "react";
import CartContext from "../context/CartContext";
import { motion } from "framer-motion";

const ProductCard = ({ img, name, price, id, index }) => {
	const {
		getProductQuantity,
		addOneToCart,
		deleteFromCart,
		removeOneFromCart,
		getProductData,
	} = useContext(CartContext);
	const currentProductQuantity = getProductQuantity(id);

	return (
		<motion.div
			initial={{ x: -50, y: -50, opacity: 0 }}
			// animate={{ x: 0, y: 0, opacity: 1 }}
			transition={{ delay: index * 0.1 }}
			whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{
        once : true
      }}
			className=" bg-inherit flex flex-col   pb-4 rounded-2xl shadows mt-6  "
		>
			<img src={img} alt="shoe" className=" h-[200px] w-[250px] object-cover" />
			<div className="flex justify-around  ">
				<h4 className=" text-[#222222] font-semibold text-sm">{name}</h4>
				<h4 className=" text-[#222222] font-semibold text-sm">${price}</h4>
			</div>
			<h4 className=" text-gray-800 font-semibold text-sm text-center -mb-2">
				{" "}
				{currentProductQuantity}
			</h4>
			<div className=" flex justify-center mt-4">
				{currentProductQuantity ? (
					<div className=" flex gap-4 ">
						<button className=" cartButtons" onClick={() => addOneToCart(id)}>
							+
						</button>
						<button className=" cartButtons" onClick={() => deleteFromCart(id)}>
							Delete
						</button>
						<button
							className=" cartButtons"
							onClick={() => removeOneFromCart(id)}
						>
							-
						</button>
					</div>
				) : (
					<button
						onClick={() => {
							addOneToCart(id);
						}}
						className="cartButtons"
					>
						Add To Cart
					</button>
				)}
			</div>
		</motion.div>
	);
};

export default ProductCard;
