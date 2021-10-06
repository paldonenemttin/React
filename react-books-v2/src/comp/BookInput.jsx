import React, { useContext } from "react";
import BookView from "./BookView";
import BookContext from "../context/BookContext";

function BookInput() {
	const { book, setBook, BookList,setBookList } = useContext(BookContext)
	const onChangeHendler = (e) => {
		const { name, value } = e.target
		setBook({...book,[name]:value})
	}
	const bookInsert = () => {
		// Math.random() : 0 ~ 1 미만의 난수 생성
		setBook({...book, b_id: Math.random() })
		setBookList({...BookList, book})
	}
	return (
		<div>
			<input name="b_name" onChange={onChangeHendler} placeholder="도서명 입력" value={book.b_name}/>
			<input name="b_genre" onChange={onChangeHendler} placeholder="장르입력" value={book.b_genre}/>
			<button onClick={bookInsert}>추가</button>
			<BookView />
		</div>
	)
}

export default BookInput