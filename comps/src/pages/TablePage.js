import SortableTable from "../components/SortableTable";
// import Table from "../components/Table";

function TablePage() {
  const data = [
    {
      name: "Orange",
      color: "bg-orange-500",
      score: 5,
    },
    {
      name: "Apple",
      color: "bg-red-500",
      score: 3,
    },

    {
      name: "Banana",
      color: "bg-yellow-500",
      score: 1,
    },

    {
      name: "Lime",
      color: "bg-green-500",
      score: 4,
    },
  ];

  const config = [
    {
      label: "Name",
      render: (data) => data.name,
      sortValue: (data) => data.name,
    },
    {
      label: "Color",
      render: (data) => <div className={`p-3 m-2 ${data.color}`} />,
    },
    {
      label: "Score",
      render: (data) => data.score,
      // header: () => <th className="bg-red-500">Score</th>,
      sortValue: (data) => data.score,
    },
  ];
  const keyFn = (data) => {
    return data.name;
  };

  return <SortableTable value={data} config={config} keyFn={keyFn} />;
}

export default TablePage;
