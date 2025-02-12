import Head from 'next/head'
import { useRouter } from 'next/router'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children }) => {
  const router = useRouter()

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="IXI homepage" />
        <meta name="author" content="IxI Flower" />
        <meta name="author" content="IXI" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="ixi_flower" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ixi_flower" />
        <meta name="twitter:creator" content="@ixi_flower" />
        <meta property="og:site_name" content="Takuya Matsuyama" />
        <meta name="og:title" content="IxI Flower" />
        <meta property="og:type" content="website" />
        <title>ixi_flower - HomePage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
