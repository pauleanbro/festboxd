export const Footer = () => {
  return (
    <footer className="flex flex-row justify-evenly mt-10 items-center bg-gray-800 shadow-lg p-4">
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
          <a href="" className="text-white font-bold text-lg">
            Sobre
          </a>
        </li>
        <li>
          <a href="" className="text-white font-bold text-lg">
            Contato
          </a>
        </li>
      </ul>
    </footer>
  );
};
