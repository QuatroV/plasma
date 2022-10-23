import Dropdown from "../../../components/Dropdown";

interface MenuElementProps {
  title: string;
}

const Option = () => {
  return <div>Some Option</div>;
};

const MenuElement = ({ title }: MenuElementProps) => {
  return (
    <Dropdown options={[Option(), Option(), Option()]}>
      <div className="cursor-pointer hover:bg-white rounded-lg p-1 active:outline-emerald-400 active:outline outline-1 active:scale-105 transition-all">
        {title}
      </div>
    </Dropdown>
  );
};

export default MenuElement;
