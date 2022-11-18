import React from 'react'
import { apple, bill, google } from "../assets"
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id="product" className={layout.sectionImgReverse} >
      <div className={layout.sectionImgReverse} >
        <img src={bill} alt="billing" className="w-[100%] h-[100&] relative z-[5]  " />

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient  ' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient  ' />
      </div>


      <div className={layout.sectionInfo} >
        <h2 className={styles.heading2} >
          Paypal support <br className='sm:block hidden' />
          the cryptocurrencies.  
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `} >
          Paypal is one of the many companies that started to accept payments in cryptocurrencies such as Mastercard, Visa, Starbucks, Norwegian, etc.
        </p>
      </div>

    </section>
  )
}

export default Billing