import React from 'react';
import { NavLink, useLocation, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: '🏠' },
  { to: '/pelaporan', label: 'Reporting', icon: '📝' },
  { to: '/counseling', label: 'Counseling', icon: '💬' },
  { to: '/Admin', label: 'Admin', icon: '📩' },
  { to: '/legal', label: 'Legal Center', icon: '⚖️' },
  { to: '/team', label: 'Team', icon: '👥' },
];

const Layout = () => {
  const location = useLocation();

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        color: '#4B3A26',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <nav
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          backgroundColor: '#4B3A26',
          padding: '1rem 2rem',
          gap: '2rem',
          borderBottom: '1px solid #3a2f1c',
        }}
      >
        {navItems.map(({ to, label, icon }) => {
          const isActive = location.pathname.toLowerCase() === to.toLowerCase();
          return (
            <NavLink
              key={to}
              to={to}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: isActive ? 'white' : '#d1bfa7',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: isActive ? 'bold' : 'normal',
                paddingBottom: '0.25rem',
                borderBottom: isActive ? '2px solid white' : 'none',
                transition: 'color 0.3s, border-bottom 0.3s',
              }}
              end
            >
              <span>{icon}</span>
              {label}
            </NavLink>
          );
        })}
      </nav>

      <main style={{ flex: 1, padding: '2rem', maxWidth: '960px', margin: '0 auto' }}>
        <Outlet /> {/* di sinilah halaman anak akan ditampilkan */}
      </main>
    </div>
  );
};

export default Layout;
