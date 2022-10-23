export const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center m-5 rounded-lg bg-gray-800 shadow-lg p-4">
      <div className="flex flex-row gap-4 items-center">
        <div className="flex flex-row gap-1 items-center">
          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        </div>
        <h1 className="text-white font-bold text-xl">Festboxd</h1>
      </div>
      <ul className="flex flex-row gap-4 items-center">
        <li>
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded">
                Add novo review
            </button>
        </li>
      </ul>
    </nav>
  );
};
