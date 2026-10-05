import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header glass">
      <div className="header-logo">
        <span className="logo-text">Inve<span className="text-gradient">ST</span>ock</span>
      </div>
      <nav className="header-nav">
        <a href="#features">핵심 기능</a>
        <a href="#ai-insight">AI 인사이트</a>
        <a href="#markets">시장 동향</a>
      </nav>
      <div className="header-actions">
        <button className="login-btn">로그인</button>
      </div>
    </header>
  );
};

export default Header;
