import React from 'react';

const newsItems = [
  {
    id: 1,
    title: 'Festival kegiatan bulan ramadhan',
    image: 'https://i.ibb.co/7vDLJFZ/festival-ramadhan.jpg',
  },
  {
    id: 2,
    title: 'Semangat mengajar bulan ramadhan',
    image: 'https://i.ibb.co/2nWqZqZ/teaching-ramadhan.jpg',
  },
  {
    id: 3,
    title: 'Pemberian hadiah kepada murid berprestasi',
    image: 'https://i.ibb.co/3vJ7Z9v/award-ceremony.jpg',
  },
];

const NewsPage = () => {
  return (
    <div style={{
      height: '100vh',
      backgroundColor: 'white',
      color: '#4B3A26',
      fontFamily: 'Arial, sans-serif',
      padding: '1rem',
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

      <h3 style={{ fontWeight: 'bold', marginBottom: '1rem', zIndex: 1 }}>BERITA KEGIATAN</h3>

      <div style={{ zIndex: 1 }}>
        {newsItems.map((item) => (
          <div key={item.id} style={{ marginBottom: '1.5rem' }}>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: '100%', borderRadius: '10px', marginBottom: '0.5rem' }}
            />
            <p style={{ margin: 0 }}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
