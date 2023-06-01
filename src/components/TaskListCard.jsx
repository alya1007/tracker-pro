import PropTypes from "prop-types";
import { IoMdMore } from "react-icons/io";
import { CgCalendarDates } from "react-icons/cg";

const TaskListCard = ({
	title,
	description,
	typeFirst,
	typeSecond,
	dateStart,
	dateFinish,
}) => {
	return (
		<div className="bg-secondary rounded-2xl p-4 flex flex-col">
			<div className="flex justify-between items-center font-bold mt-2">
				<h4>{title}</h4>
				<button className="">
					<IoMdMore />
				</button>
			</div>
			<h5 className="font-bold opacity-90 text-xs">{description}</h5>
			<div className="flex justify-start text-xs font-bold mt-3 space-x-2">
				<h6 className="bg-ternary rounded-md px-2 py-1">{typeFirst}</h6>
				<h6 className="bg-ternary rounded-md px-2 py-1">{typeSecond}</h6>
			</div>
			<div className="flex items-center text-xs mt-7 self-end font-bold opacity-90">
				<CgCalendarDates className="text-base mr-1" />
				<h6>{dateStart + " "}</h6>-<h6>{" " + dateFinish}</h6>
			</div>
		</div>
	);
};

export default TaskListCard;

TaskListCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	typeFirst: PropTypes.string,
	typeSecond: PropTypes.string,
	dateStart: PropTypes.string,
	dateFinish: PropTypes.string,
};
