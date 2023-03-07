import { lazy, useMemo } from "react";
import Import from "../../../Import";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./Header.scss";

const LazyNavBarDesktop = lazy(() => import("../../desktop/NavBar/NavBar"));
const LazyNavBarMobile = lazy(() => import("../../mobile/NavBar/NavBar"));

export function Header() {
  const { t } = useTranslation();

  const links = useMemo(() => {
    return [
      <Link to="/" key="home">
        {t("header.home")}
      </Link>,
      <Link to="/about" key="about">
        {t("header.about")}
      </Link>,
      <Link to="/bogus" key="bogus">
        Broken Page (Testing)
      </Link>,
    ];
  }, []);

  return (
    <header id="header">
      <span id="title">{t("header.title")}</span>
      <Import
        desktopComponent={<LazyNavBarDesktop links={links} />}
        mobileComponent={<LazyNavBarMobile links={links} />}
      />
      <nav></nav>
    </header>
  );
}
