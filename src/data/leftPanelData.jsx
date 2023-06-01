import { RiSettings3Fill } from "react-icons/ri";
import {
	HiFolder,
	HiCalendar,
	HiUsers,
	HiOutlineClipboardList,
	HiTag,
	HiPhone,
} from "react-icons/hi";

export const leftPanelCategoriesData = [
	{
		id: 1,
		title: "Projects",
		icon: <HiFolder />,
	},
	{
		id: 2,
		title: "Teams",
		icon: <HiUsers />,
	},
	{
		id: 3,
		title: "Calendar",
		icon: <HiCalendar />,
	},
	{
		id: 4,
		title: "Task List",
		icon: <HiOutlineClipboardList />,
	},
	{
		id: 5,
		title: "Categories",
		icon: <HiTag />,
	},
];

export const leftPanelGeneralData = [
	{
		id: 1,
		title: "Settings",
		icon: <RiSettings3Fill />,
	},
	{
		id: 2,
		title: "Help",
		icon: <HiPhone />,
	},
];
