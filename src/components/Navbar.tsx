import MoonIcon from "@/components/icons/MoonIcon"
const Navbar = () => {
  return (
    <header className="text-amber-400 flex items-center space-x-2 mb-10">
      <h1 className="text-3xl font-bold flex-grow">buscador ISBN</h1>
      <div>
        <span className="uppercase">light</span>
        <button>
          <MoonIcon className="fill-amber-400" width={50} />
        </button>
      </div>
    </header>
  )
}

export default Navbar