
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="haburi-app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#home" className="logo">哈布日影视工作室</a>
          
          {/* Pure CSS Mobile Menu Mechanism */}
          <input type="checkbox" id="menu-toggle" className="menu-toggle-checkbox" />
          <label htmlFor="menu-toggle" className="hamburger-icon">
            <span className="line"></span>
            <span className="line"></span>
          </label>

          <ul className="nav-links">
            <li><a href="#home">首页</a></li>
            <li><a href="#about">关于我</a></li>
            <li><a href="#portfolio">作品展示</a></li>
            <li><a href="#services">服务范围</a></li>
            <li><a href="#contact">联系方式</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container hero-content">
          <img 
            src="https://i.ibb.co/6J4bpQyX/IMG-3206.jpg" 
            alt="Mongolian Script Name" 
            className="hero-script-image"
          />
          <img 
            src="https://i.ibb.co/jP8wXsDm/2026-01-14-8-28-48.png" 
            alt="哈布日影视工作室 Logo" 
            className="hero-logo" 
          />
          <h1 className="hero-title">哈布日影视工作室</h1>
          <p className="hero-subtitle">用镜头捕捉光影，用影像讲述故事</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray">
        <div className="container">
          <div className="section-header">
            <h2>关于主理人</h2>
          </div>
          <div className="about-content">
            <p>
              深耕电影摄影领域十余载，我曾以电影摄影师的身份，穿梭于大银幕长片、小众独立电影与多元微电影的片场。
              从光影构图到叙事镜头，从现场调度到细节捕捉，上千个拍摄日夜的打磨，让我对“用镜头讲故事”有着刻入骨髓的专业执念。
            </p>
            <p>
              如今，我创立哈布日影视工作室，将院线级的拍摄标准与创作经验，融入更广阔的影像领域。我们致力于用电影级的质感，
              记录每一个珍贵的瞬间，讲述每一个动人的故事。
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>作品精选</h2>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img 
                src="https://i.ibb.co/KcxM0pgN/85ca59e71ce9a228c1300338d9399444.jpg" 
                alt="阿苏的夏天" 
                className="portfolio-image"
              />
              <div className="portfolio-info">
                <h3>《阿苏的夏天》</h3>
                <span className="portfolio-tag">长片电影</span>
              </div>
            </div>
            <div className="portfolio-item">
              <img 
                src="https://i.ibb.co/KcVXWFWG/IMG-8369.jpg" 
                alt="兔子尾巴经过草原" 
                className="portfolio-image"
              />
              <div className="portfolio-info">
                <h3>《兔子尾巴经过草原》</h3>
                <span className="portfolio-tag">独立短片</span>
              </div>
            </div>
            <div className="portfolio-item">
              <img 
                src="https://i.ibb.co/9HB6F0Vz/IMG-8368.jpg" 
                alt="心灵博物馆" 
                className="portfolio-image"
              />
              <div className="portfolio-info">
                <h3>《心灵博物馆》</h3>
                <span className="portfolio-tag">微电影</span>
              </div>
            </div>
            <div className="portfolio-item">
              <img 
                src="https://i.ibb.co/DD7nSjw9/p2224614823.webp" 
                alt="狼图腾" 
                className="portfolio-image"
              />
              <div className="portfolio-info">
                <h3>《狼图腾》</h3>
                <span className="portfolio-tag">好莱坞电影</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray">
        <div className="container">
          <div className="section-header">
            <h2>服务内容</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <h3>长片电影拍摄</h3>
              <p>Cinematography</p>
            </div>
            <div className="service-card">
              <h3>短片/微电影创作</h3>
              <p>Short Films</p>
            </div>
            <div className="service-card">
              <h3>MV 拍摄与制作</h3>
              <p>Music Video</p>
            </div>
            <div className="service-card">
              <h3>婚礼纪实/宣传片</h3>
              <p>Wedding</p>
            </div>
            <div className="service-card">
              <h3>品牌广告拍摄</h3>
              <p>Commercial</p>
            </div>
            <div className="service-card">
              <h3>企业宣传片定制</h3>
              <p>Corporate Video</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="section-header">
            <h2>联系我们</h2>
          </div>
          <div className="contact-wrapper">
            <div className="contact-item">
              <span className="contact-label">微信 / WeChat</span>
              <span className="contact-value">244321240</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">电话 / Phone</span>
              <span className="contact-value">15661013682</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">邮箱 / Email</span>
              <span className="contact-value">contact@haburi.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">地址 / Address</span>
              <span className="contact-value">内蒙古赤峰市</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 哈布日影视工作室 保留所有权利</p>
        </div>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<React.StrictMode><App /></React.StrictMode>);
}
