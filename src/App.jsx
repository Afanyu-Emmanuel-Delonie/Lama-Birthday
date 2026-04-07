import { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Playlist from './components/Playlist';
import CTA from './components/CTA';
import WishGame from './components/WishGame';
import Movies from './components/Movies';
import ThisOrThat from './components/ThisOrThat';
import Closing from './components/Closing';
import ScrollToTop from './components/ScrollToTop';
import Splash from './components/Splash';

function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <Splash onDone={() => setSplashDone(true)} />}
      <div className={`transition-opacity duration-700 ${splashDone ? 'opacity-100' : 'opacity-0'}`}>
        <Nav />
        <main className="pt-16 lg:pt-20">
          <Hero />
          <Playlist />
          <WishGame />
          <CTA />
          <Movies />
          <ThisOrThat />
          <Closing />
        </main>
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
