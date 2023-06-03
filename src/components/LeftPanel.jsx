import PropTypes from "prop-types";
import { logoGold } from "../assets";
import { MdAdd } from "react-icons/md";
import LeftPanelSection from "./LeftPanelSection";
import {
	leftPanelCategoriesData,
	leftPanelGeneralData,
} from "../data/leftPanelData";
import { RiSunFill, RiMoonClearFill } from "react-icons/ri";

const LeftPanel = ({ className }) => {
	return (
		<div
			className={`${className} md:flex md:flex-col md:px-12 md:py-10 items-center border-r-solid border-r-ternary border-r-2  `}
		>
			<img src={logoGold} alt="logo" className="md:w-3/5 mt-1" />
			<button className="button">
				<span>
					<MdAdd className="mr-1" />
				</span>
				Add new task
			</button>
			<section className="self-start ">
				<LeftPanelSection
					title="Category"
					linksData={leftPanelCategoriesData}
				/>
				<LeftPanelSection title="General" linksData={leftPanelGeneralData} />
				<div className="flex items-center py-1">
					<RiSunFill />
					<button className=" border-solid border-2 border-primary w-fit rounded-2xl">
						switch
					</button>
					<RiMoonClearFill />
				</div>
			</section>
		</div>
	);
};

export default LeftPanel;

LeftPanel.propTypes = {
	className: PropTypes.string,
};
