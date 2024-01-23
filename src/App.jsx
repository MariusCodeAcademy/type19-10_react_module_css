import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import './styles/App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TourPage from './pages/TourPage';

export default function App() {
  return (
    <div className='App'>
      <Header />
      {/* <hr /> */}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/tours' element={<TourPage />} />
        <Route path='*' element={<h1>404 page not found</h1>} />
      </Routes>
    </div>
  );
}
