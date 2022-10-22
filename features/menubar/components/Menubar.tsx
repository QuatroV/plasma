const MenuBar = () => {
  return (
    <nav className="flex w-screen gap-2 p-1 bg-white bg-opacity-60 backdrop-filter backdrop-blur-md">
      <div className="cursor-pointer hover:bg-white rounded-lg p-1 active:outline-emerald-400 active:outline outline-1 active:scale-105 transition-all">
        File
      </div>
      <div className="cursor-pointer hover:bg-white rounded-lg p-1 active:outline-emerald-400 active:outline outline-1 active:scale-105 transition-all">
        Edit
      </div>
      <div className="cursor-pointer hover:bg-white rounded-lg p-1 active:outline-emerald-400 active:outline outline-1 active:scale-105 transition-all">
        Selection
      </div>
    </nav>
  );
};

export default MenuBar;
