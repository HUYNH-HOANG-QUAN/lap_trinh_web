import React from 'react';

/**
 * Home Component
 * Đây là trang đích (Landing Page) giới thiệu khả năng của AI Agent
 */
const Home = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Chào mừng bạn đến với Nutrition AI Agent</h1>
        <p style={styles.subtitle}>
          Giải pháp tối ưu cho sức khỏe và vóc dáng của bạn thông qua trí tuệ nhân tạo.
        </p>
      </header>

      <section style={styles.content}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Cá nhân hóa thực đơn hàng tuần</h2>
          <p style={styles.description}>
            Agent của chúng tôi không chỉ đơn thuần là một công cụ tính toán. 
            Dựa trên các chỉ số cá nhân và mục tiêu hình thể, AI sẽ phân tích và 
            <strong> đưa ra các đề xuất món ăn chi tiết cho bạn trong suốt 7 ngày</strong>.
          </p>
          <ul style={styles.list}>
            <li>✨ Tối ưu hóa lượng Calorie và Macro (Protein, Carb, Fat).</li>
            <li>✨ Đa dạng hóa nguồn thực phẩm, tránh cảm giác nhàm chán.</li>
            <li>✨ Tích hợp kiến thức dinh dưỡng chuẩn y khoa.</li>
          </ul>
          <button style={styles.button}>Bắt đầu lập kế hoạch ngay</button>
        </div>
      </section>
    </div>
  );
};

// Style nội tuyến cơ bản để bạn xem kết quả ngay mà không cần file CSS riêng
const styles = {
  container: {
    padding: '40px 20px',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    maxWidth: '800px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#7f8c8d',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    borderLeft: '5px solid #27ae60',
  },
  cardTitle: {
    color: '#27ae60',
    marginTop: '0',
  },
  description: {
    fontSize: '1.1rem',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
    marginTop: '20px',
  },
  button: {
    marginTop: '20px',
    padding: '12px 24px',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
  }
};

export default Home;