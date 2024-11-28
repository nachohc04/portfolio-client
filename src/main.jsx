import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/ui/navbar.jsx'


const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Loader = lazy(() => import ('./pages/Loading.jsx'));
// const Loader = () => <div>Loading...</div>;

const Main = () => (
  <Router>
    <Suspense fallback={<>Loading...</>}>
      <div className="h-screen w-screen flex flex-col">
        <Navbar />
        <div className="flex-grow overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Suspense>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
