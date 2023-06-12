import { Routes, Route } from 'react-router-dom';
import '@fontsource-variable/lexend';
import '@fontsource-variable/libre-bodoni';
import './assets/theme.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Topics from './pages/topic';
import NotFound from './pages/NotFound';

function App() {

  return (
    <div id="PAGE">
      <Header />
      <main>
        <Routes>
          <Route path='*' element={ <NotFound /> }/>
          <Route path="/" element={ <Home /> } />
          <Route path="/topics" element={ <Topics /> } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
