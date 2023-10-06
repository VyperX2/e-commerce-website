import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className=" w-full bg-[#222222] text-white font-outfit">
			<nav className="  container flex justify-between py-3">
				<h4>Mateen</h4>

				<ul className=" flex items-center justify-center gap-x-20">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>About</li>
					<li>
						<Link to="/cart">Cart</Link>
					</li>
				</ul>

				<Link
					to="/products"
					className=" text-black font-semibold bg-[#FFB800] px-2 py-1 rounded-2xl"
				>
					Shop Now
				</Link>
			</nav>
		</div>
	);
};

export default Navbar;
