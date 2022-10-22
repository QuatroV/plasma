import Image from "next/image";

const MenuBar = () => {
  return (
    <nav className="flex w-screen gap-2 p-1 bg-white bg-opacity-60 backdrop-filter backdrop-blur-md">
      <div className="  font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500">
        PL
      </div>
      <div className="cursor-pointer hover:bg-white rounded-lg p-1 active:outline-emerald-400 active:outline outline-1 active:scale-105 transition-all">
        File
      </div>
      <div className="cursor-pointer hover:bg-white rounded-lg p-1 active:outline-emerald-400 active:outline outline-1 active:scale-105 transition-all">
        Edit
      </div>
      <div className="cursor-pointer hover:bg-white rounded-lg p-1 active:outline-emerald-400 active:outline outline-1 active:scale-105 transition-all">
        Selection
      </div>
      <div className="cursor-pointer hover:bg-white rounded-lg p-1 active:outline-emerald-400 active:outline outline-1 active:scale-105 transition-all">
        Terminal
      </div>
      <div className="flex items-center cursor-pointer bg-gray-400 rounded-lg p-1 hover:outline-gray-500 hover:outline outline-2 active:scale-105 transition-all">
        Run{" "}
        <Image
          src="/menubar/play_arrow_FILL0_wght400_GRAD0_opsz48.svg"
          alt="Icon"
          height="24"
          width="24"
        />
      </div>
    </nav>
  );
};

export default MenuBar;
