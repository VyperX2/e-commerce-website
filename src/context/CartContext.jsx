import { createContext, useEffect, useState } from "react";
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
			id: 1,
		},
		{
			name: "Nike Air Max",
			price: 99,
			img: shoe2,
			id: 2,
		},
		{
			name: "Nike Waffle Debut",
			price: 249,
			img: shoe3,
			id: 3,
		},
		{
			name: "Nike Air Force 1 '07",
			price: 129,
			img: shoe4,
			id: 4,
		},
		{
			name: "Nike P-6000",
			price: 159,
			img: shoe5,
			id: 5,
		},
		{
			name: "Nike E-Series 1.0",
			price: 299,
			img: shoe6,
			id: 6,
		},
		{
			name: "Tatum 1 'Home Team' PF",
			price: 89,
			img: shoe7,
			id: 7,
		},
		{
			name: "KD16 EP",
			price: 119,
			img: shoe8,
			id: 8,
		},
	]);

	const [cartProducts, setCartProducts] = useState([]);
	function getProductData(id) {
		const productData = productsArr.find((product) => product.id === id);
		if (productData) {
			return productData;
		} else {
			return undefined;
		}
		return undefined;
	}

	function getProductQuantity(id) {
		const product = cartProducts.find((product) => product.id === id);
		if (product) {
			return product.quantity;
		} else return undefined;
	}

	function addOneToCart(id) {
		const product = getProductQuantity(id);

		if (!product) {
			setCartProducts((prev) => [...prev, { id: id, quantity: 1 }]);
		} else {
			setCartProducts((prev) =>
				prev.map((item) =>
					item.id === id ? { ...item, quantity: item.quantity + 1 } : item
				)
			);
		}
	}

	function deleteFromCart(id) {
		setCartProducts(cartProducts.filter((item) => item.id !== id));
	}

	function removeOneFromCart(id) {
		const product = getProductQuantity(id);

		if (product === 1) {
			deleteFromCart(id);
		} else {
			setCartProducts((prev) =>
				prev.map((item) =>
					item.id === id ? { ...item, quantity: item.quantity - 1 } : item
				)
			);
		}
	}

	function getTotalCost() {
		let cost = 0;
		cartProducts.forEach((item) => {
			const data = getProductData(item.id);
			cost += item.quantity * data.price;
			
		});
    return cost
	}

	return (
		<CartContext.Provider
			value={{
				productsArr,
				cartProducts,
				getProductQuantity,
				addOneToCart,
				deleteFromCart,
				removeOneFromCart,
				getProductData,
				setCartProducts,
				getTotalCost,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContext;
