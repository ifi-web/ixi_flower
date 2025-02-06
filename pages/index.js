import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'
import Head from 'next/head'
import Ixi_flower_image from '../public/images/ixi_flower.jpg'

const Home = () => (
  <>
    <Head>
      <title>IxI Flower | Portfolio</title>
      <meta
        name="description"
        content="Welcome to IxI Flower's portfolio. Programmer specializing in DevOps, Backend, and Cloud Computing."
      />
    </Head>

    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 0'
      }}
    >
      <Image
        src="/images/john.png"
        alt="Amirabbas Rouintan's profile picture"
        width={400}
        height={400}
        loading="lazy"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>

    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, My Name Is Amirabbas (IxI_Flower)
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              IxI_Flower
            </Heading>
            <p>Programmer (DevOps / Backend / Cloud Computing / Automation)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src={Ixi_flower_image}
                alt="Amirabbas Rouintan's profile picture"
                width="100"
                height="100"
                loading="lazy"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            My name is Amirabbas, known as ixi_flower on social media. I was
            born in 2007 and currently live in Iran. I love programming and
            began my journey in 2019 with Python. Since then, I have gained
            experience in networking and completed courses such as Network+,
            CEH, Security+, and CCNA. I am a Linux enthusiast and currently use
            EndeavourOS with Hyprland. Here is my GitHub profile:{' '}
            <Link
              href="https://github.com/AmirabbasRouintan"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              ixi_flower
            </Link>
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My Works
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2007</BioYear>
            Born in Iran
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Began my programming journey.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Started utilizing LinkedIn to connect with professionals.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I Love:
          </Heading>
          <Paragraph>Music, Playing Games, Learning, Volleyball.</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the Web
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://github.com/AmirabbasRouintan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @AmirabbasRouintan (GitHub)
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/amirabbas-rouintan-0802a7312/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  LinkedIn Profile
                </Button>
              </Link>
            </ListItem>
          </List>

          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="#"
              scroll={false}
              leftIcon={<EmailIcon />}
              colorScheme="teal"
            >
              IxI_Flower WebSite
            </Button>
          </Box>
        </Section>
      </Container>
    </Layout>
  </>
)

export default Home
