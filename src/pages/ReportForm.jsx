import React, { useState } from 'react';

const ReportForm = ({ addReport }) => {
  const [formData, setFormData] = useState({
    name: '',
    anonymous: false,
    bullyingType: '',
    evidence: null,
  });

  const bullyingTypes = ['Verbal', 'Fisik', 'Sosial', 'Daring'];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
      if (name === 'anonymous' && checked) {
        setFormData((prev) => ({ ...prev, name: '' }));
      }
    } else if (type === 'file') {
      setFormData({ ...formData, evidence: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare report data
    const reportData = {
      name: formData.anonymous ? 'Anonim' : formData.name || 'Anonim',
      type: formData.bullyingType,
      evidence: formData.evidence ? formData.evidence.name : '',
    };
    addReport(reportData);
    alert('Laporan terkirim!');
    // Reset form
    setFormData({
      name: '',
      anonymous: false,
      bullyingType: '',
      evidence: null,
    });
  };

  return (
    <div style={{
      padding: '1rem',
      backgroundColor: '#f0f0f0',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }}>
      <h1 style={{ textAlign: 'center', color: '#4B3A26' }}>Form Pelaporan Perundungan Anonim & Terbuka</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label style={{ display: 'flex', flexDirection: 'column', color: '#4B3A26' }}>
          Nama:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={formData.anonymous}
            placeholder={formData.anonymous ? 'Anonim' : 'Masukkan nama Anda'}
            style={{
              marginTop: '0.5rem',
              padding: '0.5rem',
              borderRadius: '8px',
              border: '1px solid #ccc',
            }}
          />
        </label>
        <label style={{ color: '#4B3A26' }}>
          <input
            type="checkbox"
            name="anonymous"
            checked={formData.anonymous}
            onChange={handleChange}
            style={{ marginRight: '0.5rem' }}
          />
          Laporkan sebagai Anonim
        </label>
        <label style={{ color: '#4B3A26' }}>
          Jenis Perundungan:
          <select
            name="bullyingType"
            value={formData.bullyingType}
            onChange={handleChange}
            required
            style={{
              marginTop: '0.5rem',
              padding: '0.5rem',
              borderRadius: '8px',
              border: '1px solid #ccc',
              width: '100%',
            }}
          >
            <option value="">Pilih jenis</option>
            {bullyingTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label style={{ color: '#4B3A26' }}>
          Unggah Bukti:
          <input
            type="file"
            name="evidence"
            accept="image/*,video/*"
            onChange={handleChange}
            style={{ marginTop: '0.5rem' }}
          />
        </label>
        {formData.evidence && (
          <p style={{ color: '#4B3A26' }}>File terpilih: {formData.evidence.name}</p>
        )}
        <button
          type="submit"
          style={{
            backgroundColor: '#4B3A26',
            color: 'white',
            border: 'none',
            padding: '0.75rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '1rem',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#3a2e1f')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#4B3A26')}
        >
          Kirim Laporan
        </button>
      </form>
    </div>
  );
};

export default ReportForm;
