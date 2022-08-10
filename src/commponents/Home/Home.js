import React from 'react'
import styled from 'styled-components'
import Hero from '../HeroPage/Hero'
import PropsCard from '../Cards/PropsCard'
import Footer from '../Footer/Footer.js'
import HoverCard from '../Footer/HoverCard.js'

const Home = () => {
  return (
    <Container>
        <Hero />
        <PropsCard />
        <HoverCard />
        <Footer />
    </Container>
  )
}

export default Home

const Container = styled.div``