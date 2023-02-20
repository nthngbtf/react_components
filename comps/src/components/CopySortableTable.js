import Table from "./Table";
import { useState } from "react";
import { GoArrowSmallUp, GoArrowSmallDown } from "react-icons/go";

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config, value } = props;

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("des");
      setSortBy(label);
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updateConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  //Only sort data is sort order && sort are not null
  // make a copy of data props
  //find the correct sortValue function and use it
  let sortedData = value;
  if (sortBy && sortOrder) {
    const { sortValue } = config.find((config) => config.label === sortBy);

    // console.log(sortValue);
    // sortedData = [...value];
    // console.log(sortedData);
    sortedData = [...value].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      // console.log(a, "B", b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return (
    <div>
      {/* {sortOrder} -{sortBy} */}
      <Table {...props} value={sortedData} config={updateConfig} />
    </div>
  );
}

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }
  if (sortOrder === null) {
    return "show both icons";
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  } else {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
};

export default SortableTable;
