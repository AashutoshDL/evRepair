import React from 'react'
import AboutUs from './AboutUs'
import Location from './Location'
import Services from './Services'
import Header from './Header'
import Contacts from './Contacts'


const Home = () => {
  return (
    <>
    <div id='home'>
        <Header />
        <AboutUs />
        <Location />
        <Services />
        <Contacts/>
    </div>
    </>
  )
}

export default Home
