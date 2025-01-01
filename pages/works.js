import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import ixiFlowerWebsite from '../public/images/ixi_flower_website.jpg'
import ixiFlowerWebsite2 from '../public/images/ixiflowerwebsite2.jpg'
import ifiwebwebsite from '../public/images/ifi_web.png'
import plasticImage from '../public/images/plasticimage.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="ixi_flower"
            title="ixi_flower"
            thumbnail={ixiFlowerWebsite}
          >
            The IXI_FLOWER Website
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem title="Plastic" thumbnail={plasticImage}>
            Plastic website
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="ixi_flower"
            thumbnail={ixiFlowerWebsite2}
          >
            IXI_FLOWER learning part
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="ifi_web" thumbnail={ifiwebwebsite} title="If-web">
            IfI-web website with (Freakless)
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default Works
