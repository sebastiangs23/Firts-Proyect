import React from 'react'
import { card } from "../assets"
import styles, { layout } from '../style'
import Button from './Button'


const CardDeal = () => {
  return (
    <section id="tutorials" className={layout.section} >
      <div className={layout.sectionInfo} >
        <h2 className={styles.heading2} >Scan to login and two factor authentification<br className='sm:block hidden' /></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `} >
          For beginners there are more than 100 tutorial about normal trading and futures trading to learn correctly
          and your daily/monthly/ yearly earning will be reflected in your dahsboard.
        </p>


        <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins 
                          font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`} >
          <a href='https://www.binance.com/es/support/faq/gu%C3%ADa-para-principiantes-en-el-trading-de-futuros-web-360039304272' target="_blank" >
            Futures Trading
          </a>

        </button>


      </div>

      <div className={layout.sectionImg} >
        <img src={card} alt="card" className="w-[100%] h-[100%] " />
      </div>



    </section>
  )
}

export default CardDeal