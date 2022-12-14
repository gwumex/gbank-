import React from 'react'
import styles from './style'
import {    
  Navbar,
  Billing,
  Business,
  Button,
  CardDetails,
  Clients,
  FeedbackCard,
  Footer,
  GetStarted,
  Hero,
  Stat} from "./components"
import Stats from './components/Stats'
const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
        </div>
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Business/>
          <Billing/>
          <CardDetails/>
          <Clients/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App