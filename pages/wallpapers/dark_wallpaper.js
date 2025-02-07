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

      {['dark1', 'dark2', 'dark3', 'dark4', 'dark5'].map((imageName, index) => (
        <Image
          key={index}
          src={`/images/wallpapers/${imageName}.jpg`}
          alt={`Dark wallpaper ${index + 1} (Dark bg)`}
          my={4}
          borderRadius="lg"
          boxShadow="md"
        />
      ))}
    </Container>
  </Layout>
)

export default Wallpaper
