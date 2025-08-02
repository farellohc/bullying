import React from 'react';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  {
    id: 1,
    title: 'Form Pelaporan Perundungan ',
    description: 'Siswa bisa melapor dengan nama asli atau anonim.',
    icon: 'perundungan.jpeg',
  },
  {
    id: 2,
    title: 'Layanan Konseling',
    description: 'Layanan Konseling Online atau Offline',
    icon: 'konseling.jpeg',
  },
  {
    id: 3,
    title: 'Admin Sekolah',
    description: '(Untuk Guru/BK)',
    icon: 'admin.jpeg',
  },
  {
    id: 4,
    title: 'Pusat Informasi Hukum',
    description: 'Informasi hukum yang relevan dan mudah dipahami siswa ',
    icon: 'hukum.jpeg',
  },
  {
    id: 5,
    title: 'Deskripsi Tim',
    description: 'Informasi Tim',
    icon: 'tim.jpeg',
  },
];

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleMenuClick = (id) => {
    if (id === 1) {
      navigate('/pelaporan');
    } else if (id === 2) {
      navigate('/counseling');
    } else if (id === 3) {
      navigate('/admin');
    } else if (id === 4) {
      navigate('/legal');
    } else if (id === 5) {
      navigate('/team');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'white',
      color: '#4B3A26',
      fontFamily: 'Arial, sans-serif',
      padding: '2rem 1rem 4rem',
      position: 'relative',
      overflowY: 'auto',
    }}>
      {/* Background shapes */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '150px',
        height: '150px',
        background: 'linear-gradient(315deg, #4B3A26 0%, #3e423eff 100%)',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '150px',
        height: '150px',
        background: 'linear-gradient(135deg, #4B3A26 0%, #3e423eff 100%)',
        clipPath: 'polygon(0 100%, 0 0, 100% 100%)',
        zIndex: 0,
      }} />

      <h3 style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '1rem', zIndex: 1 }}>SELAMAT DATANG</h3>
      <p style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '2rem', zIndex: 1 }}>SIGAP</p>

      <div style={{ zIndex: 1 }}>
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => handleMenuClick(item.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#4B3A26',
              color: 'white',
              borderRadius: '10px',
              padding: '1rem',
              marginBottom: index === menuItems.length - 1 ? '2.5rem' : '1rem', // spacing ekstra untuk item terakhir
              cursor: 'pointer',
              boxShadow: '0 0 5px rgba(0,0,0,0.1)',
            }}
          >
            <img src={item.icon} alt={item.title} style={{ width: '50px', height: '50px', marginRight: '1rem' }} />
            <div>
              <h4 style={{ margin: 0 }}>{item.title}</h4>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;