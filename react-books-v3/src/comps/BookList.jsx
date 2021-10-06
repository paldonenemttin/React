import React, { useContext } from "react";
import BookContext from "../context/BookContext";

function BookList() {

	const ListStyle = {
		width: "80vw",
		height: "20px",
		margin: "20px auto",
		border: "1px solid black",
		padding: "0.8rem",
		boxShadow: ""
	}

	const list_title_names =
		[{ id: 0, t_name: "ID" },
		{ id: 1, t_name: "도서명" },
		{ id: 2, t_name: "장르" },
		{ id: 3, t_name: "저자" },
		{ id: 4, t_name: "출판사" },
		{ id: 5, t_name: "가격" }
		]
	const list_title_view = list_title_names.map((title) => {
		return <th key={title.id}>{title.t_name}</th>
	})

	const { bookList } = useContext(BookContext)

	// map을 사용하여 배열을 기준으로 컴포넌트 리스트 만들기
	const viewList = bookList.map((book, index) => {
		return <tr key={book.b_id}>
			<td>{book.b_id}</td>
			<td colSpan="4">{book.b_id}</td>
			<td>{book.b_genre}</td>
		</tr>
	})
	return (
		<div>
			<table style={ListStyle}>
				<thead>
					<tr>
						{list_title_view}
					</tr>
				</thead>
				<tbody>
					{viewList}
				</tbody>
			</table>

		</div>
	)
}

export default BookList