const ProductCard = ({ img, name, price }) => {
	return (
		<div className=" bg-inherit flex flex-col  mt-6 pb-4 rounded-2xl shadows   ">
			<img src={img} alt="shoe" className=" h-[200px] w-[250px] object-cover" />
			<div className="flex justify-around  ">
				<h4 className=" text-[#222222] font-semibold text-sm">{name}</h4>
				<h4 className=" text-[#222222] font-semibold text-sm">${price}</h4>
			</div>
		</div>
	);
};

export default ProductCard;
