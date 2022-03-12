import { useState } from 'react';
import './App.css';
import Counter from './counterComponent';
import github from "./img/GitHub-Mark-64px.png";


const initalState = [
	{ type: "coal", init: 2 },
	{ type: "iron", init: 0 },
	{ type: "oil", init: 0 },
	{ type: "upgrade", init: 0 },
	{ type: "money", init: 0 }
];

function App() {


	const [resources, setResources] = useState(initalState);

	return (
		<div className="App">
			{resources.map((res, i) => {
				return (<Counter key={i} type={res.type} initValue={res.init} />)
			})}
			<div>
				<img className="ghIcon" src={github} />
				<a href='https://github.com/cob50nm/furnace_counter' target="_blank">Cob50nm</a>
			</div >
		</div>
	);
}

export default App;
