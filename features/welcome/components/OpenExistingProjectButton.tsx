import useDirectory from "../hooks/useDirectory";
import MainButton from "./MainButton";

interface OpenExistingProjectButtonProps {
  title: string;
  imgSrc: string;
}

const OpenExistingProjectButton = (props: OpenExistingProjectButtonProps) => {
  const { openDir } = useDirectory();

  const mainButtonProps = {
    ...props,
    onClick: openDir,
  };

  return <MainButton {...mainButtonProps} />;
};

export default OpenExistingProjectButton;
