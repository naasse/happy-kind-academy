import { useState, ReactElement } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowUp,
  faLongArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./NavBar.module.scss";
import { useMobile } from "../../../hooks/useMobile";

export type Props = {
  links: ReactElement[];
};

export default function NavBar(props: Props) {
  const { links } = props;
  const [navExpanded, setNavExpanded] = useState(false);

  const { isMobile } = useMobile();

  return (
    <nav className={styles["nav-content"]}>
      Nav Content (Mobile)
      <button onClick={() => setNavExpanded((prevState) => !prevState)}>
        <FontAwesomeIcon icon={navExpanded ? faLongArrowUp : faLongArrowDown} />
      </button>
      {navExpanded && (
        <ul>
          {links.map((link) => (
            <li key={link.key}>{link}</li>
          ))}
        </ul>
      )}
    </nav>
  );
}
