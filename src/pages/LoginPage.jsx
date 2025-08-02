import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleConfirm = () => {
    // Add login logic here
    navigate('/dashboard');
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

      <div style={{
        backgroundColor: '#c6c5c5ff',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        zIndex: 1,
        width: '300px',
        maxWidth: '90%',
      }}>
        <h2 style={{ marginBottom: '1rem', color: '#4B3A26' }}>LOGIN</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem',
            marginBottom: '1.25rem',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '1.25rem',
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem',
            marginBottom: '1.25rem',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '1.25rem',
          }}
        />
        <button
          onClick={handleConfirm}
          style={{
            backgroundColor: '#4B3A26',
            color: 'white',
            border: 'none',
            padding: '1rem',
            width: '100%',
            fontSize: '1.25rem',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
