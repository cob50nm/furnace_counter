import { useState } from 'react';
import coalImg from "./img/coal.png";
import ironImg from "./img/iron.png";
import oilImg from "./img/oil.png";
import upgradeImg from "./img/upgrade.png";
import moneyImg from "./img/money.png";


const images = {
	"coal": coalImg,
	"iron": ironImg,
	"oil": oilImg,
	"upgrade": upgradeImg,
	"money": moneyImg
}

const Counter = (props) => {

	const [count, setCount] = useState(props.initValue);

	function increment(value) {
		setCount(count + value);
	}

	function decrement(value) {
		const newValue = count - value;
		setCount(newValue > 0 ? newValue : 0);
	}

	return (<div className='counter'>
		<img className="iconImg" src={images[props.type]} />
		<div className='counterValue'>{count}</div>
		<div className='counterButtons'>
			<div className='buttonRow'>
				<button className="mButton" onClick={() => increment(1)}>+1</button>
				<button className="mButton" onClick={() => increment(2)}>+2</button>
				<button className="mButton" onClick={() => increment(4)}>+4</button>
				<button className="mButton" onClick={() => increment(6)}>+6</button>
			</div>
			<div className='buttonRow'>
				<button className="mButton" onClick={() => decrement(1)}>-1</button>
				<button className="mButton" onClick={() => decrement(2)}>-2</button>
				<button className="mButton" onClick={() => decrement(4)}>-4</button>
				<button className="mButton" onClick={() => decrement(6)}>-6</button>
			</div>
		</div>
	</div>)
}

export default Counter;