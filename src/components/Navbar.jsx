import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLinks } from "../data";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className=" w-full bg-[#222222] text-white font-outfit">
			<nav className="  container flex justify-between py-3 items-center">
				<h4>Mateen</h4>

				<div
					onClick={() => setIsOpen((prev) => !prev)}
					className=" sm:hidden relative"
				>
					<MenuIcon />

					<ul
						className={`${
							isOpen ? "flex" : "hidden"
						} flex-col px-2 py-4 bg-[#FFB800] absolute text-[#222222] font-semibold rounded-lg right-1`}
					>
						{NavLinks.map((link) => (
							<Link to={link.to}>{link.title}</Link>
						))}
					</ul>
				</div>
				<ul className=" sm:flex items-center justify-center gap-x-20 hidden ">
					{NavLinks.map((link) => (
						<Link to={link.to}>{link.title}</Link>
					))}
				</ul>

				<Link
					to="/products"
					className=" text-black font-semibold bg-[#FFB800] px-2 py-1 rounded-2xl hidden sm:block"
				>
					Shop Now
				</Link>
			</nav>
		</div>
	);
};

export default Navbar;
