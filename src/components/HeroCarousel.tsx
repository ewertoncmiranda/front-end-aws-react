import { Container, Carousel } from 'react-bootstrap';

const items = [
  { src: 'https://picsum.photos/1200/400?1', title: 'Item 1', href: 'https://example.com/1' },
  { src: 'https://picsum.photos/1200/400?2', title: 'Item 2', href: 'https://example.com/2' },
  { src: 'https://picsum.photos/1200/400?3', title: 'Item 3', href: 'https://example.com/3' },
  { src: 'https://picsum.photos/1200/400?4', title: 'Item 4', href: 'https://example.com/4' },
  { src: 'https://picsum.photos/1200/400?5', title: 'Item 5', href: 'https://example.com/5' },
];

export default function HeroCarousel() {
  return (
    <Container className="py-4">
      <Carousel>
        {items.map((it, i) => (
          <Carousel.Item key={i}>
            <a href={it.href} target="_blank" rel="noreferrer">
              <img
                src={it.src}
                className="d-block w-100"
                alt={it.title}
                style={{ objectFit: 'cover', height: 380 }}
              />
            </a>
            <Carousel.Caption>
              <h5 className="text-shadow">{it.title}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
