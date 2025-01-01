import {
  Container,
  Badge,
  Link,
  List,
  ListItem
  // AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="ixi_flower">
    <Container>
      <Title>
        ixi_flower <Badge>2024</Badge>
      </Title>
      <P>this is my own website (Solo - fullstack)</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Status</Meta>
          Completing . . .
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Vite, React Native</span>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/AmirabbasRouintan">
            https://github.com/AmirabbasRouintan <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/ixi_flower_website.jpg" alt="Website" />
      <WorkImage src="/images/works/ixi_flower_404.jpg" alt="Website" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
