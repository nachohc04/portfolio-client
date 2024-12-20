import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/ui/navbar.jsx'

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
// const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const SelectedProject = lazy(() => import ('./pages/SelectedProject'));
const NotFoundPage = lazy(() => import('./pages/NotFound'));
const Loader = lazy(() => import('./pages/Loading'));


// const Loader = () => <div>Loading...</div>;

const Main = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <div className="h-screen w-screen flex flex-col bg-zinc-900 ">
        <Navbar />
        <div className="h-full flex-grow z-40 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
            <Route path="/projects/:projectId" element={<SelectedProject />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Suspense>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
