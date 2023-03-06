import { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowUp,
  faLongArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./NavBar.module.scss";

export default function NavBar() {
  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <nav className={styles["nav-content"]}>
      Nav Content (Mobile)
      <button onClick={() => setNavExpanded((prevState) => !prevState)}>
        <FontAwesomeIcon icon={navExpanded ? faLongArrowUp : faLongArrowDown} />
      </button>
      {navExpanded && (
        <div>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/bogus">Broken Page</Link>
        </div>
      )}
    </nav>
  );
}
