import Nav from './components/Nav';
import Hero from './components/Hero';
import Playlist from './components/Playlist';
import CTA from './components/CTA';
import WishGame from './components/WishGame';
import Movies from './components/Movies';
import ThisOrThat from './components/ThisOrThat';
import Closing from './components/Closing';

function App() {
  return (
    <>
      <Nav />
      <main className="pt-16 lg:pt-20">
        <Hero />
        <Playlist />
        <WishGame />
        
        <Movies />
        <ThisOrThat />
        <Closing />
      </main>
    </>
  );
}

export default App;
