import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GameBoard from './pages/gamePlay/GameBoard';
import Winner from './pages/winner/Winner';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Winner />
  </React.StrictMode>
);

