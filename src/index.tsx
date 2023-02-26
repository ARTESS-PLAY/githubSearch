import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';

const rootDOM = document.getElementById('root');

if (rootDOM) {
    const root = ReactDOM.createRoot(rootDOM);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
} else {
    alert('Нет рут элемента');
}
