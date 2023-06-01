import PropTypes from "prop-types";
import ListLink from "./ListLink";

const LeftPanelSection = ({ title, linksData }) => {
	return (
		<div className="py-5">
			<h6 className="uppercase text-primary opacity-70 text-sm py-1">
				{title}
			</h6>
			<ul className="pl-4">
				{linksData.map((linkData) => (
					<ListLink
						key={linkData.id}
						{...linkData}
						className={"py-2 space-x-4"}
						titleClassName="text-sm"
					/>
				))}
			</ul>
		</div>
	);
};

export default LeftPanelSection;

LeftPanelSection.propTypes = {
	title: PropTypes.string,
	linksData: PropTypes.array,
};
