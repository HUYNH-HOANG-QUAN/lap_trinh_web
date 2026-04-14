import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './App.css';

// Tách giao diện Chatbox của Bài 1 thành một Component riêng
const ChatBox = () => (
  <div className="chat-area">
    <header className="chat-header">
      <h1>AI Assistant v1.0</h1>
    </header>
    <section className="messages-container">
      <div className="message bot-message">Chào bạn! Tôi có thể giúp gì cho bạn?</div>
      <div className="message user-message">Tôi muốn tìm hiểu về NLP công nghiệp.</div>
    </section>
    <footer className="input-container">
      <input type="text" placeholder="Nhập câu hỏi tại đây..." />
      <button className="send-btn">Gửi</button>
    </footer>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar chứa Menu điều hướng để chuyển trang theo URI [cite: 23] */}
        <aside className="sidebar">
          <h2 style={{color: '#10a37f', marginBottom: '20px', paddingLeft: '10px'}}>AI Dashboard</h2>
          <nav className="nav-menu">
            {/* Click vào menu để chuyển trang [cite: 25] */}
            <Link to="/" className="nav-link">🏠 Trang Chủ (Home)</Link>
            <Link to="/chat" className="nav-link">💬 Chat Box (Bài 1)</Link>
            <Link to="/about-us" className="nav-link">ℹ️ Giới Thiệu (About)</Link>
          </nav>
        </aside>

        {/* Khu vực hiển thị nội dung khác nhau tùy theo đường dẫn [cite: 27] */}
        <main className="main-content">
          <Routes>
            {/* Cấu hình các Route để website hiển thị đúng trang theo URI [cite: 23, 26, 27] */}
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<ChatBox />} />
            <Route path="/about-us" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;