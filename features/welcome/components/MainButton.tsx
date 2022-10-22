import Image from "next/image";

interface MainButtonProps {
  title: string;
  imgSrc: string;
  onClick: () => void;
}

const MainButton = ({ title, imgSrc, onClick }: MainButtonProps) => {
  return (
    <div
      className="flex-1 flex flex-col items-center hover:cursor-pointer rounded-xl p-2 hover:drop-shadow hover:bg-white active:outline active:outline-2 active:outline-emerald-400"
      onClick={onClick}
    >
      <Image src={imgSrc} alt="Icon" height="72" width="72" />
      <span>{title}</span>
    </div>
  );
};

export default MainButton;
