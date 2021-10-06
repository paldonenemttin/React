import React from "react";

/**
	 *  forEach() 코드
	 * 배열을 활용하는 JS 함수 코드들
	 * 배열.map() {return값} : 배열 갯수 유지하면서 새로운 배열 만들기
	 * 배열.filter() {return boolean} : 어떤 조건에 있는 리스트만 추출
	 * 배열.forEach() {새로운 배열.push()} : 배열을 단순히 순서대로 연산 처리할때
	 */

/**
 * 
 * react에서 forEach()류의 함수를 사용해
 * 컴포넌트 list를 만들때
 * 반드시 가장 바깥쪽 tag에는 unique한 값으로 key를 설정해주어야 한다
 * map()을 사용할때 두번째 매개변수로 index 키 값을 할 수 있는
 * 이 값으로는 절대 key로 설정하지 않는다
 * 오히려 성능으ㅡㄹ 저하시키는 결과를 내기도 한다 
 */
function TodoList({ todoList }) {
  const viewList = todoList.map((todo) => {
    return (
      <tr>
        <td>{todo.t_id}</td>
        <td>{todo.t_date}</td>
        <td>{todo.t_text}</td>
      </tr>
    );
  });

  return (
    <table className="todo_list">
      <thead>
        <tr>
          <th>ID</th>
          <th>날짜</th>
          <th>TODO</th>
        </tr>
      </thead>
      <tbody>{viewList}</tbody>
    </table>
  );
}

export default TodoList