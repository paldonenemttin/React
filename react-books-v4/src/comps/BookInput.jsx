import React, { useContext, useRef } from "react";
import BookView from "./BookView";
import MyButton from "../My/MyButton";
import "../css/insert.css"
import {useBookContext} from "../context/AppContextProvide";


function BookInput() {
  const { book, setBook, bookList, setBookList } = useBookContext()
  
  const nextId = useRef(0)
  const nextId = useRef();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

	// 입력된 도서정보를 배열에 추가하기
  const bookInsert = async () => {
    // const {name, }
    if (book.bo_name === "") {
      alert("도서관")
    }
	  setBookList([...bookList, book])
  }
  return (
    <>
      <div className="input_box">
        <label>도서명</label>
        <input name="b_name" ref={nameId} value={book.b_name} onChange={onChangeHandler} />
        <label>장르</label>
        <input name="b_genre" ref={genreId} value={book.b_genre} onChange={onChangeHandler} />
        <MyButton onClick={bookInsert}>리스트 추가</MyButton>
      </div>
      <BookView />
    </>
  );
}

export default BookInput;