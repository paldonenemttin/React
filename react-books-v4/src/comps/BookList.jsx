import BookItem from "./BookItem"

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
	
	return (
		<div>
			<table style={ListStyle}>
				<thead>
					<tr>
						{list_title_view}
					</tr>
				</thead>
				<tbody>
					<BookItem />
				</tbody>
			</table>

		</div>
	)
}

export default BookList