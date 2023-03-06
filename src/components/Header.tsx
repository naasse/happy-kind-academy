import './Header.scss';
import { NavBar } from './NavBar';

export function Header() {
  return (
    <header id="header">
      <span id="title">
        Happy Kind Academy
      </span>
      <NavBar />
      <nav>
      </nav>
    </header>
  );
}