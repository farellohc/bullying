import React from 'react';
import { useNavigate } from 'react-router-dom';

const OpeningPage = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/login');
  };

  return (
    <div style={{
      height: '100vh',
      backgroundColor: 'white',
      color: '#4B3A26',
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '1rem',
    }}>
      {/* Background shapes */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '150px',
        height: '150px',
        background: 'linear-gradient(135deg, #4B3A26 0%, #3e423eff 100%)',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '150px',
        height: '150px',
        background: 'linear-gradient(315deg, #4B3A26 0%, #3e423eff 100%)',
        clipPath: 'polygon(0 100%, 0 0, 100% 100%)',
        zIndex: 0,
      }} />

      {/* Character image */}
      <img src="character.jpeg" alt="Character" style={{
        width: '150px',
        height: 'auto',
        zIndex: 1,
        marginBottom: '1rem',
      }} />

      <h3 style={{ fontWeight: 'bold', fontSize: '2.5rem', margin: '0.5rem 0 0 0', zIndex: 1 }}>SELAMAT DATANG</h3>
      <p style={{ margin: '0.25rem 0 1rem 0', fontWeight: 'bold', fontSize: '1.75rem', zIndex: 1 }}>SIGAP</p>

      <button
        onClick={handleEnter}
        style={{
          backgroundColor: '#4B3A26',
          color: 'white',
          border: 'none',
          padding: '0.75rem 2rem',
          fontSize: '1.25rem',
          cursor: 'pointer',
          borderRadius: '5px',
          zIndex: 1,
        }}
      >
        Masuk
      </button>
    </div>
  );
};

export default OpeningPage;
