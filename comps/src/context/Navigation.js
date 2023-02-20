import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentpath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentpath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, " ", to);
    setCurrentpath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {/* <div>
        <button onClick={() => navigate("/accordion")}>Go to Accordion</button>
        <button onClick={() => navigate("/dropdown")}>Go to Dropdwon</button>
      </div>
      {currentPath} */}
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
