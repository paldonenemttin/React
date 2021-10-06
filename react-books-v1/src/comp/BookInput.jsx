import React, { useContext } from "react";
import BookContext from "../context/BookContext";

function BookInput() {
	const { book, setBook } = useContext(BookContext)
	const onChangeHendler = (e) => {
		setBook(e.target.value)
	}
	return (
		<div>
			<input
				placeholder="도서명 입력"
				value={book}
				onChangeHendler={onChangeHendler} />
		</div>
	)
}

export default BookInput