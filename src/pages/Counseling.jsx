import React, { useState, useEffect, useRef } from 'react';

const Counseling = () => {
  const [chatMessages, setChatMessages] = useState([
    { sender: 'counselor', text: 'Halo, ada yang bisa saya bantu?' },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [schedule, setSchedule] = useState({
    date: '',
    time: '',
    mode: 'offline',
  });
  const [reminderSet, setReminderSet] = useState(false);
  const chatEndRef = useRef(null);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    setChatMessages([...chatMessages, { sender: 'user', text: inputMessage }]);
    setInputMessage('');
    // Simulate counselor reply
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        { sender: 'counselor', text: 'Terima kasih atas pesan Anda. Kami akan segera menindaklanjuti.' },
      ]);
    }, 1000);
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleScheduleChange = (e) => {
    const { name, value } = e.target;
    setSchedule((prev) => ({ ...prev, [name]: value }));
  };

  const handleSetReminder = () => {
    if (!schedule.date || !schedule.time) {
      alert('Silakan pilih tanggal dan waktu terlebih dahulu.');
      return;
    }
    const reminderTime = new Date(`${schedule.date}T${schedule.time}`);
    const now = new Date();
    const timeout = reminderTime.getTime() - now.getTime();

    if (timeout <= 0) {
      alert('Waktu yang dipilih sudah lewat.');
      return;
    }

    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          setTimeout(() => {
            new Notification('Pengingat Konseling', {
              body: `Jadwal konseling Anda pada ${schedule.date} pukul ${schedule.time} (${schedule.mode})`,
            });
          }, timeout);
          alert('Pengingat berhasil diatur.');
          setReminderSet(true);
        } else {
          alert('Izin notifikasi ditolak.');
        }
      });
    } else {
      alert('Browser Anda tidak mendukung notifikasi.');
    }
  };

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages]);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Layanan Konseling Terintegrasi</h1>
      <div style={{ marginTop: '1rem' }}>
        <h2>Chat dengan Konselor</h2>
        <div
          style={{
            border: '1px solid #4B3A26',
            padding: '1rem',
            maxHeight: '200px',
            overflowY: 'auto',
            marginBottom: '1rem',
            backgroundColor: '#f9f9f9',
          }}
        >
          {chatMessages.map((msg, index) => (
            <p
              key={index}
              style={{
                textAlign: msg.sender === 'user' ? 'right' : 'left',
                margin: '0.25rem 0',
                color: msg.sender === 'user' ? '#4B3A26' : '#333',
                fontWeight: msg.sender === 'user' ? 'bold' : 'normal',
              }}
            >
              {msg.text}
            </p>
          ))}
          <div ref={chatEndRef} />
        </div>
        <input
          type="text"
          value={inputMessage}
          onChange={handleInputChange}
          placeholder="Ketik pesan Anda..."
          style={{ width: '80%', padding: '0.5rem' }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            backgroundColor: '#4B3A26',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            marginLeft: '0.5rem',
            cursor: 'pointer',
          }}
        >
          Kirim
        </button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>Jadwal Konseling</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSetReminder();
          }}
        >
          <label>
            Tanggal:
            <input
              type="date"
              name="date"
              value={schedule.date}
              onChange={handleScheduleChange}
              required
              style={{ marginLeft: '0.5rem' }}
            />
          </label>
          <label style={{ marginLeft: '1rem' }}>
            Waktu:
            <input
              type="time"
              name="time"
              value={schedule.time}
              onChange={handleScheduleChange}
              required
              style={{ marginLeft: '0.5rem' }}
            />
          </label>
          <label style={{ marginLeft: '1rem' }}>
            Mode:
            <select
              name="mode"
              value={schedule.mode}
              onChange={handleScheduleChange}
              style={{ marginLeft: '0.5rem' }}
            >
              <option value="offline">Offline</option>
              <option value="online">Online</option>
            </select>
          </label>
          <button
            type="submit"
            style={{
              marginLeft: '1rem',
              backgroundColor: '#4B3A26',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
            }}
          >
            Atur Pengingat
          </button>
        </form>
        {reminderSet && <p style={{ color: '#4B3A26', marginTop: '0.5rem' }}>Pengingat telah diatur.</p>}
      </div>
    </div>
  );
};

export default Counseling;
