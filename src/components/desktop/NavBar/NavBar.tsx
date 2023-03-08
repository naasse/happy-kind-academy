import { ReactElement, useMemo } from "react";
import { useLocation } from "react-router-dom";

import styles from "./NavBar.module.scss";

export type Props = {
  links: ReactElement[];
};

export default function NavBar(props: Props) {
  const { links } = props;
  const location = useLocation();

  const getLink = useMemo(
    () => (link: ReactElement) => {
      return (
        <li
          key={link.key}
          className={
            location.pathname === link.props.to ? styles["active"] : undefined
          }
        >
          {link}
        </li>
      );
    },
    [location]
  );

  return (
    <nav className={styles["nav-content"]}>
      <ul>{links.map(getLink)}</ul>
    </nav>
  );
}
