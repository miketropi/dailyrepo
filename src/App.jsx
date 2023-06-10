import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import '@fontsource-variable/roboto-flex';
import './assets/theme.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {

  return (
    <div id="PAGE">
      <Header />
      <main>
        <Routes>
          <Route path='*' element={<NotFound />}/>
          <Route path="/" element={ <Home /> } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
