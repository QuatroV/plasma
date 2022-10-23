import Logo from "./Logo";
import MenuElement from "./MenuElement";
import MenuRunElement from "./MenuRunElement";

const MenuBar = () => {
  return (
    <nav className="flex w-100 gap-2 p-1 bg-gray-200 sticky top-0 z-10">
      <Logo />
      <MenuElement title="File" />
      <MenuElement title="Edit" />
      <MenuElement title="Selection" />
      <MenuElement title="Terminal" />
      <MenuRunElement />
    </nav>
  );
};

export default MenuBar;
