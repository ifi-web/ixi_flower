import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { WorkGridItem } from '../../components/grid-item'

import dark1 from '../../public/images/wallpapers/dark1.jpg'

const Wallpapers = () => (
  <Layout title="Wallpaper Packs">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Wallpaper Packs
      </Heading>

      <Box my={4}>My wallpapers :)</Box>

      <Section>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <WorkGridItem
            category="wallpapers"
            id="wallpaper"
            title="Wallpapers"
            thumbnail={thumbMachiya}
          ></WorkGridItem>
          <WorkGridItem
            category="wallpapers"
            id="dark_wallpaper"
            title="Dark"
            thumbnail={dark1}
          ></WorkGridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Wallpapers
export { getServerSideProps } from '../../components/chakra'
