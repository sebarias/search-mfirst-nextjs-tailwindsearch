"use client";

import BookCardInfo from "@/components/BookCardInfo";
import FormSearch from "@/components/FormSearch";
import { useState } from "react";
import Book from "@/interfaces/book";

//const apiUrl = process.env.API_URL;
const apiUrl = "http://localhost:3000";

const Home = () => {
  const [book, setBook] = useState<Book | null>(null);
  const [bookFeriaChilena, setBookFeriaChilena] = useState<Book | null>(null);
  const [bookAntartica, setBookAntartica] = useState<Book | null>(null);

  const getBook = async (isbn: string) => {

    //const res = await fetch(`${apiUrl}/api/search?isbn=${isbn}`);
    const res = await fetch(`https://search-book-buscalibre-function-vwp6agkcra-uc.a.run.app?isbn=${isbn}`);
    const data = await res.json();
    setBook(data.data);

    // const resFeria = await fetch(`${apiUrl}/api/search/feriachilena?isbn=${isbn}`);
    // const dataFeria = await resFeria.json();
    // setBookFeriaChilena(dataFeria); 

    //const resAntartica = await fetch(`${apiUrl}/api/search/antartica?isbn=${isbn}`);
    const resAntartica = await fetch(`https://search-book-antartica-function-vwp6agkcra-uc.a.run.app?isbn=${isbn}`);
    const dataAntartica = await resAntartica.json();
    setBookAntartica(dataAntartica.data);
  };

  return (
    <>
      <FormSearch getBook={getBook} />
      {book && <BookCardInfo book={book} />}
     {/* {bookFeriaChilena && <BookCardInfo book={bookFeriaChilena} />} */}
      {bookAntartica && <BookCardInfo book={bookAntartica} />}
    </>
  );
};

export default Home;
