import { useState } from "react";

/**
 * 
 * Props Drilling이라고 한다
 * 입력박스에 입력된 문자열로 sample state를 변경하는 일을 수행하기
 * setSample() 함수를 전달받아야 하는데
 * 그 경로가 여러겹으로 겹치는 현상이 발생
 * 
 * React에서 state를 사용한 코딩을 할때 
 * 매우 자주 발생하는 현상
 * 
 * 이러한 현상을 막는 코딩을 하기 위하여
 * Redux라는 3rd 라이브러리를 많이 사용하는데
 * Context라는 react 기본 함수를 사용 예정
 */
const PropsLevel_2 = ({ setSample }) => {
	const onChangeHendler = (e) => {
		setSample(e.target.value)
	}
	return (
		<div>
			<label>샘플 문자열 입력 : </label>
			<input onChange={(onChangeHendler)}/>
		</div>
	)
}

/**
 * PropsDrilling 컴포넌에 선언된 sample state 값을 
 * propsLevel_1의 함수 컴포넌트를 사용하여 표시하고자 한다
 */
const PropsLevel_1 = ({sample, setSample}) => {

	return (
		<div className="level_1">
			<p>샘플값 : {sample}</p>
			<PropsLevel_2 setSample={setSample} />
		</div>
	) 
}

const PropsMain = (props) => {
		const { sample, setSample } = props;
	return (
		<div className="main">
			<PropsLevel_1 sample={sample} setSample={setSample}/>
		</div>
	)
}

function PropsDrilling() {
	const [sample, setSample] = useState("대한민국")
	return (
		<div className="start">
			<PropsMain sample={sample} setSample={setSample}/>
		</div>
	)
}

export default PropsDrilling