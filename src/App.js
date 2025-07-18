import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import { themeConfig } from './theme/themeConfig';
import { SessionProvider } from './context/SessionContext';
import { ScoreProvider } from './context/ScoreContext';
import { ExerciseProvider } from './context/ExerciseContext';
import Header from './components/layout/Header';
import Home from './pages/Home';
import Stretch from './pages/Stretch';
import Pomodoro from './pages/Pomodoro';
import PosturePage from './pages/PosturePage';
import Calendar from './pages/Calendar';
import './App.css';

const { Content } = Layout;

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header showBackButton={!isHomePage} />
      <Content style={{ 
        marginTop: 64, // Height of the header
        minHeight: 'calc(100vh - 64px)', // Full height minus header
        background: '#f5f5f5'
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/stretch" element={<Stretch />} />
          <Route path="/posture" element={<PosturePage />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </Content>
    </Layout>
  );
}

function App() {
  return (
    <ConfigProvider theme={themeConfig}>
      <ScoreProvider>
        <ExerciseProvider>
          <SessionProvider>
            <Router>
              <AppContent />
            </Router>
          </SessionProvider>
        </ExerciseProvider>
      </ScoreProvider>
    </ConfigProvider>
  );
}

export default App;
