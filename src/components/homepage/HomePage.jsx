import React from 'react'
import Hero from './components/Hero'
import Search from './components/Search'
import PopularDestinations from './components/PopularDestinations'
import Packages from './components/Packages'
import CallToAction from './components/CallToAction'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Search />
      <PopularDestinations />
      <Packages />
      <PopularDestinations/>
      <CallToAction/>
    </div>
  )
}

export default Homepage