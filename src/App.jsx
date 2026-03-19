import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOption from './components/PricingOption/PricingOption'
import ResultChart from './components/ResultChart/ResultChart'
import AiChart from './components/ResultChart/AiChart'
import MyChart from './components/ResultChart/MyChart'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'


const pricingPromise = fetch('pricingData.json')
  .then(res=> res.json())

const marksPromise = axios.get('marksData.json')


function App() {

  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
        


        {/* <ResultChart></ResultChart> */}
        {/* <AiChart></AiChart> */}
        {/* <MyChart></MyChart> */}

        

      </main>
    </>
  )
}

export default App
