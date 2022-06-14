import Layout from '../components/Layout'
import Carousel, { loadSwiper } from '../components/Carousel'
import Movie, { loadMovie } from '../components/Movie'
import axios from 'axios'
export default function Home({ swiper, movie }) {
  return (
    <div>
      <Layout>
        <Carousel data={swiper} />
        <Movie title={'电影'} data={movie} />
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  let { data: swiper } = await loadSwiper()
  let { data: movie } = await loadMovie()
  return {
    props: {
      swiper,
      movie
    }
  }
}
