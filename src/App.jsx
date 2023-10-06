import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

const App = () => {
	return (
		<>
			<Navbar />
			<main className=" overflow-hidden text-white">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</main>
		</>
	);
};

export default App;
