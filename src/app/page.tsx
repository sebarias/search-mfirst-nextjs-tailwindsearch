"use client";

import BookCardInfo from "@/components/BookCardInfo";
import FormSearch from "@/components/FormSearch";
import { useState } from "react";
import Book from "@/interfaces/book";

const NEXT_URL =
  process.env.VERCEL_URL || "http://localhost:3000";

const Home = () => {
  const [book, setBook] = useState<Book | null>(null);
  const [bookFeriaChilena, setBookFeriaChilena] = useState<Book | null>(null);
  const [bookAntartica, setBookAntartica] = useState<Book | null>(null);

  const getBook = async (isbn: string) => {
    const res = await fetch(`${NEXT_URL}/api/search?isbn=${isbn}`);
    const data = await res.json();
    setBook(data);

    const resFeria = await fetch(`${NEXT_URL}/api/search/feriachilena?isbn=${isbn}`);
    const dataFeria = await resFeria.json();
    setBookFeriaChilena(dataFeria);

    const resAntartica = await fetch(`${NEXT_URL}/api/search/antartica?isbn=${isbn}`);
    const dataAntartica = await resAntartica.json();
    setBookAntartica(dataAntartica);
  };

  return (
    <>
      <FormSearch getBook={getBook} />
      {book && <BookCardInfo book={book} />}
      {bookFeriaChilena && <BookCardInfo book={bookFeriaChilena} />}
      {bookAntartica && <BookCardInfo book={bookAntartica} />}
    </>
  );
};

export default Home;
