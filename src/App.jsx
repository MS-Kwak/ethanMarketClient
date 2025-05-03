import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import UploadPage from './pages/UploadPage';
import Product from './pages/Product';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const nav = useNavigate();
  const onClickNewDirectButton = () => {
    nav('/upload');
  };

  return (
    <>
      <Header onClick={onClickNewDirectButton} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
