import Dropdown from "../components/Dropdown";
import { useState } from "react";

const DropdownPage = () => {
  const [selected, setSelected] = useState(null);

  const handleSelected = (option) => {
    setSelected(option);
  };

  const options = [
    {
      label: "Red",
      value: "Red",
    },
    {
      label: "Blue",
      value: "Blue",
    },

    {
      label: "Green",
      value: "Green",
    },
  ];
  return (
    <div className="flex">
      <Dropdown
        onChange={handleSelected}
        value={selected}
        options={options}
      ></Dropdown>
      {/* <Dropdown
        onChange={handleSelected}
        value={selected}
        options={options}
      ></Dropdown> */}
    </div>
  );
};

export default DropdownPage;
