import styles from "./style"
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import { NavBar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Redirect, Last, Cryptos} from "./components/index.js"

// import { useState, useEffect } from 'react'
// import { getAllCryptos } from "./store/actions"
// import { useSelector, useDispatch } from "react-redux"



const App = () => {

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAllCryptos)
// }, [])



  return (
    <div className="bg-primary w-full overflow-hidden" >
      <Router>

      
        <div className={`${styles.paddingX} ${styles.flexCenter}`} >
          <div className={`${styles.boxWidth}`} >
            <NavBar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`} >
          <div className={`${styles.boxWidth}`} >
            <Hero />
          </div>
        </div>


        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`} >
          <div className={`${styles.boxWidth}`} >
            <Stats />
            <Business />
            <Redirect />
            <Testimonials />
            <Billing />
            <CardDeal />
            <Clients />
            {/*<Cryptos /> AUN NO ESTA LISTO */}
            <Cryptos />

            

            <Last />
          </div>
        </div>

        

      </Router>
    </div>
  )
}

export default App
