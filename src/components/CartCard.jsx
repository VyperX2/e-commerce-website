import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { motion } from "framer-motion";

const CartCard = ({ quantity, id, index }) => {
	const { getProductData, deleteFromCart, addOneToCart, removeOneFromCart } =
		useContext(CartContext);
	const { name, price, img } = getProductData(id);

	return (
		<motion.div
			initial={{ x: -50, y: -50, opacity: 0 }}
			transition={{ delay: index * 0.1 }}
			whileInView={{ x: 0, y: 0, opacity: 1 }}
			viewport={{
				once: true,
			}}
			className=" border-b-2  border-[#222222] flex sm:items-center justify-between sm:flex-row flex-col text-center text-[#222222] font-semibold  h-60 w-full "
		>
			<div className=" flex items-center sm:flex-row flex-col sm:w-[400px] ">
				<img src={img} alt="" />
				<h4>{name}</h4>
				<h4>{price}</h4>
			</div>
			<div className=" flex gap-2 items-center">
				<button onClick={() => addOneToCart(id)} className=" cartButtons">
					+
				</button>
				<button
					onClick={() => {
						deleteFromCart(id);
					}}
					className=" cartButtons"
				>
					Remove
				</button>
				<button onClick={() => removeOneFromCart(id)} className=" cartButtons">
					-
				</button>
			</div>
			<div className=" flex justify-center">
				<h4>{quantity} x </h4>
				<h4>&nbsp;${price}</h4>
			</div>
		</motion.div>
	);
};

export default CartCard;
