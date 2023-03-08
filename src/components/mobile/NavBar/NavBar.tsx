import { useState, ReactElement, useMemo } from "react";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowUp,
  faLongArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./NavBar.module.scss";

export type Props = {
  links: ReactElement[];
};

export default function NavBar(props: Props) {
  const { links } = props;
  const [navExpanded, setNavExpanded] = useState(false);
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
      Nav Content (Mobile)
      <button onClick={() => setNavExpanded((prevState) => !prevState)}>
        <FontAwesomeIcon icon={navExpanded ? faLongArrowUp : faLongArrowDown} />
      </button>
      {navExpanded && <ul>{links.map(getLink)}</ul>}
    </nav>
  );
}
