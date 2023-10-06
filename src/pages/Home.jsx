import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedPages from "../components/AnimatedPages";

const Home = () => {
	return (
		<AnimatedPages>
			<section className=" h-screen w-screen bg-[#222222] flex justify-center items-center">
				<motion.div
				// transition={{ type: "spring", stiffness: 100 }}
				// initial={{ y: "-50vh", opacity: 0 }}
				// animate={{ y: 0, opacity: 1 }}
				>
					<button className=" font-outfit hover:-translate-y-5 hover:shadow-lg hover:shadow-[#FFB800] md:text-8xl text-4xl  font-bold text-black bg-[#FFB800] px-6 py-4 rounded-full shadow-2xl shadow-[#FFB800] transition-all">
						<Link to="/products">SHOP NOW</Link>
					</button>
				</motion.div>
			</section>
		</AnimatedPages>
	);
};

export default Home;
