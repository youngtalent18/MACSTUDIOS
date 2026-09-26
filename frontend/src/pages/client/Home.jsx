import Featured from '../../components/features/Featured'
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
    </>
  )
}

export default Home