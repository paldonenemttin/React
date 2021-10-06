import React, { createContext, useContext, useState } from "react";

const AppContext = createContext()

/**
 * Hook 힘수
 * react에서 state rendering 등을 관리하기 위한 함수들
 * use로 시작되는 함수들
 * useState(), useEffect(), useCallback(), useContext()
 * 
 * react가 초기에는 class 방식으로 코딩을 했다
 * class 방식은 기존의 JS 코드와 많이 문법적인 면들이 달라서
 * 함수방식을도입한다( 16.x.x버전에서)
 * 
 * class 방식에서는 기본적으로 제공하는 약 10가이 method가 있다
 * 이 method를 react에서는 lieCycle method라고 불렀다
 * 프로젝트가 시작될때, rendering이 시작될때 rendering이 완료되었을때
 * 현재 화면이 닫힐때 등등의 상황에서 event를 일으키고
 * 
 * 개발자가 그 상황을 변형해서 react의 기능을 바꾸는 역할을 수행한다
 * 
 * class 방식의 lifeCycle method 를 함수방식의 react에서 구현하는 친구들
 * 이 바로 Hook 함수들
 * 
 */

 //user Hook
 //react에서 기본적으로 제공하는 hook()
 // useContext()는 초기에 생성한 Context를 항상 import해서
 // 매개변수로 전달해야 하는 불편함이 있다
 // AppContext를 바라볼 수 있는(직접 접근 가능한) 곳에서
 // useContext((Context)) 실행하여 매개변수를 지정하지 않아도
 // 사용 할 수 있도록 변경한 Hook
 // Hook은 무조건 use로 시작해야 한다
 // Camel Case로 명명해야 한다
export const useBookContext = () => {
	return useContext(AppContext)
}

/**
 * 1.합성패턴을 사용해서 Context를 upgrade하기
 * state를 생성하고 관리(setState) 할 컴포넌트의 주요 코드를 이곳으로 이동
 * 2. createContext()를 사용해 Context를 하나 생성
 * 3. <Context.Provider> 로 시작되는 컴포넌트 코드로 변경
 * 4. 컴포넌트 함수의 매개변수의 children을 추가
 * 5. 컴포넌트 body에 children을 포함한다
 */
function AppContextProvider({children}) {
	const [book, setBook] = useState({
		b_id: 0,
		b_name: "자바야 놀자",
		b_genre: "IT 개발서"
	})
	const [bookList, setBookList] = useState([])

	const providerData = [book, setBook, bookList, setBookList]
	
	return (
		<>
			<AppContext.Provider value={providerData}>{children}</AppContext.Provider>
		</>
	)
}

export default AppContextProvider