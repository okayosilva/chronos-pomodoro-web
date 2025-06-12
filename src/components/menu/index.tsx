import { History, Home, Settings, Sun } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  const menuItens = [
    { label: 'Home', href: '/', icon: <Home /> },
    { label: 'History', href: '/history', icon: <History /> },
    { label: 'Settings', href: '/settings', icon: <Settings /> },
    { label: 'Sun', href: '/sun', icon: <Sun /> },
  ];

  return (
    <nav className={styles.menu}>
      {menuItens.map((item) => {
        return (
          <a key={item.label} href={item.href} className={styles.menuLink}>
            {item.icon}
          </a>
        );
      })}
    </nav>
  );
}
