import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();
  useEffect(() => {
    const handler = (event) => {
      // just incase that useRef is been hidden
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);

    //WHAT OPTION DID SELECTED
  };

  const renderOption = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => {
          handleOptionClick(option);
        }}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  //   selected? is the jvs sync to check if variable is defied or not

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        {isOpen ? (
          <GoChevronUp className="text-lg" />
        ) : (
          <GoChevronDown className="text-lg" />
        )}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderOption}</Panel>}
    </div>
  );
};

export default Dropdown;
