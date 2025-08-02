import React from 'react';
import { NavLink, useLocation, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: '🏠' },
  { to: '/pelaporan', label: 'Reporting', icon: '📝' },
  { to: '/counseling', label: 'Counseling', icon: '💬' },
  { to: '/Admin', label: 'Admin', icon: '📩'},
  { to: '/legal', label: 'Legal Center', icon: '⚖️' },
  { to: '/team', label: 'Team', icon: '👥' },
];

const Layout = () => {
  const location = useLocation();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
      color: '#4B3A26',
      fontFamily: 'Arial, sans-serif',
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        padding: '1rem 2rem',
        gap: '2rem',
        borderBottom: '1px solid #ccc',
      }}>
        {navItems.map(({ to, label }) => {
          const isActive = location.pathname === to;
          return (
            <NavLink
              key={to}
              to={to}
              style={{
                color: isActive ? '#4B3A26' : '#666',
                textDecoration: isActive ? 'underline' : 'none',
                fontSize: '1.1rem',
                fontWeight: 'normal',
                paddingBottom: '0.25rem',
                transition: 'color 0.3s, text-decoration 0.3s',
              }}
              end
            >
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
