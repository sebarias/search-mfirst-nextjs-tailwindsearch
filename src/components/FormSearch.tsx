
import SearchIcon from "@/components/icons/SearchIcon";

interface Props {
  getBook: (isbn : string) => Promise<void>
}

const FormSearch = ({getBook} : Props) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.isbn.value);
    const isbn = e.currentTarget.isbn.value;
    if (!isbn) return;
    await getBook(isbn);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex flex-wrap items-center gap-5 rounded-xl bg-amber-200 p-4"
    >
      <span className="min-w-[20px]">
        <SearchIcon className="fill-amber-400" />
      </span>
      <input
        name="isbn"
        type="text"
        placeholder="Search ISBN..."
        className="h-14 flex-1 rounded-lg bg-transparent p-2 text-amber-500 placeholder:text-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
      />
      <button className="rounded-lg bg-amber-400 px-4 py-4 font-bold text-white">
        Search
      </button>
    </form>
  );
};

export default FormSearch;
