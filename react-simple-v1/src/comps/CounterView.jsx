import React, { useState } from "react";
import CounterButton from "./CounterButton";

const CounterView = () => {
	const [index,setIndex] = useState(0)
	return (
		<div>
			<h3>카운트:{index}</h3>
			<CounterButton setIndex={} />
		</div>
	)
}

export default CounterView