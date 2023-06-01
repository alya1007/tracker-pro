import { BiSearch } from "react-icons/bi";
import { buttonsListData } from "../data/buttonsListData";
import ListButton from "./ListButton";

const SearchSection = () => {
	return (
		<div className="flex items-center border-b-solid border-b-ternary border-b-2">
			<div className="flex items-center flex-1 md:px-8 md:py-3">
				<button className="mr-2 text-primary hover:text-secondary duration-200">
					<BiSearch />
				</button>
				<input
					type="text"
					placeholder="Search..."
					className="flex-grow bg-[#fff00000] focus:bg-white border-none focus:outline-none placeholder-primary text-textColor"
				/>
			</div>
			<div className="flex-1 flex border-l-solid border-l-ternary border-l-2 h-full md:px-8 md:py-3 items-center text-primary space-x-8 ">
				{buttonsListData.map((button) => (
					<ListButton key={button.id} {...button} />
				))}
			</div>
		</div>
	);
};

export default SearchSection;
