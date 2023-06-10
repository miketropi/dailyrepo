import Logo from './Logo';
import Nav from './Nav';

export default function () {
  return <header id="MAIN_HEADER">
    <div className="site-container">
      <div className="header">
        <Logo />
        <div className="main-nav">
          <Nav />
        </div>
      </div>
    </div>
  </header>
}