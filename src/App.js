import './App.css';
import AboutUs from './components/aboutus';
import Homepage from './components/homepage/HomePage';
import Footer from './components/layout/footer';
import Header from './components/layout/header';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); 

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div id="top">
        <Header navigateTo={navigateTo} />
        <main>
          {currentPage === 'home' && <Homepage />}
          {currentPage === 'about' && <AboutUs />}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;