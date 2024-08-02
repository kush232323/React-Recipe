import React from 'react'
import Navbar from './Navbar'
import PopularSlider from './PopularSlider'
import TredingSilider from './TredingSilider'


const Home = () => {
  return (
    <><div className='main'>
      
    <Navbar/>
    <PopularSlider/>
    <TredingSilider />
    </div>
    </>
  )
}

export default Home