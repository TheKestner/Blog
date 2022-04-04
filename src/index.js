import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './routes/about';
import Blog from './routes/blog';
import Projects from './routes/projects';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
      <Route path="about" element={<About />} />
      <Route path='blog' element={<Blog />} />
      <Route path='projects' element={<Projects />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


