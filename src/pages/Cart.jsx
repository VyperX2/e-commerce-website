import { useContext } from "react";
import AnimatedPages from "../components/AnimatedPages";
import CartContext from "../context/CartContext";
import CartCard from "../components/CartCard";
const Cart = () => {
	const { cartProducts, getTotalCost } = useContext(CartContext);
	const totalCost = getTotalCost();

	return (
		<AnimatedPages>
			<section className=" bg-[#FFB800] pt-6 pb-6 px-6 font-outfit">
				<div className=" min-h-[88vh] container pt-6 shadows rounded-2xl pb-8">
					<h4 className=" md:text-6xl text-4xl text-center text-[#222222] font-bold ">
						Your Items
					</h4>

					<div className=" flex flex-col">
						{cartProducts?.map((product, index) => (
							<CartCard
								key={index}
								index={index}
								id={product.id}
								quantity={product.quantity}
							/>
						))}
					</div>

					<h4 className=" text-center text-4xl mt-6 font-bold text-[#222222]">
						Total : ${totalCost}
					</h4>
          <button className=" cartButtons block mx-auto mt-4">Purchase Items!</button>
				</div>
			</section>
		</AnimatedPages>
	);
};

export default Cart;
