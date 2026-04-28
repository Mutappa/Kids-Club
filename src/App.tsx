/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingBackground from './components/FloatingBackground';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy load pages for better performance and smaller initial chunks
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Programs = lazy(() => import('./pages/Programs'));
const Facilities = lazy(() => import('./pages/Facilities'));
const Contact = lazy(() => import('./pages/Contact'));
const Admin = lazy(() => import('./pages/Admin'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Preschool = lazy(() => import('./pages/programs/Preschool'));
const ActivityClub = lazy(() => import('./pages/programs/ActivityClub'));
const ReadingCircle = lazy(() => import('./pages/programs/ReadingCircle'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading fallback
const PageLoader = () => (
  <div className="page-loader-container">
    <div className="spinner"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout">
        <FloatingBackground />
        <Navbar />
        <main className="main-content pt-20">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/programs/preschool" element={<Preschool />} />
              <Route path="/programs/activity-club" element={<ActivityClub />} />
              <Route path="/programs/reading-circle" element={<ReadingCircle />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
