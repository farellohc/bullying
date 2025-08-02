
import React, { useState } from 'react';

const AdminDashboard = ({ reports, setReports }) => {
  const [editingId, setEditingId] = useState(null);
  const [newStatus, setNewStatus] = useState('');
  const [newResponse, setNewResponse] = useState('');

  const startEdit = (report) => {
    setEditingId(report.id);
    setNewStatus(report.status);
    setNewResponse(report.response);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setNewStatus('');
    setNewResponse('');
  };

  const saveEdit = (id) => {
    setReports((prev) =>
      prev.map((report) =>
        report.id === id ? { ...report, status: newStatus, response: newResponse } : report
      )
    );
    cancelEdit();
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Dashboard Admin Sekolah</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ backgroundColor: '#4B3A26', color: 'white' }}>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '0.5rem' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '0.5rem' }}>Nama Pelapor</th>
            <th style={{ border: '1px solid #ddd', padding: '0.5rem' }}>Jenis Perundungan</th>
            <th style={{ border: '1px solid #ddd', padding: '0.5rem' }}>Status</th>
            <th style={{ border: '1px solid #ddd', padding: '0.5rem' }}>Respon / Tindak Lanjut</th>
            <th style={{ border: '1px solid #ddd', padding: '0.5rem' }}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>{report.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>{report.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>{report.type}</td>
              <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>
                {editingId === report.id ? (
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    style={{ width: '100%' }}
                  >
                    <option value="Dalam Penanganan">Dalam Penanganan</option>
                    <option value="Selesai">Selesai</option>
                    <option value="Ditunda">Ditunda</option>
                  </select>
                ) : (
                  report.status
                )}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>
                {editingId === report.id ? (
                  <textarea
                    value={newResponse}
                    onChange={(e) => setNewResponse(e.target.value)}
                    rows={3}
                    style={{ width: '100%' }}
                  />
                ) : (
                  report.response || '-'
                )}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '0.5rem' }}>
                {editingId === report.id ? (
                  <>
                    <button onClick={() => saveEdit(report.id)} style={{ marginRight: '0.5rem' }}>
                      Simpan
                    </button>
                    <button onClick={cancelEdit}>Batal</button>
                  </>
                ) : (
                  <button onClick={() => startEdit(report)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
