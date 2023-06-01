import Center from "./Center";
import Header from "./Header";
import SearchSection from "./SearchSection";
import PropTypes from "prop-types";

const RightPanel = ({ className }) => {
	return (
		<div className={`${className} md:flex md:flex-col`}>
			<Header />
			<SearchSection />
			<Center />
		</div>
	);
};

export default RightPanel;
RightPanel.propTypes = {
	className: PropTypes.string,
};
