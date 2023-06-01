import TaskList from "./TaskList";
import TaskListCard from "./TaskListCard";

const Center = () => {
	const cards = [
		<TaskListCard
			key="1"
			title="UI Prototyping"
			description={"UI Prototype"}
			typeFirst={"Prototyping"}
			typeSecond={"Interactions"}
			dateStart={"21 Jan "}
			dateFinish={" 24 Jan 2023"}
		/>,
	];
	return (
		<div className="left-0 right-0 md:px-8 md:py-6 flex space-x-4">
			<TaskList title="To Do" cards={cards} />
			<TaskList title="In Progress" cards={cards} />
			<TaskList title="Review" cards={cards} />
			<TaskList title="Stopped" cards={cards} />
		</div>
	);
};

export default Center;
