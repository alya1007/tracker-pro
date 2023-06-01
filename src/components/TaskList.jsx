import PropTypes from "prop-types";
import { HiPlus } from "react-icons/hi";

const TaskList = ({ title, cards }) => {
	return (
		<div className="bg-ternary w-2/6 rounded-2xl p-4">
			<div className="flex justify-between font-bold text-textColor opacity-80">
				<h6 className="py-4 pb-6">{title}</h6>
				<button>
					<HiPlus className="my-4 mb-6 text-xl font-bold" />
				</button>
			</div>
			<ul>
				{cards.map((card) => (
					<li key={card.key}>{card}</li>
				))}
			</ul>
		</div>
	);
};

export default TaskList;

TaskList.propTypes = {
	title: PropTypes.string,
	cards: PropTypes.array,
};
