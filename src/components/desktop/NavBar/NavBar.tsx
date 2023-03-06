import { Link } from "react-router-dom";

import styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <nav className={styles["nav-content"]}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/bogus">Broken Page</Link>
        </li>
      </ul>
    </nav>
  );
}
