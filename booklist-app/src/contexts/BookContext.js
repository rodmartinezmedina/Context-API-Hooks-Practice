import React, { createContext, useState } from 'react';
import {v1 as uuidv1} from 'uuid';
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState ([
    {title: 'Billy, the lonely whale', id: uuidv1() },
    {title: 'Zombies vs vampire clones, the musical', id: uuidv1() },
    {title: 'Thomas Jefferson, who is he?', id: uuidv1() }
  ]);

  const addBook = (title, author) => {
    setBooks([...books, {title: title, author: author, id: uuidv1() }])
  }

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (

    <BookContext.Provider value={{books, addBook, removeBook}}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;