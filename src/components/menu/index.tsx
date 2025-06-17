import { History, Home, Moon, Settings, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

type AvailableThemes = 'light' | 'dark';

export function Menu() {
  const [currentTheme, setCurrentTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('@chronos:theme') as AvailableThemes) || 'dark';
    return storageTheme;
  });

  const handleToggleTheme = () => {
    setCurrentTheme((prevTheme) => {
      const nextTheme = prevTheme === 'light' ? 'dark' : 'light';
      return nextTheme;
    });
  };

  useEffect(() => {
    document.documentElement.dataset.theme = currentTheme || 'light';
    localStorage.setItem('@chronos:theme', currentTheme);
  }, [currentTheme]);

  const menuItens = [
    { label: 'Home', href: '/', icon: <Home />, arialLabel: 'Página Inicial' },
    {
      label: 'History',
      href: '/history',
      icon: <History />,
      arialLabel: 'Página Histórico',
    },
    {
      label: 'Settings',
      href: '/settings',
      icon: <Settings />,
      arialLabel: 'Página Configurações',
    },
  ];

  return (
    <nav className={styles.menu}>
      {menuItens.map((item) => {
        return (
          <a
            key={item.label}
            href={item.href}
            className={styles.menuLink}
            aria-label={item.arialLabel}
            title={item.arialLabel}
          >
            {item.icon}
          </a>
        );
      })}

      <button
        type='button'
        className={styles.menuLink}
        onClick={handleToggleTheme}
        title='Mudar tema'
        aria-label='Mudar tema'
      >
        {currentTheme === 'light' ? <Sun /> : <Moon />}
      </button>
    </nav>
  );
}
