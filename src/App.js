import React, { useState } from 'react';
import './App.scss';
import MainPage from './components/MainPage';
import NotificationPage from './components/NotificationPage';

function App() {

  /* useState to toggle between notification and application pages */
  const [visualMode, setVisualMode] = useState('notificationPage');
  
  if (visualMode === 'notificationPage') {
    return (
      <div className="App">
        <NotificationPage 
          onClick={() => setVisualMode('mainPage')}
        />
      </div>
    );
  }

  if (visualMode === 'mainPage') {
    return (
      <div className="App">
        <MainPage />
      </div>
    );
  }
}

export default App;