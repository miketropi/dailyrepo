import { Routes, Route } from 'react-router-dom';
import '@fontsource-variable/lexend';
import '@fontsource-variable/libre-bodoni';
import './assets/theme.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Topics from './pages/topic';
import Topic from './pages/topic/single';
import NotFound from './pages/NotFound';
import Article from './pages/article/single';

function App() {

  return (
    <div id="PAGE">
      <Header />
      <main id='MAIN'>
        <Routes>
          <Route path='*' element={ <NotFound /> }/>

          {/* <Route path="/" element={ <Home /> } /> */}
          <Route path="/:paged?" element={ <Home /> } />

          <Route path="/topic/" element={ <Topics /> } />
          <Route path="/topic/:slug" element={ <Topic /> } />
          <Route path="/article/:slug" element={ <Article /> } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
