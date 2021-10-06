import React, { useContext } from "react";
import BookList from "./BookList";
import BookContext from "../context/BookContext"

function BookView() {

	const {book} = useContext(BookContext)
	return (
		<div>
			<span>입력된 도서명 :{book.b_name}</span>
			<span>입력된 장르: {book.b_genre}</span>
			<BookList />
		</div>
	)
}

export default BookView