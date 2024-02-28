import './App.css';
import { Navbar } from './components/navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/home';
import { Prices } from './pages/prices';
import { About } from './pages/about';
import { Reviews } from './pages/reviews';
import { Book } from './pages/book';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/prices' element={<Prices />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/reviews' element={<Reviews />}/>
          <Route path='/book-now' element={<Book />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
