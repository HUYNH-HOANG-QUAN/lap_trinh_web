import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* Sidebar: Chứa danh sách các phiên chat cũ */}
      <aside className="sidebar">
        <button className="new-chat-btn">+ New Chat</button>
        <nav className="chat-history">
          <p>Dự án RAG Dinh dưỡng</p>
          <p>Nghiên cứu NLP Tiếng Việt</p>
        </nav>
      </aside>

      {/* Main Content: Khung chat chính */}
      <main className="chat-area">
        <header className="chat-header">
          <h1>AI Assistant v1.0</h1>
        </header>

        <section className="messages-container">
          <div className="message bot-message">Chào bạn! Tôi có thể giúp gì cho bạn hôm nay?</div>
          <div className="message user-message">Tôi đang làm bài tập thực hành số 1.</div>
        </section>

        <footer className="input-container">
          <input type="text" placeholder="Nhập câu hỏi tại đây..." />
          <button className="send-btn">Gửi</button>
        </footer>
      </main>
    </div>
  )
}

export default App