import React from 'react'
import HeroSlider from './HeroSlider'
import Helmet from '../../frontend_services/Helmet'
import AboutSection from './AboutSection'
const Home = () => {
  return (
    <Helmet title='Home'>
      <section className="p-0 hero__slider-section">
        <HeroSlider />
      </section>


      {/* =====about-section===== */}

      <AboutSection />
    </Helmet>
  )
}

export default Home
