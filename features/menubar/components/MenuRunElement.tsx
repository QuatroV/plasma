import Image from "next/image";

const MenuRunElement = () => {
  return (
    <div className="flex items-center cursor-pointer bg-gray-400 rounded-lg p-1 hover:outline-gray-500 hover:outline outline-2 active:scale-105 transition-all">
      Run{" "}
      <Image
        src="/menubar/play_arrow_FILL0_wght400_GRAD0_opsz48.svg"
        alt="Icon"
        height="24"
        width="24"
      />
    </div>
  );
};

export default MenuRunElement;
