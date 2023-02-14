import Button from "./components/Button/Button";
import Text from "./components/Text/Text";
import { useState } from "react";

const App = () => {
const [toggle, setToggle] = useState(true);

return (
	<div className="App">
	<Text toggle={toggle} displayTxt="GeeksForGeeks"/>
	<Button setToggle={setToggle} btnTxt="Toggle Text"/>
	</div>
);
}

export default App;
