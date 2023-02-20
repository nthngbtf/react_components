import Acoordion from "../components/Acoordion";

const AcoordionPage = () => {
  const items = [
    {
      id: "idsfadsf21",
      label: "Can I use React on a Project",
      content:
        "React Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
    },
    {
      id: "fsaf1",
      label: "Can I use CSS on a Project",
      content:
        "Css Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
    },
    {
      id: "fdsaf321",
      label: "Can I use Javascript on a Project",
      content:
        " Javascript Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... ",
    },
  ];
  return <Acoordion items={items}></Acoordion>;
};

export default AcoordionPage;
