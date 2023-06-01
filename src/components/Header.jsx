import { RiShareForward2Line } from "react-icons/ri";
import { headerListItemsData } from "../data/headerListItemsData";
import ListLink from "./ListLink";
const Header = () => {
	return (
		<header className="left-0 right-0 border-b-solid border-b-ternary border-b-2 md:p-8 md:pb-6">
			<div className="flex justify-between items-center">
				<h1 className=" flex-start mr-auto md:text-xl">
					Tracker Pro Workspace
				</h1>
				<div className="flex-end mr-2 mb-0.3">icons</div>
				<button className="flex-end button-transparent">
					<span>
						{" "}
						<RiShareForward2Line className="mr-1 text-primary " />{" "}
					</span>{" "}
					Share
				</button>
			</div>
			<div className="flex mt-8 space-x-7">
				{headerListItemsData.map((item) => (
					<ListLink key={item.id} {...item} />
				))}
			</div>
		</header>
	);
};

export default Header;
