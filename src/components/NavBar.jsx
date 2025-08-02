import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const navItems = [
    { to: '/pelaporan', label: 'Pelaporan' },
    { to: '/counseling', label: 'Konseling' },
  ];

  return (
    <nav style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
      {navItems.map((item, index) => (
        <div
          key={item.to}
          style={{
            flex: 1,
            textAlign: 'center',
            padding: '1rem',
            borderRight: index !== navItems.length - 1 ? '1px solid #ccc' : 'none',
          }}
        >
          <a
            href={item.to}
            style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}
          >
            {item.label}
          </a>
        </div>
      ))}
    </nav>
  );
};
