import Accumsan from '@/components/App&Games/Accumsan'
import Earlyaccess from '@/components/App&Games/Earlyaccess'
import Feedback from '@/components/App&Games/Feedback'
import Freepick from '@/components/App&Games/Freepick'
import Gamenews from '@/components/App&Games/Gamenews'
import Hero from '@/components/App&Games/Hero'
import Rewards from '@/components/App&Games/Rewards'
import Tires from '@/components/App&Games/Tires'
import AppSection from '@/components/HomePageComponents/AppSection/AppSection'
import React from 'react'

const AppGame = () => {
  return (
    <>
      <Hero/>
      <Feedback/>
      <Gamenews/>
      <Accumsan/>
      <Rewards/>
      <Tires/>
      <Freepick/>
      <Earlyaccess/>
    </>
  )
}

export default AppGame
