import PropTypes from "prop-types";

const ListButton = ({ title, icon, className, titleClassName }) => {
	return (
		<button
			className={`flex items-center text-primary space-x-1 hover:text-ternary duration-200 ${className}`}
		>
			<div className="text-sm">{icon}</div>
			<h6 className={titleClassName}>{title}</h6>
		</button>
	);
};

export default ListButton;

ListButton.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.element,
	className: PropTypes.string,
	titleClassName: PropTypes.string,
};
