import { useState } from "react";

function useSort(value, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
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
  return {
    sortOrder,
    sortBy,
    setSortColumn,
    sortedData,
  };
}

export default useSort;
