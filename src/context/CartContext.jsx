import { createContext, useState } from "react";
import shoe1 from "../assets/shoe1.png";
import shoe2 from "../assets/shoe2.png";
import shoe3 from "../assets/shoe3.png";
import shoe4 from "../assets/shoe4.png";
import shoe5 from "../assets/shoe5.png";
import shoe6 from "../assets/shoe6.png";
import shoe7 from "../assets/shoe7.png";
import shoe8 from "../assets/shoe8.png";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
	const [productsArr, setProductsArr] = useState([
		{
			name: "Nike Air Force 1 '07",
			price: 199,
			img: shoe1,
		},
		{
			name: "Nike Air Max",
			price: 99,
			img: shoe2,
		},
		{
			name: "Nike Waffle Debut",
			price: 249,
			img: shoe3,
		},
		{
			name: "Nike Air Force 1 '07",
			price: 129,
			img: shoe4,
		},
		{
			name: "Nike P-6000",
			price: 159,
			img: shoe5,
		},
		{
			name: "Nike E-Series 1.0",
			price: 299,
			img: shoe6,
		},
		{
			name: "Tatum 1 'Home Team' PF",
			price: 89,
			img: shoe7,
		},
		{
			name: "KD16 EP",
			price: 119,
			img: shoe8,
		},
	]);

	return (
		<CartContext.Provider value={{ productsArr }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
