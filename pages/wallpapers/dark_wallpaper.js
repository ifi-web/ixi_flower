import { Container, Heading, Image } from '@chakra-ui/react'
import { Title } from '../../components/wallpaper'
import Layout from '../../components/layouts/article'

const Wallpaper = () => (
  <Layout title="Cherry blossom view and coding">
    <Container>
      <Title>These are my dark wallpapers</Title>

      <Heading as="h2" fontSize={20} my={4}>
        HD - 4k
      </Heading>

      {Array.from({ length: 5 }, (_, i) => (
        <Image
          key={i}
          src={`/images/wallpapers/dark${i + 1}.jpg`}
          alt={`Dark wallpaper ${i + 1} (Dark bg)`}
          my={4}
          borderRadius="lg"
          boxShadow="md"
        />
      ))}
    </Container>
  </Layout>
)

export default Wallpaper

export async function getStaticProps() {
  return {
    props: {}
  }
}
