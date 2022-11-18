import React from 'react'
import { card } from "../assets"
import styles, { layout } from '../style'
import Button from './Button'


const CardDeal = () => {
  return (
    <section className={layout.section} >
      <div className={layout.sectionInfo} >
        <h2 className={styles.heading2} >Scan to login and two factor authentification<br className='sm:block hidden' /></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `} >
          For beginners there are more than 100 tutorial about normal trading and futures trading to learn correctly
           and your daily/monthly/ yearly earning will be reflected in your dahsboard.
        </p> 

        <Button styles="mt-10" /> {/*I guess ill need to create another button component */}
      </div>

      <div className={layout.sectionImg} >
        <img src={card} alt="card" className="w-[100%] h-[100%] "  />
      </div>



    </section>
  )
}

export default CardDeal