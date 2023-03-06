import { lazy } from "react";
import Import from "../../../Import";
import { title } from "../../../constants";

import "./Header.scss";

const LazyNavBarDesktop = lazy(() => import("../../desktop/NavBar/NavBar"));
const LazyNavBarMobile = lazy(() => import("../../mobile/NavBar/NavBar"));

export function Header() {
  return (
    <header id="header">
      <span id="title">{title}</span>
      <Import
        desktopComponent={<LazyNavBarDesktop />}
        mobileComponent={<LazyNavBarMobile />}
      />
      <nav></nav>
    </header>
  );
}
