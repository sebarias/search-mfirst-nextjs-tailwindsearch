import Image from "next/image";

const BookCardInfo = () => {
  return (
    <article className=" grid-areas rounded-xl bg-amber-200 p-3 text-amber-500 ">
      <div className="section-image">
        <Image
          className="relative"
          src="https://www.antartica.cl/media/catalog/product/9/7/9789564083643_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300"
          width={80}
          height={80}
          alt="Book image"
        />
      </div>
      <div className="section-info ">
        <h1 className="font-bold">LUNA</h1>
        <p>MAZA, JOSE MARIA</p>
      </div>
      <p className="section-origin">Buscado en Antartica.cl</p>
      <p className="section-description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quis
        vero cumque dolorum pariatur quidem animi consequuntur, sapiente amet
        odio officiis laborum optio dignissimos aliquam veniam incidunt
        repudiandae? At, consequatur.
      </p>
      <div className="section-number flex justify-around bg-amber-500 rounded-xl text-white">
        <article>
          <p>Precio</p>
          <p>$2000</p>
        </article>
        <article>
          <p>Páginas</p>
          <p>600</p>
        </article>
        <article>
          <p>Año</p>
          <p>2023</p>
        </article>
      </div>
    </article>
  );
};

export default BookCardInfo;
