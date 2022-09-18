import React, {useEffect} from 'react'
import Head from 'next/head'

// import Custom Components
import Header from '../containers/common/header'
import BannerSection from './layouts/sections/gym/banner'
import FormatSection from './layouts/sections/gym/format'
import AboutSection from './layouts/sections/gym/about'
import ScheduleSection from './layouts/sections/gym/schedule'
import CounterSection from './layouts/sections/gym/counter'
import TrainerSection from './layouts/sections/gym/trainer'
import TestimonialSection from './layouts/sections/gym/testimonial'
import PricingSection from './layouts/sections/gym/pricing'
import CalculateSection from './layouts/sections/gym/calculate'
import BrandSection from './layouts/sections/gym/brand'
import FooterSection from './layouts/sections/gym/footer'

const Home = () => {

    useEffect(() => {
      document.body.style.setProperty('--primary', '#000')
      document.body.style.setProperty('--secondary', '#000')
      document.body.style.setProperty('--light', '#000')
      document.body.style.setProperty('--dark', '#000')
    })
  
    return (
        <div>
            <Head>
                <title>Omar Al-Okaby </title>
            </Head>

            <Header  className="gym nav-lg"/>

            <BannerSection />

            <AboutSection />

            {/* <ScheduleSection /> */}
            <TestimonialSection />
            <TrainerSection />
            <FormatSection />

            <CounterSection />

            

           

            <PricingSection />

            <CalculateSection />

            <BrandSection />

            <FooterSection />

        </div>
    )
}
export default Home;