import { ReactElement } from "react";

import styles from "./NavBar.module.scss";

export type Props = {
  links: ReactElement[];
};

export default function NavBar(props: Props) {
  const { links } = props;

  return (
    <nav className={styles["nav-content"]}>
      <ul>
        {links.map((link) => (
          <li key={link.key}>{link}</li>
        ))}
      </ul>
    </nav>
  );
}
