import styles from "./style"

import { NavBar,Hero,Stats,Business,Billing, CardDeal, Testimonials,  Clients, CTA, Redirect, Last } from "./components/index.js"

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden" >
      <div className={`${styles.paddingX} ${styles.flexCenter}`} >
        <div className={`${styles.boxWidth}`} >
          <NavBar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`} >
        <div className={`${styles.boxWidth}`} >
          <Hero/>
        </div>
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`} >
        <div className={`${styles.boxWidth}`} >
          <Stats/>
          <Business/>
          <Redirect/>
          <Testimonials/>
          <Billing/>
          <CardDeal/>
          <Clients/>
          
          
          <Last/>
        </div>
      </div>

    </div>
  )
}

export default App
