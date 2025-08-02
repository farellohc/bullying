import React, { useState } from 'react';

const laws = [
  {
    id: 1,
    title: 'UU No. 35 Tahun 2014 (Perlindungan Anak)',
    content: `
      Tentang: Perubahan atas Undang-Undang Nomor 23 Tahun 2002 tentang Perlindungan Anak. 

      Isi pokok: Melindungi hak hak anak dari kekerasan, eksploitasi, penelantaran, dan diskriminasi. 
      Hak anak menurut UU ini: Hak hidup, tumbuh berkembang, mendapat pendidikan, identitas, perlindungan dari kekerasan, dan berpartisipasi. 
      Tanggung jawab negara, orang tua, dan masyarakat untuk menjamin pemenuhan hak anak.
    `,
  },
  {
    id: 2,
    title: 'UU No. 20 Tahun 2003 (Sistem Pendidikan Nasional)',
    content: `
      Tentang: Sistem Peradilan Pidana Anak (UU SPPA)

      Isi pokok: Menyediakan sistem hukum khusus bagi anak yang berhadapan dengan hukum (ABH), baik sebagai pelaku, korban, atau saksi.
      Prinsip utama: Diversi, restorative justice, serta memperhatikan kepentingan terbaik bagi anak.
      Batas usia anak: Anak didefinisikan sebagai seseorang yang belum berusia 18 tahun.
    `,
  },
  {
    id: 3,
    title: 'Permendikbudristek No. 46 Tahun 2023',
    content: `
      Tentang: Ketenagakerjaan (terkait pekerja anak)

      Melarang mempekerjakan anak di bawah usia 18 tahun, kecuali untuk pekerjaan ringan dan memenuhi syarat tertentu.

    `,
  },
  {
    id: 4,
    title: 'Undang-Undang Nomor 20 Tahun 2003',
    content: `
      Tentang: Sistem Pendidikan Nasional

      Menjamin hak anak atas pendidikan dasar dan menengah secara merata dan adil.

    `,
  },

  {
    id: 5,
    title: 'Undang-Undang Nomor 19 Tahun 2016',
    content: `
      Tentang: Perubahan atas UU ITE (Informasi dan Transaksi Elektronik)

      Mengatur perlindungan anak terhadap eksploitasi online, perundungan digital, dan penyebaran konten negatif yang menyasar anak-anak.
    `,
  },

  {
    id: 6,
    title: 'Undang-Undang Nomor 17 Tahun 2016',
    content: `
      Tentang: Penetapan Perpu tentang Perlindungan Anak menjadi UU

      Memperberat hukuman bagi pelaku kejahatan seksual terhadap anak, termasuk hukuman kebiri kimia dan pemasangan alat deteksi elektronik.
    `,
  },
];

const videos = [
  {
    id: 1,
    title: 'Video Edukasi Tentang Hak-Hak Siswa',
    videoUrl: 'https://www.youtube.com/embed/5ceIhxUa-Fo',
  },
];

const infographicItems = [
  { icon: '🛡️', label: 'Aman dari Kekerasan' },
  { icon: '🗣️', label: 'Bebas Berpendapat' },
  { icon: '🔒', label: 'Privasi Dilindungi' },
  { icon: '🙅‍♀️', label: 'Anti Intimidasi' },
  { icon: '🤝', label: 'Ada Pendamping' },
  { icon: '⚖️', label: 'Perlakuan Setara' },
  { icon: '🚫', label: 'Tolak Pelecehan' },
  { icon: '🎓', label: 'Belajar Nyaman' },
];

const LegalCenter = () => {
  const [selectedLaw, setSelectedLaw] = useState(null);

  const handleLawClick = (law) => {
    setSelectedLaw(law);
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Pusat Informasi Hukum (Legal Center)</h1>

      {/* Informasi Hukum */}
      <section>
        <h2>Informasi Hukum</h2>
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          {laws.map((law) => (
            <li
              key={law.id}
              onClick={() => handleLawClick(law)}
            style={{
              cursor: 'pointer',
              color: '#4B3A26',
              marginBottom: '0.5rem',
              textDecoration: selectedLaw?.id === law.id ? 'underline' : 'none',
              fontWeight: 'bold',
              transition: 'color 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#161716ff'}
            onMouseLeave={e => e.currentTarget.style.color = '#4B3A26'}
            >
              {law.title}
            </li>
          ))}
        </ul>
        {selectedLaw && (
          <div
            style={{
              border: '1px solid #4B3A26',
              padding: '1rem',
              marginTop: '1rem',
              backgroundColor: '#f9f9f9',
            }}
          >
            <h3>{selectedLaw.title}</h3>
            <div>
              {selectedLaw.content.split('\\n').map((line, index) => {
                const trimmedLine = line.trim();
                if (trimmedLine.startsWith('•') || trimmedLine.startsWith('-')) {
                  return <li key={index} style={{ marginLeft: '1.5rem' }}>{trimmedLine.substring(1).trim()}</li>;
                } else if (trimmedLine.length === 0) {
                  return <br key={index} />;
                } else {
                  return <p key={index} style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>{trimmedLine}</p>;
                }
              })}
            </div>
          </div>
        )}
      </section>

      {/* Infografis Buatan Sendiri */}
      <section style={{ marginTop: '2rem' }}>
        <h2>Apa Saja Hak-Hak Siswa?</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1rem',
            marginTop: '1rem',
          }}
        >
          {infographicItems.map((item, idx) => (
            <div
              key={idx}
              style={{
                border: '1px solid #ccc',
                borderRadius: '10px',
                padding: '1rem',
                textAlign: 'center',
                backgroundColor: '#c6c5c5ff',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              }}
            >
              <div style={{ fontSize: '2rem' }}>{item.icon}</div>
              <div style={{ marginTop: '0.5rem', fontWeight: 'bold', color: '#333' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Video */}
      <section style={{ marginTop: '2rem' }}>
        <h2>Video Edukasi</h2>
        {videos.map((vid) => (
          <div key={vid.id} style={{ marginBottom: '1rem' }}>
            <h3>{vid.title}</h3>
            <div
              style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                overflow: 'hidden',
              }}
            >
              <iframe
                src={vid.videoUrl}
                title={vid.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              ></iframe>
            </div>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section style={{ marginTop: '2rem' }}>
        <h2>FAQ</h2>
        <p><b>Apa yang harus saya lakukan jika hak saya dilanggar?</b></p>
        <p>
          Jika hak Anda dilanggar, segera laporkan ke pihak sekolah atau konselor. Anda juga bisa
          mencari bantuan hukum melalui lembaga perlindungan anak atau instansi resmi terkait.
        </p>
      </section>
    </div>
  );
};

export default LegalCenter;
