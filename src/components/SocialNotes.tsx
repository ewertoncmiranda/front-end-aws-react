import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function SocialNotes() {
  return (
    <Container className="py-4" id="sobre">
      <Row className="g-4">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Sobre</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
                ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa,
                varius a, semper congue, euismod non, mi.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Redes Sociais</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item as="a" href="https://github.com/" target="_blank" rel="noreferrer">
                  <FaGithub className="me-2" /> GitHub
                </ListGroup.Item>
                <ListGroup.Item as="a" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  <FaLinkedin className="me-2" /> LinkedIn
                </ListGroup.Item>
                <ListGroup.Item as="a" href="https://x.com/" target="_blank" rel="noreferrer">
                  <FaTwitter className="me-2" /> X / Twitter
                </ListGroup.Item>
                <ListGroup.Item as="a" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  <FaInstagram className="me-2" /> Instagram
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>

          <Card className="mt-3">
            <Card.Body>
              <Card.Title>Notas</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Status: <Badge bg="success">Online</Badge>
                </ListGroup.Item>
                <ListGroup.Item>
                  Versão: <Badge bg="secondary">1.0.0</Badge>
                </ListGroup.Item>
                <ListGroup.Item>
                  Build: <Badge bg="info">Vite + React</Badge>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
