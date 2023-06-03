import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import "./Header.scss";

export function Header() {
  const { t } = useTranslation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const links = useMemo(() => {
    return (
      <List>
        <ListItem>
          <Link to="/" key="home">
            {t("header.home")}
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/about" key="about">
            {t("header.about")}
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/bogus" key="bogus">
            Broken Page (Testing)
          </Link>
        </ListItem>
      </List>
    );
  }, [t]);

  return (
    <header id="header">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <span id="title">{t("header.title")}</span>

          <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            {links}
          </Drawer>
        </Toolbar>
      </AppBar>
    </header>
  );
}
