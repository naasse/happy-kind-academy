import { useMemo } from 'react';
import { useMobile } from '../hooks/useMobile';
import './NavBar.scss';

export function NavBar() {
  const { isMobile } = useMobile();

  const navClassName = useMemo(() => {
    return `nav-content${isMobile ? '-compact': ''}`;
  }, [isMobile])

  return (
    <nav className={navClassName}>
        Nav Content
    </nav>
  );
}