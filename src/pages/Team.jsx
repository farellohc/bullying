import React from 'react';

const teamMembers = [
  {
    name: 'Andi',
    role: 'Project Manager',
    photo: 'andi.jpeg',
    description: 'Memimpin proyek dan mengatur tim.',
  },
  {
    name: 'Budi',
    role: 'Developer',
    photo: 'budi.jpeg',
    description: 'Mengembangkan aplikasi dan fitur.',
  },
  {
    name: 'Citra',
    role: 'Designer',
    photo: 'citra.jpeg',
    description: 'Mendesain tampilan dan pengalaman pengguna.',
  },
];

const Team = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Tim Kami</h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {teamMembers.map((member) => (
          <div key={member.name} style={{ textAlign: 'center' }}>
            <img src={member.photo} alt={member.name} style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '8px' }} />
            <h3>{member.name}</h3>
            <p><i>{member.role}</i></p>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
