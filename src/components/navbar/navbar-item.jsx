import React from "react";
import { NavLink } from "react-router-dom";

function NavbarItem({
  classProp,
  content,
  check,
  path,
  defaultContent,
  onclick,
}) {
  return (
    <NavLink onClick={onclick} to={path}>
      <div className={classProp}>{check ? content : defaultContent}</div>
    </NavLink>
  );
}

export default NavbarItem;
