import Boosting from '@/components/About/Boosting'
import Hero from '@/components/About/Hero'
import Ourkey from '@/components/About/Ourkey' 
import Countdown from '@/components/About/Countdown'
import Gamers from '@/components/About/Gamers'
import Ourstory from '@/components/About/Ourstory'
import Team from '@/components/About/Team'
import Getin from '@/components/About/Getin'
import Product from '@/components/About/Product'

const About = () => {
  return (
    <>
      <Hero/>
      <Boosting/>
      <Ourkey/>
      <Product/>
      <Countdown/>
      {/* <Countdownaddreview/> */}
      <Gamers/>
      <Ourstory/>
      <Team/>
      <Getin/>
    </>
  )
}

export default About
