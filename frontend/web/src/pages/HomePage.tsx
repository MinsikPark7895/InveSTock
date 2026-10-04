import React from 'react';
import Header from '../components/Header';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <Header />
      
      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            AI가 분석하는 당신만의 <br/>
            <span className="text-gradient">초격차 투자 전략</span>
          </h1>
          <p className="hero-subtitle">
            InveSTock의 딥러닝 엔진이 매일 글로벌 시장을 분석하여 가장 확실하고 안전한 투자 타이밍을 제안합니다.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">무료로 시작하기</button>
            <button className="btn-secondary">포트폴리오 둘러보기</button>
          </div>
        </div>
      </main>

      <section className="features-section">
        <div className="feature-card glass">
          <div className="feature-icon">📈</div>
          <h3>실시간 시장 분석</h3>
          <p>글로벌 증시 데이터를 1초 단위로 수집하여 직관적이고 시각적인 핵심 트렌드를 요약 제공합니다.</p>
        </div>
        <div className="feature-card glass">
          <div className="feature-icon">🤖</div>
          <h3>AI 종목 추천</h3>
          <p>백엔드의 강력한 머신러닝 모델이 수만 개의 데이터를 학습해 당신의 성향에 맞는 종목을 발굴합니다.</p>
        </div>
        <div className="feature-card glass">
          <div className="feature-icon">⚡</div>
          <h3>초고속 매매 연동</h3>
          <p>지연 시간 없는 매매 시스템으로 최적의 타이밍을 절대 놓치지 마세요.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
