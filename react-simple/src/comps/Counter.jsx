import { useState } from "react";

function Counter() {

	const [index, setIndex] = useState(0)

	const onClickUp = (e) =>{
		setIndex(index+1)
	}
	const onClickDown = (e) => {
		setIndex(index-1)
	}
	
	return (
		<div>
			<h3>카운트: {index}</h3>
			<button onClick={onClickUp}>증가</button>
			<button onClick={onClickDown}>감소</button>
		</div>
	)
}

export default Counter