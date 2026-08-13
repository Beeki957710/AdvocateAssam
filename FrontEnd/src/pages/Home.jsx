import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import HowItWorks from './HowItWorks'
import FAQ from '../components/FAQ'

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <HowItWorks />
      <FAQ />
      <Banner />
    </div>
  )
}
 export default Home;


