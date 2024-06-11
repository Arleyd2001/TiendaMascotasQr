
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


const appDiv = document.createElement('div');
appDiv.id = 'app';
appDiv.innerHTML = '<h1> asda</h1>';
document.body.appendChild(appDiv);

// Simulate a fetch request to the firebase service
fetch('http://firebase:3001')
  .then(response => response.text())
  .then(data => {
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `<p>${data}</p>`;
    document.body.appendChild(messageDiv);
  })
  .catch(error => console.error('Error:', error));
