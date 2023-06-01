import PropTypes from "prop-types";

const ListLink = ({ title, icon, className, titleClassName }) => {
	return (
		<a
			className={`flex items-center text-primary space-x-1 hover:text-ternary duration-200 ${className}`}
			href=""
		>
			<span>{icon}</span>
			<h6 className={titleClassName}>{title}</h6>
		</a>
	);
};

export default ListLink;

ListLink.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.element,
	className: PropTypes.string,
	titleClassName: PropTypes.string,
};
