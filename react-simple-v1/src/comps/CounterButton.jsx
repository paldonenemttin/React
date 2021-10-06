import React, {useState} from "react";

function CounterButton() {

	const [index , setIndex] = useState(0)

	const up = (e) => {
		return (
			setIndex(index + 1)	
		)
	}

	const down = (e) => {
		return (
			setIndex(index - 1)	
		)
		
	}

	return (
		<div>
			<button onClick={up}>증가</button>
			<button onClick={down}>감소</button>
		</div>
	)
}

export default CounterButton