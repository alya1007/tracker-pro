import PropTypes from "prop-types";
import { logoGold } from "../assets";
import { MdAdd } from "react-icons/md";
import LeftPanelSection from "./LeftPanelSection";
import {
	leftPanelCategoriesData,
	leftPanelGeneralData,
} from "../data/leftPanelData";

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
			</section>
		</div>
	);
};

export default LeftPanel;

LeftPanel.propTypes = {
	className: PropTypes.string,
};
