import HeaderBar from './components/HeaderBar';
import HeroCarousel from './components/HeroCarousel';
import SocialNotes from './components/SocialNotes';
import { Container } from 'react-bootstrap';
import SiteFooter from './components/SiteFooter';

export default function App() {
  return (
    <>
      <HeaderBar />
      <HeroCarousel />

      <Container className="py-4" id="home">
        <h2 className="mb-3">Bem-vindo</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
          Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
          nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
        </p>
      </Container>

      <SocialNotes />
      <SiteFooter />
    </>
  );
}
