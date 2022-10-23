import { useState, useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

interface DropdownProps {
  children: React.ReactNode;
  options: React.ReactNode[];
}

const Dropdown = ({ children, options }: DropdownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownListRef = useRef(null);

  useOnClickOutside(dropdownListRef, () => setDropdownOpen(false));

  return (
    <div ref={dropdownListRef} className="">
      <div onClick={() => setDropdownOpen(true)}>{children}</div>
      {dropdownOpen && (
        <div
          className={`absolute z-10 bg-gray-100 p-2 mt-1 rounded flex flex-col gap-1 shadow`}
        >
          {options.map((el, idx) => (
            <div className="cursor-pointer" key={idx}>
              {el}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
