import classNames from "classnames";
import useNavigation from "../hooks/useNavigation";
// import { useContext } from "react";
// import NavigationContext from "../context/Navigation";

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName
  );

  const handClick = (event) => {
    // console.log(event);
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    // console.log(to);
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handClick}>
      {children}
    </a>
  );
}

export default Link;
