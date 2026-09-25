import Featured from '../../components/features/Featured'
import Footer from '../../components/features/Footer'
import Hero from '../../components/features/Hero'
import Snapshot from '../../components/features/Snapshot'
import Testimonials from '../../components/features/Testimonials'
import YoutubePulls from '../../components/features/YoutubePulls'

const Home = () => {
  return (
    <>
      <Hero />
      <Snapshot />
      <Featured />
      <Testimonials />
      <YoutubePulls />
      <Footer />
    </>
  )
}

export default Home