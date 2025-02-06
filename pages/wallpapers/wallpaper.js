import { Container, Heading, Image } from '@chakra-ui/react'
import { Title } from '../../components/wallpaper'
import Layout from '../../components/layouts/article'

const Wallpaper = () => (
  <Layout title="Cherry blossom view and coding">
    <Container>
      <Title>My Lovely 🎴 wallpapers</Title>

      <Heading as="h2" fontSize={20} my={4}>
        HD - 4k
      </Heading>

      {Array.from({ length: 8 }, (_, i) => (
        <Image
          key={i}
          src={`/images/wallpapers/B${i + 1}.jpg`}
          alt={`Wallpaper ${i + 1}`}
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
