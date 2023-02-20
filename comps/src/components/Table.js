import React, { Fragment } from "react";

function Table({ value, config, keyFn }) {
  const renderHeader = config.map((column) => {
    return column.header ? (
      <Fragment key={column.label}>{column.header()}</Fragment>
    ) : (
      <th className="p-3" key={column.label}>
        {column.label}
      </th>
    );
    // if (column.header) {
    //   return <Fragment key={column.label}>{column.header()}</Fragment>;
    // }
    // return (
    //   <th className="p-3" key={column.label}>
    //     {column.label}
    //   </th>
    // );
  });

  const renderRow = value.map((rowData) => {
    const renderCells = config.map((column) => {
      return (
        <td className="p-3" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {/* <td className="p-3">{config[0].render(data)}</td>
        <td className="p-3">{config[1].render(data)}</td>
        <td className="p-3">{config[2].render(data)}</td> */}
        {renderCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderHeader}</tr>
      </thead>
      <tbody>{renderRow}</tbody>
    </table>
  );
}

export default Table;
