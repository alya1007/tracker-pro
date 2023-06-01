import "./App.css";
import { LeftPanel, RightPanel } from "./components";
import "./assets/fonts/fonts.css";

function App() {
	return (
		<div className="bg-bgColor App flex flex-row dark:bgColorDark text-textColor font-geologica ">
			<LeftPanel className={" w-1/5 "} />
			<RightPanel className={"  flex-1 "} />
		</div>
	);
}

export default App;
