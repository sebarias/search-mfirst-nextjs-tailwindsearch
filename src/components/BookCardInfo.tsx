import Book from "@/interfaces/book";
import Image from "next/image";

interface Props {
  book: Book;
}

const BookCardInfo = ({ book }: Props) => {
  return (
    <article className=" grid-areas mt-8 rounded-xl bg-amber-200 p-4 text-amber-500 ">
      <div className="overflow-hidden section-image mr-1 grid place-content-center h-24 w-24 lg:mx-auto lg:h-36 lg:w-36">
        {book.hasOwnProperty('image') ? 
        <Image
          src={book.image}
          width={100}
          height={100}
          alt="Book image"
          className="h-auto w-full"
          placeholder="blur"
          blurDataURL={book.image}
        />
        :
       <p> no image</p>
      }
      </div>
      <div className="section-info ">
        <h2 className="text-3xl font-bold">{book.title}</h2>
        <p>{book.author}</p>
      </div>
      <p className="section-origin lg:text-right">Buscado en {book.origin}</p>
      <p className="section-description mt-8 leading-loose">{book.summary}</p>
      <div className=" section-number mt-4 flex justify-around rounded-xl bg-amber-500 p-8 text-center text-white">
        <article>
          <p>Precio</p>
          <p className="text-2xl font-bold">{book.price}</p>
        </article>
        <article>
          <p>Páginas</p>
          <p className="text-2xl font-bold">{book.pages}</p>
        </article>
        <article>
          <p>Año</p>
          <p className="text-2xl font-bold">{book.year}</p>
        </article>
        <article>
          <p>Condición</p>
          <p className="text-2xl font-bold">{book.condition}</p>
        </article>
      </div>
    </article>
  );
};

export default BookCardInfo;
