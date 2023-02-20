import Route from "./components/Route";
import SideBar from "./components/Sidebar";
import AccordionPage from "./pages/AcoordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-7 gap-4 mt-4">
      <SideBar />
      <div className="col-span-5">
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPage />
        </Route>
      </div>
    </div>
  );
};

export default App;
