import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HeaderFc from './components/header/header.jsx'
import SwiperMain from './components/Slider/Swiper.jsx'
import MainContents from './components/main/Main.jsx'
import FooterFc from './components/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='root_in'>
    <HeaderFc/>
    <SwiperMain />
    <MainContents />
    <FooterFc/>
    </div>
  )
}

export default App
