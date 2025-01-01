import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="ifi-web">
    <Container>
      <Title>
        ifi-web <Badge>2024 - 2025</Badge>
      </Title>
      <P>This Is Website Is In Completion And It Is Probably For Sale.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://ifi-web.github.io/ifi_web/" target="_blank">
              https://ifi-web.github.io/ifi_web/ <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>My teammate</Meta>
          <Link href="https://github.com/FreaksLessy" target="_blank">
            https://github.com/FreaksLessy <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>React / TS / Vite</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/ifi_web.png" alt="Website" />
      <WorkImage src="/images/works/ifi_web2.png" alt="Website" />
    </Container>
  </Layout>
)

export default Work

// Static generation method
export async function getStaticProps() {
  return {
    props: {}
  }
}
