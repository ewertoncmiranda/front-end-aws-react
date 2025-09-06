import { Container } from 'react-bootstrap';

export default function SiteFooter() {
  return (
    <footer className="bg-light border-top mt-5">
      <Container className="py-3 d-flex flex-column flex-md-row justify-content-between">
        <span>© {new Date().getFullYear()} FrontEnd with AWS</span>
        <a href="#contato">contato@exemplo.com</a>
      </Container>
    </footer>
  );
}
