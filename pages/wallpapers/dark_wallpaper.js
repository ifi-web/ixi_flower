import { Container, Heading } from '@chakra-ui/react'
import { Title } from '../../components/wallpaper'
import Layout from '../../components/layouts/article'
import WallpaperThumbnailList from '../../components/wallpaper-thumbnail-list'

const Wallpaper = () => (
  <Layout title="Cherry blossom view and coding">
    <Container>
      <Title>These are my dark wallpapers</Title>

      {/* <Box */}
      {/*   align="center" */}
      {/*   my={4} */}
      {/*   p={4} */}
      {/*   borderRadius="lg" */}
      {/*   bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} */}
      {/* > */}
      {/*   <Box mb={4}> */}
      {/*     <em> */}
      {/*       Buying the wallpaper pack will greatly help me invest in gear and */}
      {/*       tools to create high-quality content 💪🙏 */}
      {/*     </em> */}
      {/*   </Box> */}
      {/*   <BuyButton productId="65jPS" price={19} /> */}
      {/* </Box> */}
      {/**/}

      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}> */}
      {/*   <iframe */}
      {/*     src="https://www.youtube.com/embed/UNGi144eVbI" */}
      {/*     title="YouTube video player" */}
      {/*     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" */}
      {/*     allowFullScreen */}
      {/*   ></iframe> */}
      {/* </AspectRatio> */}

      <Heading as="h2" fontSize={20} my={4}>
        HD - 4k
      </Heading>
      <WallpaperThumbnailList
        numOfImages={5}
        urlForImage={i =>
          `/images/wallpapers/dark${String(i).padStart(1, '0')}.jpg`
        }
        alt="Dark wallpaper (Dark bg)"
      />

      {/**/}
      {/* <Heading as="h2" fontSize={20} my={4}> */}
      {/*   From video - up to 4K */}
      {/* </Heading> */}
      {/* <WallpaperThumbnailList */}
      {/*   numOfImages={14} */}
      {/*   urlForImage={i => */}
      {/*     `/images/wallpapers/cherry-blossoms/v-${String(i).padStart( */}
      {/*       2, */}
      {/*       '0' */}
      {/*     )}.jpg` */}
      {/*   } */}
      {/*   alt="From video" */}
      {/* /> */}
      {/**/}
      {/* <Heading as="h2" fontSize={20} my={4}> */}
      {/*   Portrait - up to 6K */}
      {/* </Heading> */}
      {/* <WallpaperThumbnailList */}
      {/*   numOfImages={7} */}
      {/*   urlForImage={i => */}
      {/*     `/images/wallpapers/cherry-blossoms/pl-${String(i).padStart( */}
      {/*       2, */}
      {/*       '0' */}
      {/*     )}.jpg` */}
      {/*   } */}
      {/*   alt="Portrait" */}
      {/* /> */}
      {/**/}

      {/* <LegalLinks /> */}
    </Container>
  </Layout>
)

export default Wallpaper

export async function getStaticProps() {
  // You can fetch data or set static content here
  return {
    props: {}
  }
}
