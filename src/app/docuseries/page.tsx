import Container from '@/components/Container';
import Title from '@/components/Title';
import Paragraph from '@/components/Paragraph';
import Header from '@/components/Header';

export default function Docuseries() {
  return (
    <Container>
      <Header>
        <Title>Docuseries</Title>
        <Paragraph>
          We’re a dynamic group of individuals who are passionate about what we do and dedicated to
          delivering the best results for our clients.
        </Paragraph>
      </Header>
      <div className="mt-4 flex">
        <iframe
          src="https://www.youtube.com/embed/ZkbIR7YjsIo"
          title="YouTube video player"
          style={{ border: 'none', width: '1000px', height: '550px' }}
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </Container>
  );
}
