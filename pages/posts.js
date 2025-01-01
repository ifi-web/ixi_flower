import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import Hyprland1 from '../public/archlinuximage/photo_1_2024-12-15_19-32-48.jpg'
import Hyprland2 from '../public/archlinuximage/photo_2_2024-12-15_19-32-48.jpg'
import Hyprland3 from '../public/archlinuximage/photo_3_2024-12-15_19-32-48.jpg'
import Arcane from '../public/archlinuximage/arcane.jpg'
import Nvim from '../public/archlinuximage/nvim.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Linux Image
      </Heading>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title="" thumbnail={Hyprland1} href="#" />
          <GridItem title="" thumbnail={Hyprland2} href="#" />
          <GridItem title="" thumbnail={Hyprland3} href="#" />
          <GridItem
            title="My Nvim 🦆 🦀 🐈 "
            thumbnail={Nvim}
            href="https://www.linkedin.com/feed/update/urn:li:activity:7274095178410287106/"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title="Arcane :o" thumbnail={Arcane} href="#" />
        </SimpleGrid>
      </Section>

      {/* <Section delay={0.3}> */}
      {/*   <SimpleGrid columns={[1, 2, 2]} gap={6}> */}
      {/*     <GridItem */}
      {/*       title="How I’ve Attracted The First 500 Paid Users For My SaaS That Costs $5/mo" */}
      {/*       thumbnail={thumb500PaidUsers} */}
      {/*       href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820" */}
      {/*     /> */}
      {/*     <GridItem */}
      {/*       title="I stopped setting a financial goal for my SaaS" */}
      {/*       thumbnail={thumbFinancialGoal} */}
      {/*       href="https://blog.inkdrop.app/i-stopped-setting-a-financial-goal-for-my-saas-a92c3db65506" */}
      {/*     /> */}
      {/*   </SimpleGrid> */}
      {/* </Section> */}
      {/**/}
      {/* <Section delay={0.5}> */}
      {/*   <SimpleGrid columns={[1, 2, 2]} gap={6}> */}
      {/*     <GridItem */}
      {/*       title="How to Price Yourself as a Freelance Developer" */}
      {/*       thumbnail={thumbHowToPriceYourself} */}
      {/*       href="https://blog.inkdrop.app/how-to-price-yourself-as-a-freelance-developer-3453dfd59d91" */}
      {/*     /> */}
      {/*     <GridItem */}
      {/*       title="I made my React Native app 50x faster" */}
      {/*       thumbnail={thumb50xFaster} */}
      {/*       href="https://www.youtube.com/watch?v=vj723NlrIQc" */}
      {/*     /> */}
      {/*   </SimpleGrid> */}
      {/* </Section> */}
    </Container>
  </Layout>
)

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default Posts
