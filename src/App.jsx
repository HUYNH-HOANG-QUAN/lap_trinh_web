import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  // State để lưu danh sách chat (AIModels) và nội dung nhập
  const [chatHistory, setChatHistory] = useState([]);
  const [inputText, setInputText] = useState('');
  
  const API_URL = "http://localhost:5287/api/AIModels";

  // 1. GET: Lấy lịch sử chat từ Database khi vừa mở web
  const fetchHistory = async () => {
    try {
      const res = await axios.get(API_URL);
      setChatHistory(res.data);
    } catch (err) {
      console.error("Lỗi lấy dữ liệu:", err);
    }
  };

  useEffect(() => { fetchHistory(); }, []);

  // 2. POST: Khi nhấn nút "Gửi", lưu câu hỏi vào Database
  const handleSend = async () => {
    if (!inputText.trim()) return;
    try {
      await axios.post(API_URL, { name: inputText, accuracy: 1.0 });
      setInputText('');
      fetchHistory(); // Load lại danh sách sau khi lưu
    } catch (err) {
      console.error("Lỗi gửi tin nhắn:", err);
    }
  };

  // 3. DELETE: Xóa một phiên chat
  const deleteChat = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchHistory();
    } catch (err) {
      console.error("Lỗi xóa chat:", err);
    }
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <button className="new-chat-btn" onClick={() => setChatHistory([])}>+ New Chat</button>
        <nav className="chat-history">
          {/* Hiển thị danh sách từ Database */}
          {chatHistory.map(item => (
            <div key={item.id} className="history-item">
              <p>{item.name}</p>
              <button onClick={() => deleteChat(item.id)} style={{color: 'red'}}>x</button>
            </div>
          ))}
        </nav>
      </aside>

      <main className="chat-area">
        <header className="chat-header">
          <h1>AI Assistant v1.0</h1>
        </header>

        <section className="messages-container">
          <div className="message bot-message">Chào {inputText || 'Quân'}! Tôi đã sẵn sàng kết nối SQL Server.</div>
          {chatHistory.slice(-3).map(item => (
             <div key={item.id} className="message user-message">{item.name}</div>
          ))}
        </section>

        <footer className="input-container">
          <input 
            type="text" 
            placeholder="Nhập câu hỏi tại đây..." 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button className="send-btn" onClick={handleSend}>Gửi</button>
        </footer>
      </main>
    </div>
  )
}

export default App
