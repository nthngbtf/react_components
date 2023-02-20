import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Acoordiion = ({ items }) => {
  const [expandedIndex, setEpandedIndex] = useState(-1);
  const handleClick = (newIndex) => {
    // console.log("STALE", expandedIndex);
    // useonly if the state is not updating into the latest state value
    setEpandedIndex((currentEpandedIndex) => {
      // console.log("Up to date index", currentEpandedIndex);
      if (currentEpandedIndex === newIndex) {
        return -1;
      } else {
        return newIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpaned = index === expandedIndex;

    // console.log(isExpaned);
    const icon = (
      <span className="text-2xl">
        {isExpaned ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div key={item.id}>
        <div
          className="flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {/* since react did not print any null or undefied or booelen value it will not show on the screen and use the AND javasript truey value */}
        {isExpaned && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t  rounded">{renderedItems}</div>;
};

export default Acoordiion;
