import MainButton from "./MainButton";
import { openDir } from "../utils/fileUtils";

const ButtonsContainer = () => {
  return (
    <div className="flex bg-white flex-row p-4 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-md m-4 border-white border-2 gap-4">
      <MainButton
        title="Create new project"
        imgSrc="/welcome/add_circle_FILL0_wght400_GRAD0_opsz48.svg"
        onClick={openDir}
      />
      <MainButton
        title="Open existing project"
        imgSrc="/welcome/file_open_black_24dp.svg"
        onClick={openDir}
      />
      <MainButton
        title="Education mode"
        imgSrc="/welcome/school_FILL0_wght400_GRAD0_opsz48.svg"
        onClick={() => null}
      />
    </div>
  );
};

export default ButtonsContainer;