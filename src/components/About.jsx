import React from 'react';

/**
 * About Component
 * Giới thiệu về sứ mệnh và công nghệ đằng sau Agent AI
 */
const About = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Về Chúng Tôi</h1>
        <p style={styles.subtitle}>
          Kết nối trí tuệ nhân tạo với sức khỏe cộng đồng.
        </p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Sứ Mệnh</h2>
        <p style={styles.text}>
          Chúng tôi tin rằng việc duy trì một chế độ dinh dưỡng lành mạnh không nên là một gánh nặng. 
          Với sức mạnh của <strong>Natural Language Processing (NLP)</strong> và mô hình <strong>RAG (Retrieval-Augmented Generation)</strong>, 
          chúng tôi xây dựng những giải pháp hỗ trợ người dùng xây dựng thực đơn khoa học chỉ qua vài câu lệnh đơn giản.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Công Nghệ Cốt Lõi</h2>
        <div style={styles.grid}>
          <div style={styles.techCard}>
            <h3>AI Engine</h3>
            <p>Tích hợp Gemini và các mô hình ngôn ngữ lớn (LLMs) để hiểu sâu ý định của người dùng.</p>
          </div>
          <div style={styles.techCard}>
            <h3>Nutrition Data</h3>
            <p>Cơ sở dữ liệu thực phẩm khổng lồ được chuẩn hóa, đảm bảo tính chính xác trong từng thành phần dinh dưỡng.</p>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>Liên hệ: contact@nutritionagent.ai | Dự án thực hành React Router</p>
      </footer>
    </div>
  );
};

// Styles nội tuyến
const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: '"Segoe UI", Roboto, sans-serif',
    color: '#2c3e50',
    lineHeight: '1.8',
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px',
    borderBottom: '2px solid #ecf0f1',
    paddingBottom: '20px',
  },
  title: {
    fontSize: '2.8rem',
    color: '#16a085',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.3rem',
    color: '#7f8c8d',
    fontStyle: 'italic',
  },
  section: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    color: '#2c3e50',
    borderLeft: '5px solid #16a085',
    paddingLeft: '15px',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  techCard: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    border: '1px solid #ddd',
  },
  footer: {
    marginTop: '60px',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#95a5a6',
  }
};

export default About;